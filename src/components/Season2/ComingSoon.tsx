import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

import ComingSoonStyle from 'styles/Season2/ComingSoonElement';
import { CLOUDFRONT_IMG } from '../helper';

const ComingSoon: NextPage = () => {
  const [maxHeight, setMaxHeight] = useState<number>(0);

  const updateDimensions = () => {
    const deviceHeight = window.innerHeight;
    setMaxHeight(deviceHeight);
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

  return (
    <ComingSoonStyle height={maxHeight || 1000}>
      <motion.div
        className="comingson"
        transition={{
          ease: "easeInOut",
          duration: 0.2,
          opacity: { delay: 0.2, duration: 0.3 }
        }}
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
      >
        <div className="comingson-main">
          <div className="comingsonText-parent">
            <img
              className="comingsonText-BGImage"
              src={`${CLOUDFRONT_IMG}/season2/comingsoon/comingsoon.png`}
              width="254"
              height="104"
              alt=""
            />
            <div className="comingsonText">Reveal At: </div>
          </div>
        </div>
        <div className="comingsoon-img"></div>
      </motion.div>
      {/* <div className='comingsonTest'></div> */}
    </ComingSoonStyle>
  );
};

export default ComingSoon;
