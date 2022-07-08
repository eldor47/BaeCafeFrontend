import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Masonry from 'react-masonry-component';

import ArtBaeStyle from 'styles/ArtBaeElement';
import { CLOUDFRONT_IMG } from './helper';

const masonryOptions = {
  transitionDuration: 0,
  fitWidth: true,
};
interface ArtProps {
  artBae: any;
}
const collections = [
  {
    id: '1',
    title: 'Fever D R E A M',
    content: 'DREAMS',
    url: 'https://foundation.app/@Peritrago/Kaleido/3',
  },
  {
    id: '2',
    title: 'Ai',
    content: "toumin's collection",
    url: 'https://foundation.app/@10_mi_n/tomi/1',
  },
  {
    id: '3',
    title: 'NINON - OUTDOOR PHOTOGRAPHY',
    content: 'NINON DAILY LIFE',
    url: 'https://foundation.app/@uosaasou/ninon/3',
  },
  {
    id: '4',
    title: 'Battle academy #40',
    content: 'Battle academy',
    url: 'https://foundation.app/@Gasari/ba-035f/10',
  },
];
const mansonic = [
  {
    id: 7,
    title: 'Officine italiane del Rinascimento',
    content: 'Historiepodden',
  },
  {
    id: 8,
    title: 'Financial Data',
    content: 'Snacka Snyggt',
  },
  // {
  //   id: 9,
  //   title: '',
  //   content: 'Dumma Människor',
  // },
  // {
  //   id: 10,
  //   title: 'Developer Secrets',
  //   content: 'Elsa Billgren och Sofia Wood',
  // },
  // {
  //   id: 11,
  //   title: '',
  //   content: 'Arkiv Samtal',
  // },
  // {
  //   id: 12,
  //   title: 'Parle Rusk',
  //   content: 'Palmemordet',
  // },
  // {
  //   id: 13,
  //   title: 'Live to On Demand',
  //   content: 'Brita Zackari och Parisa Amiri',
  // },
  // {
  //   id: 14,
  //   title: '',
  //   content: 'Ekonomistudion',
  // },
  // {
  //   id: 15,
  //   title: 'The Class Recover',
  //   content: 'Officine italiane del Rinascimento',
  // },
  // {
  //   id: 16,
  //   title: 'The Class Collaborations',
  //   content: 'Officine italiane del Rinascimento',
  // },
  // {
  //   id: 17,
  //   title: 'Live to On Demand',
  //   content: 'Ceramiche Precolombiane',
  // },
  // {
  //   id: 18,
  //   title: 'Officine italiane del Rinascimento',
  //   content: 'Linea del tempo delle ceramiche al MIC',
  // },
];
// const mansonic2 = [
//   {
//     id: 45,
//     title: 'Officine italiane del Rinascimento',
//     content: 'Historiepodden',
//   },
//   {
//     id: 46,
//     title: 'Financial Data',
//     content: 'Snacka Snyggt',
//   },
//   {
//     id: 47,
//     title: '',
//     content: 'Dumma Människor',
//   },
//   {
//     id: 48,
//     title: 'Developer Secrets',
//     content: 'Elsa Billgren och Sofia Wood',
//   },
//   {
//     id: 5,
//     title: '',
//     content: 'Arkiv Samtal',
//   },
//   {
//     id: 6,
//     title: 'Parle Rusk',
//     content: 'Palmemordet',
//   },

