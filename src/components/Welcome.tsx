import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import WelcomeStyle from 'styles/WelcomeElement';
import { isSafari } from 'react-device-detect';
import { OPENSEACOLLECTION } from './helper';

interface WLCProps {
  wlcRef: any;
}

const Welcome: NextPage<WLCProps> = ({ wlcRef }) => {
  const [safariBrowser, setSafari] = useState<boolean>(false)

  useEffect(() => {
    setSafari(isSafari)
  }, [isSafari])

  const handleClick = (social) => {
    if (social === 'twitter') {
      window.open('https://twitter.com/baebaecafe', '_blank').focus();
    }
    if (social === 'discord') {
      window.open('https://discord.gg/baecafe', '_blank').focus();
    }
    if (social === 'opensea') {
      window.open(OPENSEACOLLECTION, '_blank').focus();
    }
    if (social === 'foundation') {
      window.open('https://foundation.app/@baecafe', '_blank').focus();
    }
  };
  const renderSlide = () =>{
    if(safariBrowser){
      return (
        <div className="image-slide safari"/>
      )
    } else{
      return (<div className="image-slide"/>)
    }
  }
  return (
    <WelcomeStyle ref={wlcRef}>
      <div className="wlc">
        <div className="wlc-content">
          <div className="hibaes">HI BAES</div>
          <div className="introduce">
            <div className="introduce-txt">
              My name&apos;s Hana. What&apos;s yours?
            </div>
            <div className="introduce-txt">Welcome to our beach cafe.</div>
            <div className="introduce-txt">Take a seat. Enjoy a boba tea.</div>
            <div className="introduce-txt">
              Lean back and enjoy the bae life.
            </div>
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
              <button className="opensea" onClick={() => handleClick('opensea')}></button>
            </div>
            <div className="social-item">
              <button
                className="foundation"
                onClick={() => handleClick('foundation')}
              ></button>
            </div>
            <img src='/image/wlc/twitter2.svg' style={{ display: 'none' }} alt="" />
            <img src='/image/wlc/discord2.svg' style={{ display: 'none' }} alt="" />
            <img src='/image/wlc/opensea2.svg' style={{ display: 'none' }} alt="" />
            <img src='/image/wlc/foundation2.svg' style={{ display: 'none' }} alt="" />
          </div>
        </div>
        <div className="image-box">
        {renderSlide()}
        </div>
      </div>
    </WelcomeStyle>
  );
};

export default Welcome;
