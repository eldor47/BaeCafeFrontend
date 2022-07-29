import type { NextPage } from 'next';
import ReactModal from 'react-modal';
import { parseEther } from '@ethersproject/units';
import React, { useEffect, useState } from 'react';
import { Contract } from '@ethersproject/contracts';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';

import More from 'icon/more';
import Decrease from 'icon/decrease';
import Increase from 'icon/increase';
import api from 'components/api/axios';
import StakeStyle from 'styles/Stake';
import EndModal from 'components/EndModal';
import ChainModal from 'components/WalletModal';
import ChangeModal from 'components/ChangeModal';
import BaeCafe from 'components/contracts/BaeCafe.json';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { NETWORK, OPENSEA, CONTRACT_NUMBER } from './helper';

interface StakeProps { }
ReactModal.setAppElement('#__next');
const StakeComponent: NextPage<StakeProps> = ({ }) => {
  const [endModal, setShowEndModal] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [totalMint, setTotalMint] = useState<number>(1);
  const [minting, setMinting] = useState<boolean>(false);
  const [maxMint, setMaxMint] = useState<number>(null);
  const [walletName, setWalletName] = useState<string>(null);
  const [openChangeModal, setOpenChangeModal] = useState<boolean>(false);
  const { active, account, activate, library, chainId } = useWeb3React();
  const [isCaculate, setCaculate] = useState<boolean>(false);
  const [error, setError] = useState<string>(null);
  const [opensea, setOpensea] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [minted, setMinted] = useState<any>(null);
  const [isCountDown, setCountDown] = useState(true);

  const handleCountDown = () => {
    setCountDown(false);
  }
  useEffect(() => {
    if (chainId && ![1, 4].includes(chainId)) {
      setError('The chain is not supported. Please switch to Ethereum Mainnet');
    }
  }, [chainId]);

  useEffect(() => {
    if (account) {
      handleMaxMint();
    }
  }, [account]);

  const handleMintNumber = (value) => {
    if (value < 1 || value > maxMint) {
      return;
    }
    setTotalMint(value);
  };
  const handleChangeModal = () => {
    if (account) {
      setOpenChangeModal(!openChangeModal);
    }
  };
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const connectWallet = async (connector: any) => {
    setError('');
    if (connector instanceof InjectedConnector) {
      localStorage.setItem('wallet', 'Metamask');
      setWalletName('Metamask');
    }
    if (connector instanceof WalletConnectConnector) {
      localStorage.setItem('wallet', 'WalletConnect');
      setWalletName('WalletConnect');
    }
    if ((connector as any)?.walletConnectProvider) {
      (connector as any).walletConnectProvider = undefined;
    }
    setOpenModal(false);
    setCaculate(true);
    const response = await activate(connector, undefined, true)
      .then((data) => {
        return true;
      })
      .catch((error) => {
        setOpenModal(false);
        if (error instanceof UnsupportedChainIdError) {
          setError(
            'The chain is not supported. Please switch to Ethereum Mainnet'
          );
        } else {
          setCaculate(false);
          setOpenModal(false);
          setError('Oops! Something went wrong.');
        }
      });
  };

  const showChainModal = () => {
    setOpenChangeModal(false);
    setOpenModal(true);
  };
  
  const handleEndModal = () =>{
    setShowEndModal(!endModal);
  }

  const showAddressByDots = (address: string | null | undefined) => {
    if (!address || address.length < 10) {
      return address;
    }
    return (
      address.slice(0, 6) +
      '...' +
      address.slice(address.length - 4, address.length)
    );
  };

  const getBaeData = async () =>{
    return await api.get(`/calcBaecafe?walletAddress=${account}`);
  }

  const handleMaxMint = async () => {
    try {
      setCaculate(true);
      setError('');
      const response = await getBaeData();
      const availableToMint = response?.data?.availableToMint;
      setData(response.data);
      if (typeof availableToMint === 'number' && response.status === 200) {
        const signer = await library.getSigner();
        const contract = new Contract(CONTRACT_NUMBER, BaeCafe.abi, signer);
        const mintedOf = await contract.mintedOf(account);
        if (mintedOf?._isBigNumber) {
          let mintedOfNumbr = mintedOf.toNumber();
          let maxMint = availableToMint - mintedOfNumbr < 0 ? 0 : availableToMint - mintedOfNumbr;
          setMaxMint(maxMint);
          setTotalMint(maxMint);
        }
      } else {
        setMaxMint(0);
        setTotalMint(0);
      }
      setCaculate(false);
    } catch (error) {
      setCaculate(false);
      setError('Oops! Something went wrong.');
    }
  };

  const mintNFT = async () => {
    try {
      setError('');
      if (!data || maxMint < 1) {
        return;
      }
      // const utcNow = new Date().toUTCString();
      // const now = new Date(utcNow).getTime() / 1000;

      // const endMintTime = new Date('Wed, 30 Mar 2022 17:00:00 GMT').getTime() / 1000;
      // const isEndMint = now - endMintTime;

      // if(isEndMint > 0){
      //   setError('Oops! Something went wrong.');
      //   return;
      // }

      let hexProof = data.hexProof;
      setMinting(true);
      if(data.availableToMint > 0 && !hexProof){
        const response = await getBaeData();
        if(response?.data?.hexProof){
          hexProof = response.data.hexProof;
        } else{
          setError('Oops! Something went wrong.');
          setMinting(false);
          return;
        }
      }
      const signer = await library.getSigner();
      const contract = new Contract(CONTRACT_NUMBER, BaeCafe.abi, signer);
      const response = await contract.mintWhitelist(
        data.availableToMint,
        totalMint,
        hexProof,
        { value: parseEther((0.08008 * totalMint).toString()) }
      );
      setMinting(false);
      if (response?.hash) {
        setMaxMint(maxMint - totalMint);
        let newMintedData = minted
          ? [...minted, response.hash]
          : [response.hash];
        setMinted(newMintedData);
        const result = await response.wait();
        if (result?.events?.length < 1) {
          return;
        }
        let idList = [];
        for (let event of result.events) {
          const tokenId = event.args?.tokenId?.toNumber();
          idList.push(tokenId);
        }
        localStorage.setItem(response.hash, JSON.stringify(idList));
        let newOpenSea = opensea ? { ...opensea, [response.hash]: idList } : { [response.hash]: idList };
        setOpensea(newOpenSea);
      }
    } catch (error) {
      setMinting(false);
      if (error.code === 'INSUFFICIENT_FUNDS') {
        setError('Insufficient balance to mint Bae');
      } else {
        setError('Oops! Something went wrong.');
      }
    }
  };

  const renderOpensea = (hash) => {
    let idList = opensea && opensea[hash] || JSON.parse(localStorage.getItem(hash));
    if (idList) {
      return idList.map((item, index) => {
        return (<a
          className="opensea"
          target="_blank"
          rel="noreferrer"
          key={item}
          href={`${OPENSEA}assets/${CONTRACT_NUMBER}/${item}`}
        >
          View on Opensea
        </a>)
      })
    }
    return '';
  }

  const renderTransaction = () => {
    return minted.map((item, index) => {
      return (
        <div className="transaction" key={item}>
          <div className="success">Your BAE has been Minted!</div>
          <a
            className="etherscan"
            target="_blank"
            rel="noreferrer"
            href={`${NETWORK}tx/${item}`}
          >
            <div className="txid">txid</div>
            <More />
          </a>
          {renderOpensea(item)}
        </div>
      );
    });
  };

  const getMaxMint = () => {
    if (typeof maxMint === 'number') {
      return maxMint;
    }
    return 'Connect your wallet first';
  };

  useEffect(() => {
    const wallet = localStorage.getItem('wallet');
    if (wallet) {
      setWalletName(wallet);
    }
  }, []);

  // const utcNow = new Date().toUTCString();
  // const now = new Date(utcNow).getTime() / 1000;
  // const startMint = new Date('Tue, 29 Mar 2022 17:00:00 GMT').getTime() / 1000;
  // const remainingTime = startMint - now;

  // const endMintTime = new Date('Wed, 30 Mar 2022 17:00:00 GMT').getTime() / 1000;
  // const isEndMint = now - endMintTime;

  return (
    <StakeStyle>
      <div className="stake-top">
        <div className="stake-item">
          <h3>Pending Rewards</h3>
          <h1>$1200 BAE</h1>
          <button className='claim'><h2>Claim</h2></button>
        </div>
        <div className="stake-item">
          <h3>Staked Rewards</h3>
          <h4>2 Bae Cafe - 40 per day</h4>
          <h4>2 Meka Bae - 40 per day</h4>
          <h4>5 Pixel Baes - 10 per day</h4>
          <h4>2 Stamps - x 1.2</h4>
          <h2>$108 BAE daily</h2>
        </div>
        <div className="stake-item">
          <h3>Current Balance</h3>
          <h1>$4200.69 BAE</h1>
        </div>
      </div>
      <div className="stake-bottom">
        <div className="stake-item">
          <h3>Currently Staking</h3>
          <div className='image-container'>
            <img className='bae-img' src="https://gateway.pinata.cloud/ipfs/QmcxWBcT4hs8Z1orjXuBHB7MiWqNdqssXnb8ET4S99F5p7/bae_img_season1/1.png" />
            <img className='bae-img' src="https://gateway.pinata.cloud/ipfs/QmcxWBcT4hs8Z1orjXuBHB7MiWqNdqssXnb8ET4S99F5p7/bae_img_season1/1.png" />
            <img className='bae-img' src="https://gateway.pinata.cloud/ipfs/QmcxWBcT4hs8Z1orjXuBHB7MiWqNdqssXnb8ET4S99F5p7/bae_img_season1/1.png" />
            <img className='bae-img' src="https://gateway.pinata.cloud/ipfs/QmcxWBcT4hs8Z1orjXuBHB7MiWqNdqssXnb8ET4S99F5p7/bae_img_season1/1.png" />
          </div>
        </div>
        <div className="stake-item">
          <h3>Select to Stake</h3>
          <div className='image-container'>
            <img className='bae-img' src="https://gateway.pinata.cloud/ipfs/QmcxWBcT4hs8Z1orjXuBHB7MiWqNdqssXnb8ET4S99F5p7/bae_img_season1/1.png" />
            <img className='bae-img' src="https://gateway.pinata.cloud/ipfs/QmcxWBcT4hs8Z1orjXuBHB7MiWqNdqssXnb8ET4S99F5p7/bae_img_season1/1.png" />
          </div>
          <button className='claim'><h2>Stake</h2></button>
        </div>
      </div>
    </StakeStyle>
  );
};

export default StakeComponent;
