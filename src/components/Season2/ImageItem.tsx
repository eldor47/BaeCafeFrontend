import type { NextPage } from 'next';
import React, { useState } from 'react';

import ImageItemStyle from 'styles/Season2/ImageElement';

interface ImageItemProps {
  data: any;
}

const ImageItem: NextPage<ImageItemProps> = ({ data }) => {
  // const [isLoading, setIsLoading] = useState(true);
  // function onLoad() {
  //  setIsLoading(false)
  // }

  const detailStyle = data.titleText
    ? 'imageItem-detail'
    : 'imageItem-detail-null-title';
  const title = data.titleText ? (
    <div className="imageItem-title">{data.titleText}</div>
  ) : null;
  const detail = data.detailsText ? (
    <div className={detailStyle}>{data.detailsText}</div>
  ) : null;
  if (data.type === 'video') {
    return (
      <ImageItemStyle>
        {data.link ? (
          <a href={data.link} target="_blank" rel="noreferrer" className="video-url">
            <div className="video-wrapper">
            <video
              loop
              src={data.url}
              poster={data.poster}
              autoPlay
              playsInline
              style={{ opacity: 1, objectFit: 'cover' }}
              width="300"
              height="350"
              muted
            ></video>
            </div>
          </a>
        ) : (
          <img
            className="imageItem-display"
            src={data.url}
            alt=""
            width={300}
            height={data.height}
          />
        )}
        <div className="imageItem-sub">
          {title}
          {detail}
        </div>
      </ImageItemStyle>
    );
  }
  return (
    <ImageItemStyle>
      {data.link ? (
        <a href={data.link} target="_blank" rel="noreferrer">
          <img
            className="imageItem-display"
            src={data.url}
            alt=""
            width={300}
            height={data.height}
          />
        </a>
      ) : (
        <img
          className="imageItem-display"
          src={data.url}
          alt=""
          width={300}
          height={data.height}
        />
      )}
      <div className="imageItem-sub">
        {title}
        {detail}
      </div>
    </ImageItemStyle>
  );
};

export default ImageItem;
