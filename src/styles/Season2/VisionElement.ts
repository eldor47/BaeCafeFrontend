import styled from 'styled-components';

const VisionStyle = styled.div`
  position: relative;
  background-color: #240259;
  width: 100%;
  min-height: calc(100vh - 132px);
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  .vision-footer {
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    color: #8fd988;
    text-transform: uppercase;
    max-width: 800px;
    text-align: center;
    font-style: italic;
  }
  .vision-title {
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 52px;
    text-transform: uppercase;
    color: #b6f486;
    padding-bottom: 24px;
  }
  .vision-main {
    position: relative;
    display: flex;
    padding-left: 0px;
    padding-right: 0px;

  }
  .vision-left {
    position: relative;
    display: block;
    padding-top: 0px;
    padding-bottom: 28px;
    width: 660px;
  }

  .vision-right {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-left: 40px;
  }

  .vision-parent-image-left {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  .vision-parent-image-right {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 38px;
  }
  .vision-image-top {
    width: 260px;
    :hover {
      cursor: pointer;
      outline: 4px solid #7e54d9;
      box-sizing: border-box;
      filter: drop-shadow(8px 8px 0px #8fd988);
    }
    background: #240259;
  }
  .vision-image-bottom {
    width: 260px;
    margin-top: 38px;
    :hover {
      cursor: pointer;
      outline: 4px solid #7e54d9;
      box-sizing: border-box;
      filter: drop-shadow(8px 8px 0px #8fd988);
    }
    background: #240259;
  }

  .vision-description {
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    color: #8fd988;
    text-transform: uppercase;
  }

  .vision-image-mobile {
    position: relative;
    display: none;
    width: 100%;
    
  }
  .vision-image-mobile-item {
    position: relative;
    display: block;
    width: calc(50% - 20px);
    padding-top: 40px;
  }
  .vision-image-space {
    width: 40px;
  }

  @media (max-width: 1440px) {
    .vision-parent-image-right {
      margin-left: 28px;
    }
    // .vision-image-top {
    //   width: 200px;
    // }
    .vision-image-bottom {
      // width: 200px;
      margin-top: 28px;
    }
  }

  @media screen and (max-width: 1320px) {
    .vision-title {
      font-size: 40px;
    }
  }

  @media (max-width: 1280px) {
    min-height: calc(100vh - 80px);
    .vision-image-mobile {
      display: flex;
      flex-wrap: wrap;
    }
    .vision-right {
      display: none;
    }
    .vision-left {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
  @media (max-width: 640px) {
    .vision-left {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    .vision-left {
      padding-left: 20px;
      padding-right: 20px;
    }
    .vision-image-space {
      width: 20px;
    }
    .vision-image-mobile-item {
      width: calc(50% - 10px);
    }
  }
`;

export default VisionStyle;
