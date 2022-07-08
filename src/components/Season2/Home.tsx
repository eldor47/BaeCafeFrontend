import type { NextPage } from 'next';
import {debounce} from 'lodash';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback } from 'react';

import { OPENSEACOLLECTION_S2 } from '../../components/helper';
import {CLOUDFRONT_IMG} from '../helper';

import HomeStyle from 'styles/Season2/HomeElement';

const variants = {
  enter: (direction: number) => {
    return {
      x: 0,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: 0,
      opacity: 0
    };
  }
};

const Home: NextPage = () => {
  const [number, setNumber] = useState(0);
  const images = [
    `${CLOUDFRONT_IMG}/season2/home/ic-home-9.png`,
    `${CLOUDFRONT_IMG}/season2/home/ic-home-2.png`,
    `${CLOUDFRONT_IMG}/season2/home/ic-home-10.png`,
    `${CLOUDFRONT_IMG}/season2/home/ic-home-3.png`,
    `${CLOUDFRONT_IMG}/season2/home/ic-home-8.png`,
  ];
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position < 400){
      setNumber(0);
    } else if (position < 800) {
      setNumber(1);
    } else if (position < 1200) {
      setNumber(2);
    }  else if (position < 1600) {
      setNumber(3);
    } else {
      setNumber(4);
    }
  };
  useEffect(() => {
    let timer: any = null;
    handleScroll();
    window.addEventListener('scroll', debounce(handleScroll, 50))

    return function unMount() {
      if (timer) {
        clearTimeout(timer);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (social) => {
    if (social === 'twitter') {
      window.open('https://twitter.com/baebaecafe', '_blank').focus();
    }
    if (social === 'discord') {
      window.open('https://discord.gg/baecafe', '_blank').focus();
    }
    if (social === 'opensea') {
      window.open(OPENSEACOLLECTION_S2, '_blank').focus();
    }
    if (social === 'foundation') {
      window.open('https://foundation.app/@baecafe', '_blank').focus();
    }
  };

  const renderImage = useCallback(() => {
    // return (<img className="home-right-image-main img-btn" src={mainImage} alt="" ></img>)
    return (
      <AnimatePresence exitBeforeEnter initial={true}>
        <motion.img
          src={images[number]}
          variants={variants}
          initial="enter"
          animate="center"
          className="home-right-image-main"
          transition={{
            ease: "easeInOut",
            duration: 1,
            opacity: { delay: 2, duration: 0.4 }
          }}
        />
      </AnimatePresence>
    )
  }, [number])

  return (
    <HomeStyle>
      <div className="home-left-parent">
        <div className="home-left">
          <div className="home-left-title">Welcome rangers!</div>
          <div style={{ height: 24 }}></div>
          <div className="home-welcome-description-big">
            <div className="home-left-description">
              The cafe is under alien attack!! Hana and the gang have managed to
              collect some tech from the wreckage of a downed ship. They`ve
              fashioned meka suits to aid in their defense.
            </div>
            <div className="home-left-description">How do they look?</div>
          </div>

          <div className="home-welcome-description-small">
            <div className="home-left-description">
              The cafe is under alien attack!! Hana and the gang have managed to
              collect some tech from the wreckage of a downed ship. They`ve
              fashioned meka suits to aid in their defense.
            </div>
            <div className="home-left-description">How do they look?</div>
          </div>

          <div className="social">
            <div className="social-item">
              <button
                className="twitter"
                onClick={() => handleClick('twitter')}
              ></button>
            </div>
            <div className="social-item">
              <button
                className="discord"
                onClick={() => handleClick('discord')}
              ></button>
            </div>
            <div className="social-item">
              <button
                className="opensea"
                onClick={() => handleClick('opensea')}
              ></button>
            </div>
            <div className="social-item">
              <button
                className="foundation"
                onClick={() => handleClick('foundation')}
              ></button>
            </div>
            <img
              src="/image/wlc/twitter2-new.svg"
              style={{ display: 'none' }}
              alt=""
            />
            <img
              src="/image/wlc/discord2-new.svg"
              style={{ display: 'none' }}
              alt=""
            />
            <img
              src="/image/wlc/opensea2-new.svg"
              style={{ display: 'none' }}
              alt=""
            />
            <img
              src="/image/wlc/foundation2-new.svg"
              style={{ display: 'none' }}
              alt=""
            />
            <img
              src={`${CLOUDFRONT_IMG}/season2/collection/ic-gallery-thumbnail.jpeg`}
              style={{ display: 'none' }}
              alt=""
            />
          </div>
          <div className="home-left-line"></div>
          <div className="home-left-title">Features</div>
          <div className="home-right-image-parent-mobile">
            <img
              className="home-right-image-detail-mobile"
              src={`${CLOUDFRONT_IMG}/season2/home/ic-home-9.png`}
              alt=""
            ></img>
            <div className="home-right-image-sub-mobile">
              <div className="home-right-action">
                <img
                  className="home-right-action-mainFrame"
                  src="/image/home/ic-frame-action.png"
                  alt=""
                ></img>
                <div className="home-right-checkout-parent">
                  <div className="home-right-checkout-text">CHECK OUT</div>
                </div>
                <div
                  className="home-right-opensea-parent"
                  onClick={() => handleClick('opensea')}
                >
                  <div className="home-right-opensea-sub">
                    <div className="home-right-opensea-text">OPEN SEA</div>
                    <img
                      className="home-right-opensea-arrows"
                      src="/image/home/ic-next.png"
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: 6 }}></div>
          <div className="home-left-list-images">
            <img
              className="home-left-images"
              src={`${CLOUDFRONT_IMG}/season2/home/ic-features-1.jpg`}
              alt=""
            ></img>
            <img
              className="home-left-images"
              src={`${CLOUDFRONT_IMG}/season2/home/ic-features-2.jpg`}
              alt=""
            ></img>
            <img
              className="home-left-images"
              src={`${CLOUDFRONT_IMG}/season2/home/ic-features-3.jpg`}
              alt=""
            ></img>
            <img
              className="home-left-images"
              src={`${CLOUDFRONT_IMG}/season2/home/ic-features-4.jpg`}
              alt=""
            ></img>
                      <img
              className="home-left-images"
              src={`${CLOUDFRONT_IMG}/season2/home/ic-features-5.jpg`}
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div className="home-right-image-parent">
      <AnimatePresence initial={false}>
        <motion.img
          key={images[number]}
          src={images[number]}
          className="home-right-image-main"
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            opacity: { delay: 0.3, duration: 0.5 }
          }}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
        />
      </AnimatePresence>
        <div className="home-right-action">
          <img
            className="home-right-action-mainFrame"
            src="/image/home/ic-frame-action.png"
            alt=""
          ></img>
          <div className="home-right-checkout-parent">
            <div className="home-right-checkout-text">CHECK OUT</div>
          </div>
          <div
            className="home-right-opensea-parent"
            onClick={() => handleClick('opensea')}
          >
            <div className="home-right-opensea-sub">
              <div className="home-right-opensea-text">OPEN SEA</div>
              <img
                className="home-right-opensea-arrows"
                src="/image/home/ic-next.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
      <img src={`${CLOUDFRONT_IMG}/season2/home/ic-home-2.png`} style={{ display: 'none' }} alt="" />
      <img src={`${CLOUDFRONT_IMG}/season2/home/ic-home-10.png`} style={{ display: 'none' }} alt="" />
      <img src={`${CLOUDFRONT_IMG}/season2/home/ic-home-3.png`} style={{ display: 'none' }} alt="" />
      <img src={`${CLOUDFRONT_IMG}/season2/home/ic-home-8.png`} style={{ display: 'none' }} alt="" />
    </HomeStyle>
  );
};

export default Home;
