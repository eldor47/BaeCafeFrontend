import type { NextPage } from 'next';
import ReactModal from 'react-modal';
import Decimal from 'decimal.js';
import Web3 from 'web3';
import { parseEther } from '@ethersproject/units';
import React, { useEffect, useState } from 'react';
import { Contract } from '@ethersproject/contracts';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';

import More from 'icon/mores2';
import Decrease from 'icon/decrease';
import Increase from 'icon/increase';
import api from 'components/api/axios';
import ChainModal from 'components/Season2/WalletModal';
import ChangeModal from 'components/Season2/ChangeModal';
import MintStyle from 'styles/Season2/MintElement';
import CountDownModal from 'components/CountDown';

import Mekabae from './contracts/Mekabae.json';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { NETWORK, OPENSEA, CONTRACT_NUMBER, INFURA_URL, CLOUDFRONT_IMG } from '../helper';

interface MintProps { }
const MAX_MINT = 100;
const TOTAL_SUPPLY = 2222;
ReactModal.setAppElement('#__next');
const StakeBae: NextPage<MintProps> = ({ }) => {
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [endModal, setShowEndModal] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [totalMint, setTotalMint] = useState<number>(4);
  const [minting, setMinting] = useState<boolean>(false);
  const [walletName, setWalletName] = useState<string>(null);
  const [openChangeModal, setOpenChangeModal] = useState<boolean>(false);
  const { active, account, activate, library, chainId } = useWeb3React();
  const [isCaculate, setCaculate] = useState<boolean>(false);
  const [error, setError] = useState<string>(null);
  const [opensea, setOpensea] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [minted, setMinted] = useState<any>(null);
  const [isCountDown, setCountDown] = useState(true);
  const [freeMint, setFreeMint] = useState(0);
  const [whiteListMint, setWhiteListMint] = useState(0);
  const [savewhiteListMint, setSaveWhiteListMint] = useState(0);
  const [totalMinted, setTotalMinted] = useState(0);

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

  const handleMintNumber = (value, isPlus) => {
    if (value < 1 || value > MAX_MINT) {
      return;
    }
    const publicMint = value - whiteListMint - freeMint;
    if (publicMint < 0) {
      setWhiteListMint(value - freeMint);
    }
    if (whiteListMint < savewhiteListMint && isPlus) {
      setWhiteListMint(whiteListMint + 1);
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

  const updateDimensions = () => {
    const deviceHeight = window.innerHeight;
    setMaxHeight(deviceHeight);
  };

  let timer: any = null;
  useEffect(function mount() {
    updateDimensions();
    window.addEventListener('resize', function () {
      timer = setTimeout(updateDimensions, 500);
    });

    return function unMount() {
      if (timer) {
        clearTimeout(timer);
      }
      window.removeEventListener('resize', updateDimensions);
    };
  });

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

  const handleEndModal = () => {
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

  const getBaeData = async () => {
    return await api.get(`/calcMekabae?walletAddress=${account}`); 
  }

  const checkFreeandWhiteMint = (mintedNumber, isFreeMint, availableToMint) => {
    if (mintedNumber === 0 && isFreeMint) {
      setFreeMint(1);
      setWhiteListMint(availableToMint - 1);
      setSaveWhiteListMint(availableToMint - 1);
      setTotalMint(availableToMint + 1);
      return;
    }
    if (mintedNumber > 0 || !isFreeMint) {
      setFreeMint(0);
    }
    const remainWhiteList = availableToMint - mintedNumber;
    if (remainWhiteList > 0) {
      setWhiteListMint(remainWhiteList);
      setSaveWhiteListMint(remainWhiteList);
      setTotalMint(remainWhiteList + 1);
    } else {
      setWhiteListMint(0);
    }
  }
  useEffect(() => {
    checkSoldOut();
  }, [])

  const checkSoldOut = async () => {
    if (library) {
      const signer = await library.getSigner();
      const contract = new Contract(CONTRACT_NUMBER, Mekabae.abi, signer);
      const totalMint = await contract.totalSupply();
      const mintedOfNumbr = totalMint.toNumber();
      if (mintedOfNumbr >= TOTAL_SUPPLY) {
        setShowEndModal(true);
      }
    } else {
      const provider = new Web3.providers.HttpProvider(
        INFURA_URL
      );
      const web3 = new Web3(provider);
      const dex = new web3.eth.Contract(
        (Mekabae.abi as any), CONTRACT_NUMBER,
      );
      let totalMint = await dex.methods.totalSupply().call();
      if (totalMint && totalMint >= TOTAL_SUPPLY) {
        setShowEndModal(true);
      }
    }
  }

  const handleMaxMint = async () => {
    try {
      setCaculate(true);
      setError('');
      const response = await getBaeData();
      let availableToMint = response?.data?.availableToMint;
      setData(response.data);
      if (typeof availableToMint === 'number' && response.status === 200) {
        const signer = await library.getSigner();
        const contract = new Contract(CONTRACT_NUMBER, Mekabae.abi, signer);
        const mintedOf = await contract.mintedOf(account);
        const s1MintIsActive = await contract.s1MintIsActive();
        let isFreeMint = response.data.isFreeMint;
        if (!s1MintIsActive && isFreeMint) {
          isFreeMint = false;
        }
        if (mintedOf?._isBigNumber) {
          let mintedOfNumbr = mintedOf.toNumber();
          setTotalMinted(mintedOfNumbr);
          checkFreeandWhiteMint(mintedOfNumbr, isFreeMint, availableToMint);
        }
      } else {
        setTotalMint(0);
      }
      setCaculate(false);
    } catch (error) {
      console.log("error: ", error);
      setCaculate(false);
      setError('Oops! Something went wrong.');
    }
  };

  const mintNFT = async () => {
    try {
      setError('');
      if (!data) {
        return;
      }

      let hexProof = data.hexProof;
      let availableToMint = 0;
      let isS1Holder = false;
      const signer = await library.getSigner();

      const contract = new Contract(CONTRACT_NUMBER, Mekabae.abi, signer);
      const minted = await contract.totalSupply();
      const mintedNum = minted.toNumber();

      setMinting(true);
      if (MAX_MINT - totalMinted > 0) {
        const response = await getBaeData();
        if (response?.data?.hexProof) {
          hexProof = response.data.hexProof;
          availableToMint = response.data.availableToMint;
          isS1Holder = response.data.isFreeMint;
        }
      }

      let response = null;
      let payable = getPayAbleAmount();
      if (availableToMint - totalMinted > 0) {
        response = await contract.whitelistMint(
          hexProof,
          availableToMint,
          isS1Holder,
          totalMint,
          { value: parseEther(payable.toString()) }
        );
      } else {
        response = await contract.publicMint(
          totalMint,
          { value: parseEther(payable.toString()) }
        );
      }
      setMinting(false);
      setMinted([]);
      if (response?.hash) {
        if(mintedNum + totalMint > TOTAL_SUPPLY){
          setShowEndModal(true);
        }
        let remainWhiteList = 0;
        if (availableToMint - totalMinted >= 0) {
          let value = availableToMint - freeMint - whiteListMint - totalMinted;
          remainWhiteList = value > 0 ? value : 0;
          setWhiteListMint(remainWhiteList);
          setSaveWhiteListMint(remainWhiteList);
          setTotalMint(remainWhiteList + 1);
        }
        if (freeMint > 0) {
          setFreeMint(0);
        }
        setTotalMinted(totalMinted + totalMint);
        setMinted([response.hash]);
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
      console.log("error: ", error);
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
      return (<a
        className="opensea"
        target="_blank"
        rel="noreferrer"
        href={`${OPENSEA}assets/${CONTRACT_NUMBER}/${idList[0]}`}
      >
        View on Opensea
      </a>)
    }
    return '';
  }

  const renderTransaction = () => {
    return minted.map((item, index) => {
      return (
        <div key={index} style={{ display: 'flex' }}>
          <a
            className="etherscan"
            target="_blank"
            rel="noreferrer"
            href={`${NETWORK}tx/${item}`}
          >
            <div className="txid">{index !== 0 && (", ")}txid</div>
            <More />
          </a>
          {renderOpensea(item)}
        </div>
      );
    });
  };

  useEffect(() => {
    const wallet = localStorage.getItem('wallet');
    if (wallet) {
      setWalletName(wallet);
    }
  }, []);

  const utcNow = new Date().toUTCString();
  const now = new Date(utcNow).getTime() / 1000;
  const startMint = new Date('Tue, 14 June 2022 16:00:00 EDT').getTime() / 1000;
  const remainingTime = startMint - now;


  const getPublicMint = () => {
    let publicMint = totalMint - freeMint - whiteListMint;
    return publicMint > 0 ? publicMint : 0;
  }
  const getPayAbleAmount = () => {
    let whiteListPrice = new Decimal(0.069);
    let publicPrice = new Decimal(0.08008);
    let publicFee = publicPrice.times(getPublicMint());
    let whiteListFee = whiteListPrice.times(whiteListMint);
    let result = publicFee.add(whiteListFee);
    return Number(result);
  }
  return (
    <MintStyle height={maxHeight || 1000}>
      <ChainModal
        isOpen={openModal}
        handleModal={handleModal}
        connectWallet={connectWallet}
      />
      {endModal && (
        <div className="sold-out">
          <div className={`credit-title dark_title`}>
            SOLD OUT
        </div>
        </div>
      )}
      <ChangeModal
        isOpen={openChangeModal}
        address={account}
        walletName={walletName}
        handleChangeModal={handleChangeModal}
        showChainModal={showChainModal}
      />
      {remainingTime >= 0 && isCountDown && (
        <>
          <CountDownModal
            handleCountDown={handleCountDown}
            remainingTime={remainingTime}
          />
        </>)}
      <div className="mint-title">MekaBae NFT Portal</div>
      <div className="mint-description">
        Public mint at 0.08008e. Discount price at 0.069e for wallet address in the whitelist.
      </div>
      <div className="mint-calculate">
        <div className="mint-row">
          <div className="mint-text">Number of BAES</div>
          <div className="mint-subrow">
            <button
              className="mint-plus-btn"
              onClick={() => handleMintNumber(totalMint - 1, false)}
            >
              <Decrease />
            </button>
            <div className="mint-total">{totalMint}</div>
            <button
              className="mint-add-btn"
              onClick={() => handleMintNumber(totalMint + 1, true)}
            >
              <Increase />
            </button>
          </div>
        </div>
        <div className="mint-detail">
          <div className="detail-row">
            <div className="detail-left">Free Mint</div>
            <div className="detail-right">0 * {(isCaculate && <span className="loading-text"></span>) || (
              <span>{freeMint}</span>
            )}</div>
          </div>
          <div className="detail-row">
            <div className="detail-left">Whitelist Mint</div>
            <div className="detail-right">0.069 * {(isCaculate && <span className="loading-text"></span>) || (
              <span>{whiteListMint}</span>
            )}</div>
          </div>
          <div className="detail-row">
            <div className="detail-left">Public Mint</div>
            <div className="detail-right">0.08008 * {getPublicMint()}</div>
          </div>
        </div>
        <div className="mint-row payable">
          <div className="mint-text">Payable amount</div>
          <div className="mint-subrow">
            <div className="mint-payable">{getPayAbleAmount()} ETH</div>
          </div>
        </div>
        {!endModal && (
          <div className="mint-footer">
            <div className="mint-btn-list">
              {(!account && (
                <button className="connect-btn" onClick={() => handleModal()}>
                  CONNECT WALLET
                </button>
              )) || (
                  <div className="connected-btn" onClick={handleChangeModal}>
                    {showAddressByDots(account)}
                  </div>
                )}
              {!endModal && (remainingTime <= 0 || !isCountDown) && (
                <button
                  className={`mint-btn ${minting ? "minting" : ''}`}
                  disabled={!account || minting}
                  onClick={() => mintNFT()}
                >
                  {minting && (
                    <i className="fa fa-spinner fa-spin"></i>
                  )}
              MINT
                </button>
              )}
            </div>
            {minted && minted.length > 0 && (
              <div className="transaction" >
                <div className="success">Your BAE has been Minted!</div>
                <div className="transactions">
                  {renderTransaction()}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <img src={`${CLOUDFRONT_IMG}/season2/button/connect-btn-hover.png`} style={{ display: 'none' }} alt="" />
      {/* {remainingTime > 0 && !account  && (
        <div className={'info-message'}>Connect your wallet to check if you are whitelisted.</div>
      )} */}
      <div className={'error-message'}>{data?.errorMessage || error || ''}</div>
    </MintStyle>
  );
};

export default StakeBae;
