import type { NextPage } from 'next';
import React from 'react';

import MasonyStyle from 'styles/Season2/MaSonyLayoutElement';

import Masony from 'react-masonry-component';
// import InfiniteScroll from 'react-infinite-scroll-component';
import ImageItem from 'components/Season2/ImageItem';

interface MasonyProps {
  data: any;
}

// Masory Options
const masonryOptions = {
  fitWidth: false,
  isFitWidth: true,
  columnWidth: 300,
  gutter: 40,
  itemSelector: '.photo-item',
};

const MasonyLayout: NextPage<MasonyProps> = ({ data }) => {
  let itemWidth = '300px'
  return (
    <MasonyStyle>
      <Masony
        className={'photo-list'}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {data &&
          data.map((photo: any, index: React.Key) => (
            <li className={'photo-item'} key={index}>
              <ImageItem data={photo}></ImageItem>
            </li>
          ))}
      </Masony>
    </MasonyStyle>
  );
};

export default MasonyLayout;
