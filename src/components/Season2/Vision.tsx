import type { NextPage } from 'next';
import {CLOUDFRONT_IMG} from '../helper';
import VisionStyle from 'styles/Season2/VisionElement';

const Vision: NextPage = () => {
  const image1 = {
    url: `${CLOUDFRONT_IMG}/season2/vision/ic-vision-1_a.jpg`,
    minHeight: '368px'
  }
  const image2 = {
    url: `${CLOUDFRONT_IMG}/season2/vision/ic-vision-2_a.jpg`,
    minHeight: '368px'
  }
  const image3 = {
    url: `${CLOUDFRONT_IMG}/season2/vision/ic-vision-3_b.jpg`,
    minHeight: '368px'
  }
  const image4 = {
    url: `${CLOUDFRONT_IMG}/season2/vision/ic-vision-4_a.png?version=1.0.0`,
    minHeight: '368px'
  }
  return (
    <VisionStyle>
      <div className="vision-main">
        <div className="vision-left">
          <div className="vision-title">Vision</div>
          <div className="vision-description">
          baecafe is a place in which artists and collectors can come together for mutual benefit and enjoyment. members of our community and holders of our nfts are rewarded in the following ways.
          </div>
          <div style={{ height: '26px' }}></div>
          <div className="vision-description">
          Artists will gain exposure and/or financial benefit by participating in our contests and being featured in our releases and auctions.
          </div>
          <div className="vision-image-mobile">
            <img
              className="vision-image-mobile-item"
              src={image1.url}
              alt=""
            ></img>
            <div className="vision-image-space"></div>
            <img
              className="vision-image-mobile-item"
              src={image2.url}
              alt=""
            ></img>
            <img
              className="vision-image-mobile-item"
              src={image3.url}
              alt=""
            ></img>
            <div className="vision-image-space"></div>
            <img
              className="vision-image-mobile-item"
              src={image4.url}
              alt=""
            ></img>
          </div>
          <div style={{ height: '26px' }}></div>
          <div className="vision-description">BAecafe wallet collects art for the vault from community artists. holders are given preference in selection.</div>
          <div style={{ height: '26px' }}></div>
          <div className="vision-description">
          collectors have access to familiar community artists for commissions and will have opportunity to purchase directly saving gas and royalty fees.
          </div>
          <div style={{ height: '26px' }}></div>
          <div className="vision-description">
          through an extensive network, our community is able to verify authenticity of any offering, giving collectors confidence when purchasing on open markets.
          </div>
          <div style={{ height: '26px' }}></div>
          <div className="vision-description">
          holders are given exclusive access to giveaways, private auctions, gas only mints, early access to affiliate projects. and voting rights regarding cafe’s vault, and will have first access to its governance token.
          </div>
          <div style={{ height: '26px' }}></div>
          <div className="vision-description">
          we are builders, artists, and collectors.  WGMI! join us! 
          </div>
        </div>
        <div className="vision-right">
          <div className="vision-parent-image-left">
            <img className="vision-image-top" src={image1.url} alt=""></img>
            <img className="vision-image-bottom" src={image3.url} alt=""></img>
          </div>
          <div className="vision-parent-image-right">
            <img className="vision-image-top" src={image2.url} alt=""></img>
            <img className="vision-image-bottom" src={image4.url} alt="" height="400" style={{objectFit: 'cover'}}></img>
          </div>
        </div>
      </div>
      <div className="vision-footer">To the extent possible under law, Bae Cafe S2 (MekaBae) has waived all copyright and related or neighboring rights to the collection.</div>
    </VisionStyle>
  );
};

export default Vision;
