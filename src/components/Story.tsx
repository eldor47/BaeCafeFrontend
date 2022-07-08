import type { NextPage } from 'next';
import React, { useRef } from 'react';

import StoryStyle from 'styles/StoryElement';
import { CLOUDFRONT_IMG } from 'components/helper';

interface StoryProps {
  baeStory: any;
}

const Story: NextPage<StoryProps> = ({ baeStory }) => {
  const renderBae = () => {
    return ['0', '1', '2', '3'].map((item) => {
      return (
        <div key={item} className="bae-img">
          <img src={CLOUDFRONT_IMG + `/image/story/${item}.jpg`} alt="bae" />
        </div>
      );
    });
  };
  return (
    <StoryStyle ref={baeStory}>
      <div className="logo">
        <div className="logo-animation" />
      </div>
      <div className="baestory">BAE-STORY</div>
      <img src="/image/separate.svg" className="separate" alt="separate" />
      <div className="content">
        <div className="content-1">
          I&apos;m Hana! My little dream was always to open a beach cafe, where the
          water&apos;s warm, the sky&apos;s clear, the drinks are sweet, and the food is
          DELISH.
        </div>
        <div className="content-2">
          So I invited my best friends to join me on this small business
          adventure. We pooled our savings, and found a secret little spot in
          our favorite beach getaway.
        </div>
        <div className="content-3">Welcome to Bae Cafe.</div>
        <div className="content-4">
          We have so many exciting things planned for our customers, from fresh
          foods, to delicious drinks, to bae parties and more
        </div>
        <div className="content-5">
          And our friends are gonna join too. Stay tuned ;)
        </div>
      </div>
      <div className="bae-image">{renderBae()}</div>
    </StoryStyle>
  );
};

export default Story;
