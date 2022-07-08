import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import MenuItem from 'components/Season2/MenuItem';

import MenuStyle from 'styles/Season2/MenuElement';
import { CLOUDFRONT_IMG, OPENSEACOLLECTION_S2 } from 'components/helper';
import Link from 'next/link';

interface MenuProps {
  onHandleMenu: (value: number) => void;
  onHandleShowDropMenu: (value: boolean) => void;
  menuIndex: number;
}

const urlCode = {
  0: '/',
  1: '/reveal',
  2: '/collection',
  3: '/vision',
  4: '/team',
  6: '/mint',
}

const Menu: React.FC<MenuProps> = ({ onHandleMenu, onHandleShowDropMenu, menuIndex }) => {
  const [heightMobileMenu, setHeightMenu] = useState<number>(0);
  const [isShowMenuMobile, setShowMenuMobileAction] = useState<boolean>(false);
  const router = useRouter();
  const handleTapMenu = (value: number) => {
    if(value === 1){
      window.open(OPENSEACOLLECTION_S2, '_blank').focus();
      return;
    }
    setShowMenuMobileAction(false);
    onHandleShowDropMenu(false);
    if(menuIndex === 0 && value <= 6){
      onHandleMenu(value);
      window.history.pushState(null, null, urlCode[value]);
    } else if (value <= 6) {
      onHandleMenu(value);
      router.push(urlCode[value], null, { shallow: true })
    } else {
      onHandleMenu(value);
    }
  };
  const handleMenuHamburger = () => {
    onHandleShowDropMenu(!isShowMenuMobile);
    setShowMenuMobileAction(!isShowMenuMobile);
  };

  const menuButton = isShowMenuMobile ? (
    <div className="menu-close-image-parent">
      <img
        className="menu-close-image"
        src="/image/ic-close-white2.png"
        alt=""
      ></img>
    </div>
  ) : (
    <div className='menu-button'>
      <span className="line line1"></span>
      <span className="line line2"></span>
      <span className="line line3"></span>
    </div>
  );

  const dropMenu = isShowMenuMobile ? (
    <div className="season2-menu-small" style={{height: heightMobileMenu}}>
      <div className="season2-menu-smallRow">
        <div
          className="season2-menu-smallText"
          onClick={() => handleTapMenu(0)}
        >
          Home
        </div>
      </div>
      {/* <div className="season2-menu-smallRow">
        <div
          className="season2-menu-smallText"
          onClick={() => handleTapMenu(1)}
        >
          gallery
        </div>
      </div> */}
      <div className="season2-menu-smallRow">
        <div
          className="season2-menu-smallText"
          onClick={() => handleTapMenu(1)}
        >
          REVEAL
        </div>
      </div>
      <div className="season2-menu-smallRow">
        <div
          className="season2-menu-smallText"
          onClick={() => handleTapMenu(2)}
        >
          VAULT
        </div>
      </div>
      <div className="season2-menu-smallRow">
        <div
          className="season2-menu-smallText"
          onClick={() => handleTapMenu(3)}
        >
          Vision
        </div>
      </div>
      <div className="season2-menu-smallRow">
        <div
          className="season2-menu-smallText"
          onClick={() => handleTapMenu(4)}
        >
          TEAM
        </div>
      </div>
      <div className="season2-menu-smallRow-action">
        <div className="season2-menu-primary" onClick={() => handleTapMenu(7)}>
          <img
            className="season2-menu-primaryImage"
            src={`${CLOUDFRONT_IMG}/season2/button/connect-btn.png`}
            alt="bae"
          ></img>
          <div className="season2-menu-primaryText-parent">
            <div className="season2-menu-primaryText" onClick={() => handleTapMenu(6)} >MINT BAE</div>
          </div>
        </div>
      </div>
      <div style={{ height: 28 }}></div>
      <div>
        <div
          className="season2-menu-switchParent"
          onClick={() => handleTapMenu(8)}
        >
          <img
            className="season2-menu-switchImage"
            src="/image/season2/ic-switch.png"
            alt="bae"
          ></img>
          <div className="season2-menu-switchText">SEASON 2</div>
        </div>
      </div>
    </div>
  ) : null;

  const updateDimensions = () => {
    const deviceHeight = window.innerHeight;
    const deviceWidth = window.innerWidth;
    setHeightMenu(deviceHeight - 80);
    if(deviceWidth > 1110 && isShowMenuMobile){
      onHandleShowDropMenu(!isShowMenuMobile);
    }
  };

  let timer: any = null;
  useEffect(function mount() {
    updateDimensions();
    window.addEventListener('resize', function () {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timer = setTimeout(updateDimensions, 200);
    });

    return function unMount() {
      if (timer) {
        clearTimeout(timer);
      }
      window.removeEventListener('resize', updateDimensions);
    };
  });

  return (
    <MenuStyle>
      <div>
        <div className="season2-menu-parent">
          <Link href="/">
            <a>
              <img
                className="season2-logo"
                src={`${CLOUDFRONT_IMG}/season2/logo/season2-logo.png`}
                width="204"
                height="83"
                alt="bae"
              ></img>
            </a>
          </Link>
          <div className="menuHamburger" onClick={() => handleMenuHamburger()}>
            <label htmlFor="nav-check" className="nav-label">
              {menuButton}
            </label>
          </div>
          <div className="season2-menu-big">
            <MenuItem
              index={0}
              text="Home"
              isActive={menuIndex === 0 ? true : false}
              handleTapMenu={handleTapMenu}
            ></MenuItem>
            <MenuItem
              index={1}
              text="REVEAL"
              isActive={menuIndex === 1 ? true : false}
              handleTapMenu={handleTapMenu}
            ></MenuItem>
            <MenuItem
              index={2}
              text="VAULT"
              isActive={menuIndex === 2 ? true : false}
              handleTapMenu={handleTapMenu}
            ></MenuItem>
            <MenuItem
              index={3}
              text="Vision"
              isActive={menuIndex === 3 ? true : false}
              handleTapMenu={handleTapMenu}
            ></MenuItem>
            <MenuItem
              index={4}
              text="TEAM"
              isActive={menuIndex === 4 ? true : false}
              handleTapMenu={handleTapMenu}
            ></MenuItem>
            <div
              className="season2-menu-primary"
              onClick={() => handleTapMenu(6)}
            >
              <div className="season2-menu-primaryText-parent">
                <div className="season2-menu-primaryText">MINT BAE</div>
              </div>
            </div>
            <div
              className="season2-menu-switchParent"
              onClick={() => handleTapMenu(8)}
            >
              <img
                className="season2-menu-switchImage"
                src="/image/season2/ic-switch.png"
                alt="bae"
              ></img>
              <div className="season2-menu-switchText">SEASON 2</div>
            </div>
          </div>
        </div>
        {dropMenu}
      </div>
      <img src='/image/ic-close-white2.png' style={{ display: 'none' }} alt="" />
    </MenuStyle>
  );
};

export default Menu;
