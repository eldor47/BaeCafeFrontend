import Head from 'next/head';
import type { NextPage } from 'next';
import {useRouter} from 'next/router';
import { useEffect, useRef, useState } from 'react';

import Nav from 'components/Nav';
import Footer from 'components/Footer';
import StakeComponent from 'components/StakeBae';

const StakeBae: NextPage = () => {
  const router = useRouter();
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const handleScroll = (value) => {
    if (value === 'home') {
      router.push('/s1/home', '/s1/home', {shallow: true})
    }
    if (value === 'bae-story') {
      router.push('/s1/bae-story', '/s1/bae-story', {shallow: true})

    }
    if (value === 'boobamap') {
      router.push('/s1/boobamap', '/s1/boobamap', {shallow: true})

    }
    if (value === 'bae-friends') {
      router.push('/s1/bae-friends', '/s1/bae-friends', {shallow: true})

    }
    if (value === 'art-bae') {
      router.push('/s1/art-bae', '/s1/art-bae', {shallow: true})
    }
  };

  const updateDimensions = () => {
    const deviceHeight = window.innerHeight;
    setMaxHeight(deviceHeight);
    setWidth(window.innerWidth);
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

  return (
    <>
      <Head>
        <title>BaeCafe | Booba is life, Booba is culture</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <div style={{display: 'flex', flexDirection: "column", minHeight: maxHeight}}>
      <Nav handleScroll={handleScroll} width={width} maxHeight={maxHeight} onChangeSeason={null} />
      <StakeComponent />
      </div>
    </>
  );
};

export default StakeBae;
