import Head from 'next/head';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import Nav from 'components/Nav';
import XXC from 'components/XXC';
import Story from 'components/Story';
import ArtBae from 'components/ArtBae';
import Footer from 'components/Footer';
import Roadmap from 'components/Roadmap';
import Welcome from 'components/Welcome';
import BaeFriends from 'components/BaeFriends';

import Season2 from 'components/Season2/Season2';

const decodeUrl = {
  '': 0,
  'reveal': 1,
  'collection': 2,
  'vision': 3,
  'team': 4,
  'merch': 5,
  'mint': 6,
}
interface HomeProps {
  initIndex: number;
}
const Home: React.FC<HomeProps> = ({ initIndex }) => {
  const wlcRef = useRef<null | HTMLDivElement>(null);
  const baeStory = useRef<null | HTMLDivElement>(null);
  const roadMap = useRef<null | HTMLDivElement>(null);
  const baeFriends = useRef<null | HTMLDivElement>(null);
  const artBae = useRef<null | HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [seasonIndex, setSeason] = useState<number>(0);

  const handleScroll = (value) => {
    if (value === 'home') {
      router.push('/s1/home', '/s1/home', { shallow: true });
    }
    if (value === 'bae-story') {
      router.push('/s1/bae-story', '/s1/bae-story', { shallow: true });
    }
    if (value === 'boobamap') {
      router.push('/s1/boobamap', '/s1/boobamap', { shallow: true });
    }
    if (value === 'bae-friends') {
      router.push('/s1/bae-friends', '/s1/bae-friends', { shallow: true });
    }
    if (value === 'art-bae') {
      router.push('/s1/art-bae', '/s1/art-bae', { shallow: true });
    }
  };

  const router = useRouter();

  useEffect(() => {
    const { page } = router.query;
    if (page === 'home') {
      if (wlcRef && wlcRef.current) {
        wlcRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    if (page === 'bae-story') {
      if (baeStory && baeStory.current) {
        baeStory.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    if (page === 'boobamap') {
      if (roadMap && roadMap.current) {
        roadMap.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    if (page === 'bae-friends') {
      if (baeFriends && baeFriends.current) {
        baeFriends.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    if (page === 'art-bae') {
      if (artBae && artBae.current) {
        artBae.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [router.query]);

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

  useEffect(()=>{
    document.body.classList.add('season1');
  },[])

  const onChangeSeason = (value: number) => {
    if (document.body.classList.value.includes('fix-height')) {
      document.body.classList.remove('fix-height');
    }
    if(value === 0){
      document.body.classList.remove('season2');
      document.body.classList.add('season1');
      router.push("/s1");
    } else {
      document.body.classList.remove('season1');
      document.body.classList.add('season2');
      router.push("/");
    }
    setSeason(value);
  };

  const content =
    seasonIndex === 0 ? (
      <div  style={{backgroundColor: '#ece5db'}}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <meta name="theme-color" content="#ECE5DB" />
        <Nav
          handleScroll={handleScroll}
          width={width}
          maxHeight={maxHeight}
          onChangeSeason={onChangeSeason}
        />
        <div style={{backgroundColor: '#ece5db', WebkitAnimation: 'fadein 1s', MozAnimation: 'fadein 1s', OAnimation: 'fadein 1s', animation: 'fadein 1s' , animationDelay: '0.5s', animationFillMode: 'both'}}>
          <Welcome wlcRef={wlcRef} />
          <XXC />
          <Story baeStory={baeStory} />
          <Roadmap roadMap={roadMap} />
          <BaeFriends baeFriends={baeFriends} />
          <ArtBae artBae={artBae} />
          <Footer />
        </div>
      </div>
    ) : (
      <Season2 onChangeSeason={onChangeSeason} initIndex={initIndex}></Season2>
    );
  return (
    <>
      <Head>
        <title>BaeCafe | Booba is life, Booba is culture</title>
      </Head>
      {content}
    </>
  );
};

export const getServerSideProps = async ({ req, res, params, query }) => {
  const { page } = query;
  const initIndex = decodeUrl[page?.toString()] || 0;
  return {
    props: { initIndex },
  }
}

export default Home;
