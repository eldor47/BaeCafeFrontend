/* eslint-disable @next/next/no-html-link-for-pages */
import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import { isSafari } from 'react-device-detect';
import React, {useEffect, useRef, useState} from 'react';

import NavStyle from 'styles/NavElement';
import Toggle from 'icon/toggle';

interface NavProps {
  width: number;
  maxHeight: number;
  handleScroll: (value: string) => void;
  onChangeSeason: (value: number) => void;
}

const Nav: NextPage<NavProps> = ({handleScroll, width, maxHeight, onChangeSeason}) => {
  const checkBoxRef = useRef<any>();
  const router = useRouter();
  const [safariBrowser, setSafari] = useState<boolean>(false)

  useEffect(() => {
    setSafari(isSafari)
  }, [isSafari])


  const mintBae = ()=>{
    if (width <= 768) {
      if (document.body.classList.value.includes('fix-height')) {
        document.body.classList.remove('fix-height');
      }
      const navToggle = document.getElementsByClassName('dropdownMenu');
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i)?.classList.remove('open');
      }
      if (checkBoxRef?.current) {
        checkBoxRef.current.checked = false;
      }
    }
    router.push('/mint-bae', 'mint-bae', {shallow: true})
  }
  const handleSafariLock = () =>{
    const navTop =  document.getElementsByClassName('left');
    for (let i = 0; i < navTop.length; i++) {
      navTop.item(i)?.classList.toggle('lock-top');
    }
  }

  const handleSafariEnable = () =>{
    const navTop =  document.getElementsByClassName('left');
    for (let i = 0; i < navTop.length; i++) {
      navTop.item(i)?.classList.remove('lock-top');
    }
  }
  const handleMenuHamburger = () => {
    if (!document.body.classList.value.includes('fix-height')) {
      document.body.classList.add('fix-height');
      if(safariBrowser){
        handleSafariLock();
      }
    } else {
      document.body.classList.remove('fix-height');
      if(safariBrowser){
        handleSafariEnable();
      }
    }
    const navToggle = document.getElementsByClassName('dropdownMenu');
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i)?.classList.toggle('open');
    }
  };
  useEffect(() => {
      if (document.body.classList.value.includes('fix-height')) {
        document.body.classList.remove('fix-height');
      }
  }, []);

  const handleChangeSeason = () =>{
    onChangeSeason(1);
    router.push("/");
  }
  const onScroll = (value) => {
    if (width <= 768) {
      if (document.body.classList.value.includes('fix-height')) {
        document.body.classList.remove('fix-height');
      }
      const navToggle = document.getElementsByClassName('dropdownMenu');
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i)?.classList.remove('open');
      }
      if (checkBoxRef?.current) {
        checkBoxRef.current.checked = false;
      }
    }
    handleScroll(value);
  };

  return (
    <NavStyle>
      <div className="left">
        <a className="logo" href="/" target="_self">
          <div className="logo-animation" />
        </a>
        <input
          ref={checkBoxRef}
          type="checkbox"
          id="nav-check"
          // onChange={(e) => handleScroll(e)}
        />
        <div className="menuHamburger" onClick={() => handleMenuHamburger()}>
          <label htmlFor="nav-check" className="nav-label">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </label>
        </div>
      </div>
      <div className="nav-items big-screen">
        <button className="nav-item" onClick={() => onScroll('home')}>
          HOME
        </button>
        <button className="nav-item" onClick={() => onScroll('bae-story')}>
          BAE-STORY
        </button>
        <button className="nav-item" onClick={() => onScroll('boobamap')}>
          BOOBAMAP
        </button>
        <button className="nav-item" onClick={() => onScroll('bae-friends')}>
          BAE FRIENDS
        </button>
        <button className="nav-item" onClick={() => onScroll('art-bae')}>
          ART BAE
        </button>
        <button className="nav-item mint-item">SOLD OUT</button>
        {/* <button
          className="nav-item toggle"
          onClick={() => handleChangeSeason()}
        >
          <div className='season-selection'><Toggle /></div>
          Season 1
        </button> */}
      </div>
      <div
        className="nav-items dropdownMenu"
        style={{ height: width > 768 ? 'max-content' : maxHeight }}
      >
        <button className="nav-item" onClick={() => onScroll('home')}>
          HOME
        </button>
        <button className="nav-item" onClick={() => onScroll('bae-story')}>
          BAE-STORY
        </button>
        <button className="nav-item" onClick={() => onScroll('boobamap')}>
          BOOBAMAP
        </button>
        <button className="nav-item" onClick={() => onScroll('bae-friends')}>
          BAE FRIENDS
        </button>
        <button className="nav-item" onClick={() => onScroll('art-bae')}>
          ART BAE
        </button>
        <button className="nav-item mint">SOLD OUT</button>
        {/* <button
          className="nav-item toggle"
          onClick={() => handleChangeSeason()}
        >
          <div className='season-selection'><Toggle /></div>
          <div style={{paddingTop: '12px'}}>Season 1</div>
        </button> */}
      </div>
    </NavStyle>
  );
};

export default Nav;
