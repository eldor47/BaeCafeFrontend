import { CLOUDFRONT_IMG } from 'components/helper';
import styled from 'styled-components';

const SingleImageStyle = styled.div`
  position: relative;
  display: block;
  width: 100%;
  .video-vault{
    margin-bottom: 8px;
    display: flex;
    :hover{
      cursor: pointer;
      box-sizing: border-box;
      outline: 4px solid #7e54d9;
      filter: drop-shadow(8px 8px 0px #8fd988);
    }
    .video-loading{
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      z-index: 1;
      i {
        color: #ccc;
        position: absolute;
        font-weight: 300;
        font-size: 40px;
      }
    }
  }
  .singleImage-placehoder-parent {
    position: relative;
    display: flex;
    margin-top: 0px;
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: center;
  }
  .singleImage-placehoder-image {
    position: relative;
    display: block;
    width: 300px;
    height: 300px;
    objectFit: contain
  }
  .singleImage-display{
    width: 100%;
    background-image: url('${CLOUDFRONT_IMG}/season2/collection/ic-gallery-thumbnail.jpeg');
    :hover {
      cursor: pointer;
      outline: 4px solid #7e54d9;
      box-sizing: border-box;
      filter: drop-shadow(8px 8px 0px #8fd988);
    }
  }
  
`;

export default SingleImageStyle;
