import type { NextPage } from 'next';
import GalleryMenuItem from 'components/Season2/GalleryMenuItem';
import MasonyLayout from 'components/Season2/MasonyLayout';

import GalleryStyle from 'styles/Season2/GalleryElement';
import { useEffect, useRef, useState } from 'react';

import MediaList from 'components/Season2/MediaList';
import { CLOUDFRONT_IMG } from 'components/helper';

const defaultData = [
  {
    url: `${CLOUDFRONT_IMG}/season2/religious/religious-1.png`,
    titleText: 'Officine italiane del Rinascimento',
    detailsText: 'Historiepodden',
    width: 300,
    height: 508
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/religious/religious-2.png`,
    titleText: 'Financial Data',
    detailsText: 'Snacka Snyggt',
    width: 300,
    height: 452
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/religious/religious-3.png`,
    titleText: null,
    detailsText: 'Dumma Människor',
    width: 300,
    height: 408
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/religious/religious-4.png`,
    titleText: null,
    detailsText: 'Arkiv Samtal',
    width: 300,
    height: 307
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/religious/religious-5.png`,
    titleText: 'Parle Rusk',
    detailsText: 'Palmemordet',
    width: 300,
    height: 391
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/religious/religious-6.png`,
    titleText: 'Live to On Demand',
    detailsText: 'Brita Zackari och Parisa Amiri',
    width: 300,
    height: 555
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/religious/religious-7.png`,
    titleText: 'The Class Recover',
    detailsText: 'Officine italiane del Rinascimento',
    width: 300,
    height: 372
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/religious/religious-8.png`,
    titleText: 'The Class Collaborations',
    detailsText: 'Officine italiane del Rinascimento',
    width: 300,
    height: 494
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/religious/religious-9.png`,
    titleText: 'Live to On Demand',
    detailsText: 'Ceramiche Precolombiane',
    width: 300,
    height: 332
  },
];

const Gallery: NextPage = () => {
  const [categoryIndex, setCategoryIndex] = useState<number>(0);
  const [galleryData, setGalleryData] = useState<any>(defaultData);
  const [galleryTitle, setGalleryTitle] = useState<string>('RELIGIOUS');
  const [isGalleryFilter, showGalleryFilter] = useState<boolean>(false);

  const handleChangeGallery = (value: number) => {
    showGalleryFilter(false);
    setCategoryIndex(value);
    switch (value) {
      case 0:
        setGalleryData(defaultData);
        setGalleryTitle('RELIGIOUS');
        break;
      case 1:
        // setGalleryData([defaultData[0], defaultData[1], defaultData[4]]);
        setGalleryData([defaultData[0], defaultData[4]]);
        setGalleryTitle('HONEST');
        break;
      case 2:
        setGalleryData([
          defaultData[0],
          defaultData[1],
          defaultData[3],
          defaultData[6],
        ]);
        setGalleryTitle('LOYAL');
        break;
      case 3:
        setGalleryData([defaultData[0], defaultData[1], defaultData[5]]);
        setGalleryTitle('DEVOTED');
        break;
      case 4:
        setGalleryData([
          defaultData[0],
          defaultData[1],
          defaultData[5],
          defaultData[4],
        ]);
        setGalleryTitle('LOVING');
        break;
      case 5:
        setGalleryData([
          defaultData[0],
          defaultData[2],
          defaultData[5],
          defaultData[4],
          defaultData[3],
        ]);
        setGalleryTitle('KIND');
        break;
      case 6:
        setGalleryTitle('SINCERE');
        break;
      case 7:
        setGalleryTitle('KIND');
        break;
      default:
        break;
    }
  };
  const galleryList = (
    <div className='gallery-list'>
      <GalleryMenuItem
        index={0}
        text="Religious"
        isFirstLine={true}
        isSelected={categoryIndex === 0 ? true : false}
        handleChangeGallery={handleChangeGallery}
      ></GalleryMenuItem>
      <GalleryMenuItem
        index={1}
        text="Honest"
        isFirstLine={false}
        isSelected={categoryIndex === 1 ? true : false}
        handleChangeGallery={handleChangeGallery}
      ></GalleryMenuItem>
      <GalleryMenuItem
        index={2}
        text="Loyal"
        isFirstLine={false}
        isSelected={categoryIndex === 2 ? true : false}
        handleChangeGallery={handleChangeGallery}
      ></GalleryMenuItem>
      <GalleryMenuItem
        index={3}
        text="Devoted"
        isFirstLine={false}
        isSelected={categoryIndex === 3 ? true : false}
        handleChangeGallery={handleChangeGallery}
      ></GalleryMenuItem>
      <GalleryMenuItem
        index={4}
        text="Loving"
        isFirstLine={false}
        isSelected={categoryIndex === 4 ? true : false}
        handleChangeGallery={handleChangeGallery}
      ></GalleryMenuItem>
      <GalleryMenuItem
        index={5}
        text="Kind"
        isFirstLine={false}
        isSelected={categoryIndex === 5 ? true : false}
        handleChangeGallery={handleChangeGallery}
      ></GalleryMenuItem>
      <GalleryMenuItem
        index={6}
        text="Sincere"
        isFirstLine={false}
        isSelected={categoryIndex === 6 ? true : false}
        handleChangeGallery={handleChangeGallery}
      ></GalleryMenuItem>
      <GalleryMenuItem
        index={7}
        text="Ambitious"
        isFirstLine={false}
        isSelected={categoryIndex === 7 ? true : false}
        handleChangeGallery={handleChangeGallery}
      ></GalleryMenuItem>
      <GalleryMenuItem
        index={8}
        text="Kind"
        isFirstLine={false}
        isSelected={categoryIndex === 8 ? true : false}
        handleChangeGallery={handleChangeGallery}
      ></GalleryMenuItem>
    </div>
  );
  return (
    <GalleryStyle>
      <div className="gallery-big">
        <div className="gallery-left">
          <div className="gallery-title">gallery</div>
          {galleryList}
        </div>
        <div className="gallery-right">
          <MasonyLayout data={galleryData}></MasonyLayout>
        </div>
      </div>
      <div className="gallery-small">
        <div className="gallery-drop-menu">
          <div className="gallery-drop-menu-parent">
            <div className="gallery-drop-menu-title">GALLERY</div>
            <div
              className="gallery-drop-menu-right"
              onClick={() => showGalleryFilter(!isGalleryFilter)}
            >
              <div className="gallery-drop-menu-type">{galleryTitle}</div>
              <img
                className="gallery-drop-menu-filter"
                src="/image/season2/ic-filter.png"
                alt=""
              ></img>
            </div>
          </div>
          {isGalleryFilter ? galleryList : null}
          {isGalleryFilter ? null : <div className="gallery-mobile">
            <MediaList data={galleryData}></MediaList>
          </div>}
        </div>
      </div>
    </GalleryStyle>
  );
};

export default Gallery;
