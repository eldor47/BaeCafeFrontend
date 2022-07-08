import { CLOUDFRONT_IMG } from 'components/helper';
import styled from 'styled-components';

const ImageItemStyle = styled.div`
  position: relative;
  min-height: 300px;
  .video-url{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    :hover {
      cursor: pointer;
      outline: 4px solid #7e54d9;
      box-sizing: border-box;
      filter: drop-shadow(8px 8px 0px #8fd988);
    }
    .video-wrapper{
      width: 300px;
      height: 320px;
      video {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
      }
    }
  }
  .imageItem-display{
    background-image: url('${CLOUDFRONT_IMG}/season2/collection/ic-gallery-thumbnail.jpeg');
    :hover {
      cursor: pointer;
      outline: 4px solid #7e54d9;
      box-sizing: border-box;
      filter: drop-shadow(8px 8px 0px #8fd988);
    }
  }
  .imageItem-sub {
    padding-top: 16px;
  }
  .imageItem-title {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #8fd988;
  }
  .imageItem-detail {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.014em;
    color: #8fd988;
    padding-top: 8px;
  }
  .imageItem-detail-null-title {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.014em;
    color: #8fd988;
  }
`;

export default ImageItemStyle;