// ];
// const mansonic3 = [
//   {
//     id: 19,
//     title: 'Officine italiane del Rinascimento',
//     content: 'Historiepodden',
//   },
//   {
//     id: 20,
//     title: 'Financial Data',
//     content: 'Snacka Snyggt',
//   },
//   {
//     id: 21,
//     title: '',
//     content: 'Dumma Människor',
//   },
//   {
//     id: 22,
//     title: 'Officine italiane del Rinascimento',
//     content: 'Historiepodden',
//   },
//   {
//     id: 23,
//     title: 'Financial Data',
//     content: 'Snacka Snyggt',
//   },
//   {
//     id: 24,
//     title: '',
//     content: 'Dumma Människor',
//   },
// ];
// const mansonic4 = [
//   {
//     id: 25,
//     title: 'Officine italiane del Rinascimento',
//     content: 'Historiepodden',
//   },
//   {
//     id: 26,
//     title: 'Financial Data',
//     content: 'Snacka Snyggt',
//   },
//   {
//     id: 27,
//     title: '',
//     content: 'Dumma Människor',
//   },
//   {
//     id: 28,
//     title: 'Officine italiane del Rinascimento',
//     content: 'Historiepodden',
//   },
//   {
//     id: 29,
//     title: 'Financial Data',
//     content: 'Snacka Snyggt',
//   },
//   {
//     id: 30,
//     title: '',
//     content: 'Dumma Människor',
//   },
// ];
// const mansonic5 = [
//   {
//     id: 31,
//     title: 'Officine italiane del Rinascimento',
//     content: 'Historiepodden',
//   },
//   {
//     id: 32,
//     title: 'Financial Data',
//     content: 'Snacka Snyggt',
//   },
//   {
//     id: 33,
//     title: '',
//     content: 'Dumma Människor',
//   },
//   {
//     id: 34,
//     title: 'Officine italiane del Rinascimento',
//     content: 'Historiepodden',
//   },
//   {
//     id: 35,
//     title: 'Financial Data',
//     content: 'Snacka Snyggt',
//   },
//   {
//     id: 36,
//     title: '',
//     content: 'Dumma Människor',
//   },
// ];
// const mansonic6 = [
//   {
//     id: 37,
//     title: 'Officine italiane del Rinascimento',
//     content: 'Historiepodden',
//   },
//   {
//     id: 38,
//     title: 'Financial Data',
//     content: 'Snacka Snyggt',
//   },
//   {
//     id: 39,
//     title: '',
//     content: 'Dumma Människor',
//   },
//   {
//     id: 40,
//     title: 'Officine italiane del Rinascimento',
//     content: 'Historiepodden',
//   },
//   {
//     id: 41,
//     title: 'Financial Data',
//     content: 'Snacka Snyggt',
//   },
//   {
//     id: 42,
//     title: '',
//     content: 'Dumma Människor',
//   },
// ];
// const moreImage = [
//   mansonic2,
//   mansonic3,
//   mansonic4,
//   mansonic5,
//   mansonic6,
// ]
const ArtBae: NextPage<ArtProps> = ({ artBae }) => {
  const [artData, setArtData] = useState(mansonic);
  const [currentList, setCurrentList] = useState<number>(0);

  const loadMore = () => {
    if (currentList > 4) {
      return;
    }
    // setArtData([...artData, ...moreImage[currentList]]);
    // setCurrentList(currentList+1);
  };

  const renderArt =
    artData &&
    artData.map(function (item) {
      return (
        <li className="image-element-class" key={item.id}>
          <img
            src={CLOUDFRONT_IMG + `/image/art/${item.id}.jpeg`}
            width="260"
            alt="bae"
          />
          <div className="art-title">{item.title}</div>
          <div className="art-content">{item.content}</div>
        </li>
      );
    });
  const renderBae = () => {
    return collections.map((item) => {
      return (
        <div key={item.id} className="bae-img">
          <a href={item.url} target="_blank" rel="noreferrer">
            <img
              src={CLOUDFRONT_IMG + `/image/art/${item.id}.jpeg`}
              width="260"
              height="343"
              className="bae-collection"
              alt={item.id}
            />
          </a>
          <div className="art-title">{item.title}</div>
          <div className="art-content">{item.content}</div>
        </div>
      );
    });
  };
  return (
    <ArtBaeStyle ref={artBae}>
      <div className="artbae">Bae Art Collectoooor</div>
      <img
        src={CLOUDFRONT_IMG + '/image/separate.svg'}
        className="separate"
        alt="separate"
      />
      <div className="art-bae-des">
        We love arts! Especially animes and moobas and baes. And we love
        supporting artists. Here&apos;s what we have collected for Bae Cafe.
        Come enjoy it with us!
      </div>
      <div className="art-collection">{renderBae()}</div>
      <div className="art-selection">
        <div className="art-item">
          <a
            href="https://foundation.app/@AOYA/aoya/3"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={CLOUDFRONT_IMG + '/image/art/5.jpeg'}
              className="art-img"
              alt="bae"
            />
          </a>
          <div className="art-title">Kay&apos;s Universe</div>
          <div className="art-content">AOYA</div>
        </div>
        <div className="art-item">
          <a
            href="https://foundation.app/@Gasari/jb/4"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={CLOUDFRONT_IMG + '/image/art/6.jpeg'}
              className="art-img"
              alt="bae"
            />
          </a>
          <div className="art-title">Iris - [Rose Quartz family]</div>
          <div className="art-content">Jewel brides</div>
        </div>
      </div>
      <div className="art-selection">
        <div className="art-item">
          <a
            href="https://foundation.app/@uosaasou/foundation/123675"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={CLOUDFRONT_IMG + '/image/art/7.jpeg'}
              className="art-img"
              alt="bae"
            />
          </a>
          <div className="art-title">「OSA - GREEN CARD」</div>
          <div className="art-content">Foundation</div>
        </div>
        <div className="art-item">
          <a
            href="https://foundation.app/@RaptorVz-Hacked/eonales/1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={CLOUDFRONT_IMG + '/image/art/8.jpeg'}
              className="art-img"
              alt="bae"
            />
          </a>
          <div className="art-title">TWOE-01 | KIRA</div>
          <div className="art-content">The World of Eonales</div>
        </div>
      </div>
      {/* <Masonry
        className={'my-gallery-class'}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}>
        {renderArt}
      </Masonry> */}
      <div className="more-list">
        <div className="separateLine"></div>
        <a
          className="showmore"
          href="https://foundation.app/@baecafe"
          target="_blank"
          rel="noreferrer"
        >
          Show more
        </a>
        <div className="separateLine"></div>
      </div>
    </ArtBaeStyle>
  );
};

export default ArtBae;
