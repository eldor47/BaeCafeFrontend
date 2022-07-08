import type { NextPage } from 'next';

import MainContentStyle from 'styles/Season2/MainContentElement';

import Home from 'components/Season2/Home';
import Gallery from 'components/Season2/Gallery';
import Collection from 'components/Season2/Collection';
import Vision from 'components/Season2/Vision';
import Team from 'components/Season2/Team';
import React, { useCallback } from 'react';

interface MainContentProps {
  index: number;
}

const MainContent: React.FC<MainContentProps> = React.memo(function MainContent({ index }) {
  const getContent = useCallback(() => {
    if (index === 1) {
      return <Gallery />
    }
    if (index === 2) {
      return <Collection />
    }
    if (index === 3) {
      return <Vision />
    }
    if (index === 4) {
      return <Team />
    }
    return <Home />
  }, [index]);

  return getContent();
});

export default MainContent;
