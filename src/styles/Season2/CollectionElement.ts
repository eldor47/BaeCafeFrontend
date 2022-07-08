import styled from 'styled-components';

const CollectionStyle = styled.div`
  background-color: #240259;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 142px;

  .collection-main {
    background-color: #240259;
    position: relative;
    display: block;
    width: 1320px;
    height: 100%;
  }

  .collection-title {
    padding-top: 0px;
    font-family: 'Consolas';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 52px;
    text-transform: uppercase;
    color: #b6f486;
  }
  .collection-main-parent-image {
    position: relative;
    margin-top: 16px;
    width: 100%;
    min-height: 23.7vw;
    // background-image: url('https://d28u60wydcv7iq.cloudfront.net/baecafeweb/season2/collection/ic-gallery-thumbnail-bg.png')
  }
  .collection-main-image {
    position: relative;
    display: block;
    width: 100%;
  }
  .collection-main-image-title {
    padding-top: 8px;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #8fd988;
  }
  .collection-main-image-detail {
    padding-bottom: 20px;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.014em;
    color: #8fd988;
    padding-top: 8px;
  }
  .collection-masoty-parent {
    position: relative;
    margin-left: -40px;
    display: block;
    padding-top: 10px;
  }
  .collection-masoty-sub {
    position: relative;
    margin-left: -40px;
    display: block;
  }
  .collection-masoty-parent-small {
    position: relative;
    display: none;
    margin-top: 10px;
    width: calc(100% + 40px);
    padding-top: 10px;
  }
  .collection-showmore-parent {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    width: 100%;
    height: 60px;
  }
  .collection-showmore-sub {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 208px;
    height: 60px;
    margin-left: 40px;
    cursor: pointer;
  }
  .collection-showmore-bg-image {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
  .collection-showmore-text {
    position: relative;
    display: block;
    z-index: 1;
    font-family: 'Consolas';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 24px;
    color: #240259;
    :hover {
      opacity: 0.6
    }
  }

  @media screen and (max-width: 1327px) {
    .collection-main {
      width: 980px;
    }
  }
  @media screen and (max-width: 1320px) {
    .collection-title {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 987px) {
    .collection-main {
      width: 640px;
    }
  }
  @media screen and (max-width: 710px) {
    .collection-main {
      width: calc(100% - 80px);
    }
    .collection-masoty-parent {
      display: none;
    }
    .collection-masoty-parent-small {
      display: block;
    }
    .collection-showmore-sub {
      margin-left: 0px;
    }
  }
  @media screen and (max-width: 600px) {
    padding-left: 0px;
    .collection-main {
      width: calc(100% - 40px);
    }
    .gallery-drop-menu-right {
      margin-right: 15px;
    }
    .collection-masoty-parent-small {
      width: calc(100% + 20px);
    }
  }
`;

export default CollectionStyle;
