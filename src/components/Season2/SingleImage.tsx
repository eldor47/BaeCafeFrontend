import type { NextPage } from 'next';
import React, { useState } from 'react';

import SingleImageStyle from 'styles/Season2/SingleImageElement';

interface SingleImageProps {
  data: any;
}
const loadingStyle: any = { opacity: 1, objectFit: 'cover', transition: 'filter 0.3s ease-in-out', cursor: 'zoom-in', filter: 'blur(4px)' };
const loadedStyle: any = { opacity: 1, objectFit: 'cover' };
const SingleImage: NextPage<SingleImageProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  function onLoad() {
    setIsLoading(false);
  }
  return (
    <SingleImageStyle>
      {/* <div
        className="singleImage-placehoder-parent"
        style={{
          minHeight: data.minHeight,
          display: isLoading ? 'flex' : 'none',
        }}
      >
        <img
          className="singleImage-placehoder-image"
          src="/image/season2/ic-gallery-thumbnail.png"
          alt=""
        />
      </div> */}
      <a href={data.link} target="_blank" rel="noreferrer" className="video-vault">
        {isLoading && (
          <div className="video-loading">
            <i className="fa fa-circle-o-notch fa-spin"></i>
          </div>
        )}
        <video
          loop
          src={data.url}
          poster={data.poster}
          autoPlay
          onPlay={onLoad}
          playsInline
          style={isLoading ? loadingStyle : loadedStyle}
          width="100%"
          height="450"
          muted
        ></video>
      </a>
    </SingleImageStyle>
  );
};

export default SingleImage;
