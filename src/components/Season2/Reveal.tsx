import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import api from 'components/api/axios';
import { useCookies } from 'react-cookie';
import { Contract } from '@ethersproject/contracts';
import { useState, useEffect, useCallback, useRef } from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';

import ArrowLeft from 'icon/arrowLeft';
import ArrowRight from 'icon/arrowRight';
import Info from 'icon/info';
import SelectedIcon from 'icon/selected';
import Loading from './LoadingOverlay';
import Mekabae from './contracts/Mekabae.json';
import CountDownModal from 'components/CountDown';
import { CONTRACT_NUMBER, COOKIE } from 'components/helper';
import GalleryStyle from 'styles/Season2/RevealElement';
import RevealModal from 'components/Season2/RevealWalletModal';
import BlurredUpImage from 'components/Season2/hooks/image.hook';

const Gallery: NextPage = () => {
  const listIdRef = useRef<null | HTMLDivElement>(null);
  const [addMessage, setAddMessage] = useState('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorTxt, setError] = useState<string>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [tweetUrl, setTweetUrl] = useState<string>('');
  const [mekabaeList, setMekabaeList] = useState(null);
  const [option, setOption] = useState<number>(0);
  const [mekabaeId, setMekabaeId] = useState(null);
  const [listImage, setListImage] = useState({});
  const { active, account, activate, library, chainId } = useWeb3React();
  const [currentModal, setCurrentModal] = useState<string>('chain');
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isCountDown, setCountDown] = useState(true);

  useEffect(() => {
    if (account) {
      isOwnMekabae();
    }
  }, [account]);

  useEffect(() => {
    if (mekabaeList?.length > 0) {
      checkUnsetMekabae();
    }
  }, [mekabaeList]);

  const handleCountDown = () => {
    setCountDown(false);
  };

  const checkUnsetMekabae = () => {
    let isContain = false;
    for (let index = 0; index < mekabaeList.length; index++) {
      // let tokenId = mekabaeList[index].token_id;
      let currentTokenId = mekabaeList[mekabaeId]?.token_id;
      if (
        (typeof mekabaeId !== 'number' || currentTokenId) &&
        !mekabaeList[index].data?.isSet
      ) {
        isContain = true;
        setMekabaeId(index);
        handleScrollList(index * 284);
        break;
      }
    }
    if (!isContain) {
      setMekabaeId(null);
    }
  };

  const handleNextPrev = (isUp) => {
    let newId = isUp ? mekabaeId + 1 : mekabaeId - 1;
    if (newId < 0 || newId > mekabaeList.length - 1) {
      return;
    }
    setAddMessage('');
    setMekabaeId(newId);
    handleScrollList(newId * 284);
  };

  const handleScrollList = (offSet: number) => {
    if (listIdRef && listIdRef.current) {
      listIdRef.current.scroll({
        top: 0,
        left: offSet,
        behavior: 'smooth',
      });
    }
  };

  const isOwnMekabae = useCallback(async () => {
    try {
      setError('');
      setMekabaeId(null);
      setMekabaeList(null);
      const signer = await library.getSigner();
      const contract = new Contract(CONTRACT_NUMBER, Mekabae.abi, signer);
      const balance = await contract.balanceOf(account);
      const balanceNumber = balance.toNumber();

      if (!balanceNumber || balanceNumber < 1) {
        setError("Sorry, you don't own Mekabae");
      } else {
        const walletAddress = account.toLowerCase();
        const cookieName = `${COOKIE}-${walletAddress}`;
        if (cookies[cookieName]) {
          return;
        }
        setLoading(true);
        const result = await api.post(`/handleWallet`, {
          walletAddress: walletAddress,
        });
        if (result?.data?.once) {
          localStorage.setItem('mekabae-wallet', JSON.stringify(result.data));
          setCurrentModal('signature');
          setOpenModal(true);
        }
        setLoading(false);
      }
    } catch (error) {
      setError('Oops! Something went wrong.');
    }
  }, [account, library]);

  const getMekabaeData = async (tweetId: string) => {
    return await api.get(
      `/getMekabaeList?wallet=${account}&&tweetId=${tweetId}`
    );
  };

  const connectWallet = async (connector: any) => {
    setError('');
    if ((connector as any)?.walletConnectProvider) {
      (connector as any).walletConnectProvider = undefined;
    }
    setOpenModal(false);
    const response = await activate(connector, undefined)
      .then((data) => {
        return true;
      })
      .catch((error) => {
        if (error instanceof UnsupportedChainIdError) {
          setError(
            'The chain is not supported. Please switch to Ethereum Mainnet'
          );
        } else {
          setError('Oops! Something went wrong.');
        }
      });
  };
  const handleErrorImg = (e) => {
    e.target.src =
      'https://d28u60wydcv7iq.cloudfront.net/baecafe/v2/shojo/img/9918.png';
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const selectMekabaeId = (item, index) => {
    setAddMessage('');
    setMekabaeId(index);
  };

  const handleOption = (item, index) => {
    setOption(index);
  };

  const generateOptions = (currentMekabae) => {
    return currentMekabae?.data?.map((item, index) => {
      return (
        <div
          key={item.id}
          className="option-item"
          onClick={() => handleOption(item, index)}
        >
          {(index === option && (
            <>
              <div className="select-item">
                <div className="circle">
                  <SelectedIcon />
                </div>
              </div>
              <BlurredUpImage
                image={item.cloudFrontUrl}
                addStyle="selected-image"
              />
            </>
          )) || <BlurredUpImage image={item.cloudFrontUrl} addStyle="" />}
          <div className="description">OPTION {index + 1}</div>
        </div>
      );
    });
  };

  const generateMekabaePath = () => {
    let currentMekabae = mekabaeList[mekabaeId || 0];
    if (currentMekabae?.data?.isSet) {
      return <div />;
    }
    return (
      <>
        <div className="mekabae-line" />
        <div className="option">
          <div className="option-title">
            Pick one PFP for your Mekabae #{currentMekabae.token_id}
          </div>
          <div className="option-list">{generateOptions(currentMekabae)}</div>
        </div>
      </>
    );
  };

  const generateMekabaeList = () => {
    if (!mekabaeList || mekabaeList.length < 0) {
      return;
    }
    let currentTokenId = mekabaeList?.[mekabaeId]?.token_id
    return mekabaeList.map((item, index) => {
      if (item.data?.isSet) {
        return (
          <div key={item.token_id} className={'mekabae-item disable'}>
            <img
              src={item.data.cloudFrontUrl}
              alt="mekabae"
              width="260"
              height="260"
            />
            <div className="item-content">MAKABAE #{item.token_id}</div>
          </div>
        );
      }
      if (listImage[item.token_id]) {
        return (
          <div key={item.token_id} className={'mekabae-item disable'}>
            <img
              src={listImage[item.token_id]}
              alt="mekabae"
              width="260"
              height="260"
            />
            <div className="item-content">MAKABAE #{item.token_id}</div>
          </div>
        );
      }
      const typeCard =
        item.data && item.data[0] && item.data[0]?.type
          ? item.data[0]?.type
          : 'shojo';
      return (
        <div
          key={item.token_id}
          className={`mekabae-item${
            currentTokenId === item.token_id ? ' active' : ''
          }`}
          onClick={() => selectMekabaeId(item, index)}
        >
          <img src={`/image/gallery/${typeCard}.jpg`} alt="mekabae" />
          <div className="item-content">MAKABAE #{item.token_id}</div>
        </div>
      );
    });
  };

  const showAddressByDots = useCallback(
    (address: string | null | undefined) => {
      if (!address || address.length < 10) {
        return address;
      }
      return (
        address.slice(0, 6) +
        '...' +
        address.slice(address.length - 4, address.length)
      );
    },
    [account]
  );

  const getTweetConntent = useCallback(() => {
    return `https://twitter.com/intent/tweet?text=I%27m+choosing+my+%23mekabae+on+👇+baecafe.xyz%2Freveal`;
  }, [account]);

  const handleInputValue = (e) => {
    if (errorTxt && errorTxt !== "Sorry, you don't own Mekabae") {
      setError('');
    }
    setTweetUrl(e.target.value);
  };

  const checkTweetUrl = async () => {
    if (!tweetUrl.includes('twitter.com') || !tweetUrl.includes('/status/')) {
      setError('Invalid Twitter url');
      return;
    }
    let tweetPath = tweetUrl.split('/');
    let tweetId = tweetPath[tweetPath.length - 1];
    if (tweetId.includes('?')) {
      tweetId = tweetId.split('?')[0];
    }
    setLoading(true);
    try {
      const result = await getMekabaeData(tweetId);
      if (result && result.status === 200 && result.data) {
        if (result.data.errorMessage) {
          setError(result.data.errorMessage);
        } else {
          setMekabaeList(result.data);
        }
      }
      setLoading(false);
    } catch (error) {
      setError('Oops! Something went wrong.');
      setLoading(false);
    }
  };
  const submitMekabaeId = async () => {
    const tokenId = mekabaeList[mekabaeId || 0].token_id;
    try {
      setAddMessage('');
      setLoading(true);
      const walletAddress = account?.toLowerCase();
      const cookieName = `${COOKIE}-${walletAddress}`;
      if (!cookies[cookieName]) {
        setError('Oops! Something went wrong.');
        return;
      }
      const result = await api.post(
        `/addMekabaeId`,
        {
          wallet: walletAddress,
          tokenId: Number(tokenId),
          optionId: option,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies[cookieName]}`,
          },
        }
      );
      if (result.data?.message === 'Success') {
        setMekabaeId(null);
        setOption(0);
        setAddMessage('Success');
        let currentMekabae = mekabaeList[mekabaeId];
        let currentData = currentMekabae.data[option];
        let tempList = { ...listImage };
        tempList[tokenId] = currentData.cloudFrontUrl;
        setListImage(tempList);
      } else {
        setAddMessage(
          result.data?.errorMessage || 'Oops! Something went wrong.'
        );
        if (result.data.errorMessage === 'Invalid token') {
          removeCookie(cookieName, { path: '/' });
        }
      }
      setLoading(false);
    } catch (error) {
      setAddMessage('Oops! Something went wrong.');
      setLoading(false);
    }
  };

  const handleCurrentModal = (value) => {
    setCurrentModal(value);
  };

  const utcNow = new Date().toUTCString();
  const now = new Date(utcNow).getTime() / 1000;
  const startReveal =
    new Date('Wed, 22 June 2022 16:00:00 EDT').getTime() / 1000;
  const remainingTime = startReveal - now;

  const endChoose =  new Date('Tue, 23 June 2022 16:00:00 EDT').getTime() / 1000;
  const endReveal=  new Date('Fri, 24 June 2022 16:00:00 EDT').getTime() / 1000;
  const remainReveal = endReveal - now;
  

  return (
    <GalleryStyle>
      <RevealModal
        isOpen={openModal}
        currentModal={currentModal}
        handleModal={handleModal}
        connectWallet={connectWallet}
        address={account}
        handleCurrentModal={handleCurrentModal}
      />
      {remainingTime >= 0 && isCountDown && (
        <>
          <CountDownModal
            handleCountDown={handleCountDown}
            remainingTime={remainingTime}
            text="READY TO CHOOSE MEKABAE IN"
          />
        </>
      )}
      {now-endChoose >= 0 && isCountDown && (
        <>
          <CountDownModal
            handleCountDown={handleCountDown}
            remainingTime={remainReveal}
            text="READY TO REVEAL IN"
          />
        </>
      )}
      <Loading isLoading={isLoading} />
      <div className="top">
        {now-endChoose < 0 && (
        <>
        <div className="connect">
          {(!account && (
            <>
              <button
                className="connect-btn"
                onClick={() => handleModal()}
                disabled={remainingTime > 0}
              >
                <div className="number">
                  <p>1</p>
                </div>{' '}
                CONNECT WALLET
              </button>
              <div className="connnect-info">
                Connect your wallet to select pfp for your Mekabae.
              </div>
            </>
          )) || (
            <>
              <div className="connected-btn">{showAddressByDots(account)}</div>
              <div className="error">{errorTxt}</div>
            </>
          )}
        </div>
        {(!mekabaeList || mekabaeList.length < 1) && (
          <>
            <div className="tweet-input">
              <input
                className="input"
                onChange={handleInputValue}
                placeholder="Tweet URL"
              />
              <button
                className="connect-btn"
                disabled={
                  !account ||
                  !tweetUrl ||
                  errorTxt.length !== 0 ||
                  remainingTime > 0
                }
                onClick={() => checkTweetUrl()}
              >
                <div className="number">
                  <p>2</p>
                </div>{' '}
                Fire
              </button>
            </div>
            <div className="tweet-info">
              <Info />
              <div className="info-content">
                To choose the final form of your Mekabae: Tweet I&apos;m
                choosing my #mekabae on baecafe.xyz/reveal{' '}
                <a href={getTweetConntent()} target="_blank" rel="noreferrer">
                  (or just click here!)
                </a>
                . Copy-paste that{' '}
                <a
                  href="https://help.twitter.com/en/using-twitter/tweet-and-moment-url"
                  target="_blank"
                  rel="noreferrer"
                >
                  tweet URL
                </a>{' '}
                into the above input box and fire away!
              </div>
            </div>
          </>
        )}
        </>)}
        {(mekabaeList?.length > 0 && (
          <div className="mekabae">
            <div className="mekabae-title">Select a token ID.</div>
            <div className="mekabaes">
              <div className="icon" onClick={() => handleNextPrev(false)}>
                <ArrowLeft />
              </div>
              <div className="mekabae-list" ref={listIdRef}>
                {generateMekabaeList()}
              </div>
              <div className="icon" onClick={() => handleNextPrev(true)}>
                <ArrowRight />
              </div>
            </div>
          </div>
        )) || (
          <motion.div
            className="comingson"
            transition={{
              ease: 'easeInOut',
              duration: 0.2,
              opacity: { delay: 0.2, duration: 0.3 },
            }}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
          >
            <div className="comingsoon-img"></div>
          </motion.div>
        )}
        {typeof mekabaeId === 'number' &&
          mekabaeList?.length > 0 &&
          !mekabaeList[mekabaeId || 0]?.data?.isSet &&
          !listImage[mekabaeList[mekabaeId]?.token_id] &&
          generateMekabaePath()}
      </div>
      {((typeof option === 'number' &&
        typeof mekabaeId === 'number' &&
        !mekabaeList?.[mekabaeId]?.data?.isSet &&
        !listImage[mekabaeList[mekabaeId]?.token_id]) ||
        (addMessage && addMessage !== '')) && (
        <footer className="footer">
          <div className="message">
            {(addMessage === 'Success' && (
              <div className="success-message">
                Congratulations: your chosen mekabaes will appear in your wallet
                within 48 hrs!
              </div>
            )) || <div className="error-message">{addMessage}</div>}
          </div>
          {typeof option === 'number' &&
            typeof mekabaeId === 'number' &&
            !mekabaeList?.[mekabaeId]?.data?.isSet &&
            !listImage[mekabaeList[mekabaeId]?.token_id] && (
              <button
                className="connect-btn submit-btn"
                onClick={() => submitMekabaeId()}
              >
                SUBMIT
              </button>
            )}
        </footer>
      )}
    </GalleryStyle>
  );
};

export default Gallery;
