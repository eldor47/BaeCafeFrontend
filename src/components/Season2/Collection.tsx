import type { NextPage } from 'next';

import CollectionStyle from 'styles/Season2/CollectionElement';
import MasonyLayout from 'components/Season2/MasonyLayout';
import MediaList from 'components/Season2/MediaList';
import SingleImage from 'components/Season2/SingleImage';
import {CLOUDFRONT_IMG} from '../helper';

const defaultData = [
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/ic-collection-a-1.jpg`,
    titleText: 'Nizuki / BaeCafe',
    detailsText: 'MIZU',
    width: 300,
    height: 335,
    link: "https://foundation.app/@helena/mizu/6"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/ic-collection-a-2.jpg`,
    titleText: 'Fever D R E A M',
    detailsText: 'D R E A M S',
    width: 300,
    height: 442,
    link: "https://foundation.app/@Peritrago/Kaleido/3"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/ic-collection-a-3.jpg`,
    titleText: 'Ai',
    detailsText: 'toumin`s collection',
    width: 300,
    height: 345,
    link: "https://foundation.app/@10_mi_n/tomi/1"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/ic-collection-a-4.jpg`,
    titleText: "NINON DAILY LIFE" ,
    detailsText: 'NINON - OUTDOOR PHOTOGRAPHY',
    width: 300,
    height: 400,
    link: "https://foundation.app/@uosaasou/ninon/3"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/ic-collection-a-5.jpg`,
    titleText: 'Battle academy',
    detailsText: 'Battle academy #40',
    width: 300,
    height: 460,
    link: "https://foundation.app/@Gasari/ba-035f/10"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/ic-collection-a-6.jpg`,
    titleText: "AOYA",
    detailsText: 'Kay`s Universe',
    width: 300,
    height: 391,
    link: "https://foundation.app/@AOYA/aoya/3"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/ic-collection-a-7.jpg`,
    titleText: 'Jewel brides',
    detailsText: 'Iris - [Rose Quartz family]',
    width: 300,
    height: 300,
    link: "https://foundation.app/@Gasari/jb/4"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/ic-collection-a-8.jpg`,
    titleText: 'Foundation',
    detailsText: 'OSA - GREEN CARD',
    width: 300,
    height: 540,
    link: "https://foundation.app/@uosaasou/foundation/123675"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/ic-collection-a-9.jpg`,
    titleText: "The World of Eonales",
    detailsText: 'TWOE-01 | KIRA',
    width: 300,
    height: 424,
    link: "https://foundation.app/@0x525/0x525/1"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/ic-collection-a-10.png`,
    titleText: "baecafe s1",
    detailsText: 'baecafe x benangbaja',
    width: 300,
    height: 384,
    link: "https://foundation.app/@baecafe/cafe-s1/4"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/ic-collection-a-11.png`,
    titleText: "baecafe s1",
    detailsText: 'baecafe x lewdlily',
    width: 300,
    height: 324,
    link: "https://foundation.app/@baecafe/cafe-s1/2"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/ic-collection-a-12.png`,
    titleText: "cafe art",
    detailsText: 'BaeCafe S2 Pixelated',
    width: 300,
    height: 424,
    link: "https://foundation.app/@baecafe/cafe/2"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/nft2.mp4`,
    titleText: "cafe art",
    type: "video",
    detailsText: 'beach',
    width: 300,
    height: 424,
    poster: `${CLOUDFRONT_IMG}/season2/collection/poster2.jpeg`,
    link: "https://foundation.app/@baecafe/cafe/1"
  },
  {
    url: `${CLOUDFRONT_IMG}/season2/collection/nft.mp4`,
    titleText: "baecafe s1",
    type: "video",
    detailsText: 'baecafe x nekobox',
    width: 300,
    height: 300,
    poster: `${CLOUDFRONT_IMG}/season2/collection/poster.jpeg`,
    link: "https://foundation.app/@baecafe/cafe-s1/3"
  }
];

const banner = {
  url: `${CLOUDFRONT_IMG}/season2/collection/nft2.mp4`,
  minHeight: '20vw',
  poster: `${CLOUDFRONT_IMG}/season2/collection/poster2.jpeg`,
  link: "https://foundation.app/@baecafe/cafe/1"
}

const Collection: NextPage = () => {
  const showMore = (
    <div className="collection-showmore-parent">
      <div className="collection-showmore-sub">
        <img
          className="collection-showmore-bg-image"
          src={`${CLOUDFRONT_IMG}/season2/button/connect-btn.png`}
          alt=""
        ></img>
        <a
          className="showmore"
          href="https://foundation.app/@baecafe?tab=owned"
          target="_blank"
          rel="noreferrer"
        >
          <div className="collection-showmore-text">SHOW MORE</div>
        </a>
      </div>
    </div>
  );
  return (
    <CollectionStyle>
      <div className="collection-main">
        <div className="collection-title">VAULT</div>
        <div className="collection-main-parent-image">
          <SingleImage data={banner}></SingleImage>
        </div>
        <div className="collection-main-image-title">
          cafe art
        </div>
        <div className="collection-main-image-detail">beach</div>
        <div className="collection-masoty-parent">
          <MasonyLayout data={defaultData}></MasonyLayout>
          {showMore}
        </div>
        <div className="collection-masoty-parent-small">
          <MediaList data={defaultData}></MediaList>
          {showMore}
        </div>
      </div>
    </CollectionStyle>
  );
};

export default Collection;
