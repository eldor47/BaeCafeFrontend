import React from 'react';
import type { NextPage } from 'next';

import { CLOUDFRONT_IMG } from 'components/helper';
import RoadmapStyle from 'styles/RoadmapElement';

interface RoadMapProps {
  roadMap: any;
}

const Roadmap: NextPage<RoadMapProps> = ({ roadMap }) => {
  return (
    <RoadmapStyle ref={roadMap}>
      <div className="roadmap">BOOBAMAP</div>
      <img
        src={CLOUDFRONT_IMG + '/image/separate.svg'}
        className="separate"
        alt="separate"
      />
      <div className="roadmap-des">
        We&apos;ve got sooo many exciting things planned, including a bunch of
        cute and sexy new outfits, some new bffs, and even a little cafeverse in
        the works. Please take a seat and enjoy your time here at the Bae Cafe!
      </div>
      <div>
        <div className="upcomming">
          UPCOMING
        </div>
        <div className="roadmap-stage">
          <div className="roadmap-image">
            <div className="image">
              <img
                src={CLOUDFRONT_IMG + '/image/roadmap/heart2.svg'}
                width="60"
                height="40"
                className="heart"
                alt="done"
              />
              <img
                src={CLOUDFRONT_IMG + '/image/roadmap/stick.svg'}
                width="60"
                height="70"
                style={{ objectFit: 'none' }}
                alt="done"
              />
            </div>
          </div>
          <div className="roadmap-content">
            <div className="title">Hana&apos;s debut</div>
          </div>
        </div>
        <div className="roadmap-stage">
          <div className="roadmap-image">
            <div className="roadmap-content2 two-line">
              <div className="title">Food and drinks menu</div>
            </div>
            <div className="image">
              <img
                src={CLOUDFRONT_IMG + '/image/roadmap/heart2.svg'}
                width="60"
                height="40"
                className="heart"
                alt="done"
              />
              <img
                src={CLOUDFRONT_IMG + '/image/roadmap/stick.svg'}
                width="60"
                height="70"
                style={{ objectFit: 'none' }}
                alt="done"
              />
            </div>
          </div>
          <div className="roadmap-content"></div>
        </div>
        <div className="roadmap-stage">
          <div className="roadmap-image">
            <div className="image">
              <img
                src={CLOUDFRONT_IMG + '/image/roadmap/heart2.svg'}
                width="60"
                height="40"
                className="heart"
                alt="done"
              />
              <img
                src={CLOUDFRONT_IMG + '/image/roadmap/stick.svg'}
                width="60"
                height="70"
                style={{ objectFit: 'none' }}
                alt="done"
              />
            </div>
          </div>
          <div className="roadmap-content threeline">
            <div className="title">
              Customize your Bae with new accessories and outfits.
            </div>
          </div>
        </div>
        <div className="roadmap-stage">
          <div className="roadmap-image">
            <div className="roadmap-content2 two-line">
              <div className="title">Hana&apos;s first bff arrives!</div>
            </div>
            <div className="image">
              <img
                src={CLOUDFRONT_IMG + '/image/roadmap/heart2.svg'}
                width="60"
                height="40"
                className="heart"
                alt="done"
              />
              <img
                src={CLOUDFRONT_IMG + '/image/roadmap/stick.svg'}
                width="60"
                height="70"
                style={{ objectFit: 'none' }}
                alt="done"
              />
            </div>
          </div>
          <div className="roadmap-content"></div>
        </div>
        <div className="roadmap-stage">
          <div className="roadmap-image">
            <div className="roadmap-content2 multi-line">
            </div>
            <div className="image">
              <img
                src={CLOUDFRONT_IMG + '/image/roadmap/heart2.svg'}
                width="60"
                height="40"
                className="heart"
                alt="done"
              />
              <img
                src={CLOUDFRONT_IMG + '/image/roadmap/stick.svg'}
                width="60"
                height="40"
                className="stick"
                alt="done"
              />
            </div>
          </div>
          <div className="roadmap-content">
            <div className="title">
              The Bae Cafe-verse opens! Reserve your favorite tables and
              beach cabanas and become a part-owner of Bae Cafe
              </div>
          </div>
        </div>
      </div>
    </RoadmapStyle>
  );
};

export default Roadmap;
