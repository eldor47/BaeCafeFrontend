import React from 'react';
import type { NextPage } from 'next';

import FooterStyle from 'styles/Footer';
import { OPENSEACOLLECTION } from './helper';

interface HeaderProps {}

const Footer: NextPage<HeaderProps> = ({}) => {
  const handleClick = (social) => {
    if (social === 'twitter') {
      window.open('https://twitter.com/baebaecafe', '_blank').focus();
    }
    if (social === 'discord') {
      window.open('https://discord.gg/baecafe', '_blank').focus();
    }
    if (social === 'foundation') {
      window.open('https://foundation.app/@baecafe', '_blank').focus();
    }
    if (social === 'opensea') {
      window.open(OPENSEACOLLECTION, '_blank').focus();
    }
  };
  return (
    <FooterStyle>
      <div className="logo">
        <div className="logo-animation" />
      </div>
      <div className="social-list">
        <button
          className="twitter"
          onClick={() => handleClick('twitter')}
        ></button>
        <button
          className="discord"
          onClick={() => handleClick('discord')}
        ></button>
        <button
          className="opensea"
          onClick={() => handleClick('opensea')}
        ></button>
        <button
          className="foundation"
          onClick={() => handleClick('foundation')}
        ></button>
      </div>
      <img src="/image/footer/twitter.svg" style={{ display: 'none' }} alt="" />
      <img src="/image/footer/twitter2.svg" style={{ display: 'none' }} alt="" />
      <img src="/image/footer/discord.svg" style={{ display: 'none' }} alt="" />
      <img src="/image/footer/discord2.svg" style={{ display: 'none' }} alt="" />
      <img src="/image/footer/opensea.svg" style={{ display: 'none' }} alt="" />
      <img src="/image/footer/opensea2.svg" style={{ display: 'none' }} alt="" />
      <img src="/image/footer/foundation.svg" style={{ display: 'none' }} alt="" />
      <img src="/image/footer/foundation2.svg" style={{ display: 'none' }} alt="" />
    </FooterStyle>
  );
};

export default Footer;
