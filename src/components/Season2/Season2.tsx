import Head from 'next/head';
import type { NextPage } from 'next';
import { useCallback, useEffect, useRef, useState } from 'react';
import Season2Style from 'styles/Season2/Season2Element';
import Menu from 'components/Season2/Menu';
import MainContent from 'components/Season2/MainContent';

import Home from 'components/Season2/Home';
import Gallery from 'components/Season2/Gallery';
import Collection from 'components/Season2/Collection';
import Vision from 'components/Season2/Vision';
import Team from 'components/Season2/Team';
import MintBae from 'components/Season2/MintBae';
import ComingSoon from 'components/Season2/ComingSoon';
interface Season2Props {
  initIndex: number;
  onChangeSeason: (value: number) => void;
}

const Season2: NextPage<Season2Props> = ({ onChangeSeason, initIndex }) => {
  const [isShowMenuMobile, setShowMenuMobileAction] = useState<boolean>(false);
  const [menuIndex, setMenuIndex] = useState<number>(initIndex || 0);
  const [updateUrl, setUpdateUrl] = useState('');

  useEffect(() => {
    if (updateUrl) {
      window.location.assign(updateUrl);
    }
  }, [updateUrl]);


  const handleBrowser = () => {
    setUpdateUrl(window?.location?.href);
  };

  useEffect(function mount() {
    let browser = null;
    window.addEventListener('popstate', function () {
      browser = setTimeout(handleBrowser, 500);
    });

    return function unMount() {
      if (browser) {
        clearTimeout(browser);
      }
      window.removeEventListener('popstate', handleBrowser);
    };
  });


  const onHandleMenu = (value: number) => {
    switch (value) {
      case 8:
        onChangeSeason(0);
        break;
      default:
        break;
    }
    if (value <= 6) {
      setMenuIndex(value);
    }
  };
  const onHandleShowMenu = (value: boolean) => {
    setShowMenuMobileAction(value);
  };

  const getContent = useCallback(() => {
    if (menuIndex === 1) {
      return <ComingSoon />
    }
    if (menuIndex === 2) {
      return <Collection />
    }
    if (menuIndex === 3) {
      return <Vision />
    }
    if (menuIndex === 4) {
      return <Team />
    }
    if (menuIndex === 6) {
      return <MintBae />
    }
    return <Home />
  }, [menuIndex]);

  return (
    <Season2Style>
      <Head>
        <link rel="shortcut icon" href="/mekabae.ico" />
        <title>Mekabae | Booba is life, Booba is culture</title>
      </Head>
      <meta name="theme-color" content="#240259" />
      <div style={{ background: '#240259' /*, minHeight: height*/}}>
        <div className="season2-parent-menu" style={{ marginBottom: 40 }}>
          <Menu
            onHandleMenu={onHandleMenu}
            onHandleShowDropMenu={onHandleShowMenu}
            menuIndex={menuIndex}
          ></Menu>
        </div>
        {isShowMenuMobile ? null : getContent()}
      </div>
    </Season2Style>
  );
};

export default Season2;
