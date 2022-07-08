import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Season1 from 'components/Season1/page';
import Season2 from 'components/Season2/Season2';
import { useEffect, useState } from 'react';
const decodeUrl = {
  '': 0,
  'reveal': 1,
  'collection': 2,
  'vision': 3,
  'team': 4,
  'merch': 5,
  'mint': 6,
}
const season1 = ['home', 'bae-story', 'boobamap', 'bae-friends', 'art-bae']
interface HomeProps {
  initIndex: number;
}
const Home: React.FC<HomeProps> = ({ initIndex }) => {
  const [seasonIndex, setSeason] = useState<number>(1);
  const router = useRouter();

  useEffect(()=>{
    document.body.classList.add('season2');
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
  };
  if (season1.includes(router.query?.page?.toString()) || seasonIndex === 0) {
    return <Season1 onChangeSeason={onChangeSeason}/>
  }
  return <Season2 onChangeSeason={onChangeSeason} initIndex={initIndex} />
}

export const getServerSideProps = async ({ query }) => {
  const { page } = query;
  const initIndex = decodeUrl[page?.toString()] || 0;
  return {
    props: { initIndex },
  }
}


export default Home;
