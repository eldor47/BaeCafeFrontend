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
      <img src={CLOUDFRONT_IMG + "/image/separate.svg"} className="separate" alt="separate" />
      <div className="roadmap-des">
        We&apos;ve got sooo many exciting things planned, including a bunch of
        cute and sexy new outfits, some new bffs, and even a little cafeverse in
        the works. Please take a seat and enjoy your time here at the Bae Cafe!
      </div>
      <div>
        <div className="roadmap-stage">
          <div className="roadmap-image">
            <img
              src={CLOUDFRONT_IMG + "/image/roadmap/loaded.svg"}
              width="60"
              height="200"
              alt="done"
            />
          </div>
          <div className="roadmap-content">
            <div className="title">February</div>
            <div className="task">&#8226; Bae Cafe’s grand opening!</div>
            <div className="task">&#8226; Our first food and drinks menu.</div>
            <div className="task">
              &#8226; Whitelist opens for Hana’s debut.
            </div>
          </div>
        </div>
        <div className="roadmap-stage">
          <div className="roadmap-image">
            <div className="roadmap-content2">
              <div className="title">March</div>
              <div className="task">&#8226; Hana’s debut.</div>
              <div className="task">&#8226; Hana’s bff arrives!</div>
              <div className="task">
                &#8226; New food and drink items are added.
              </div>
            </div>
            <img
              src={CLOUDFRONT_IMG + "/image/roadmap/loading.svg"}
              width="60"
              height="200"
              alt="loading"
            />
          </div>
          <div className="roadmap-content"></div>
        </div>
        <div className="roadmap-stage">
          <div className="roadmap-image">
            <img
              src={CLOUDFRONT_IMG + "/image/roadmap/loading2.svg"}
              width="60"
              height="200"
              alt="loading"
            />
          </div>
          <div className="roadmap-content">
            <div className="title title-inactive">Future</div>
            <div className="task">
              &#8226; Customize your Bae with new accessories and outfits.
            </div>
            <div className="task">
              &#8226; The Bae Cafe-verse arrives! Reserve your favorite tables
              and beach cabanas and become a part-owner of Bae Cafe
            </div>
          </div>
        </div>
      </div>
    </RoadmapStyle>
  );
};

export default Roadmap;
