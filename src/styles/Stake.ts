import styled from 'styled-components';

const StakeStyle = styled.div`
  padding-top: 64px;
  padding-bottom: 100px;
  background: url('/image/story/pattern1.png') 80% 20% no-repeat,
    url('/image/story/pattern3.png') 78% 18% no-repeat,
    url('/image/story/pattern2.png') 20% 98% no-repeat,
    url('/image/story/pattern4.png') 80% 50% no-repeat,
    url('/image/story/pattern5.png') 79% 49% no-repeat,
    url('/image/story/pattern6.png') 10% 30% no-repeat,
    url('/image/story/pattern3.png') 10% 32% no-repeat,
    url('/image/story/pattern6.png') 85% 80% no-repeat,
    url('/image/story/pattern3.png') 85% 85% no-repeat;
  background-color: #cae6ea;
  .logo {
    display: flex;
    justify-content: center;
    .logo-animation {
      height: 160px;
      width: 160px;
      cursor: pointer;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url('/image/logo.png');
      :hover {
        opacity: 0.8;
      }
    }
  }

  .stake-top {
    display: flex;
    justify-content: spaced-between;
    width: 100%;
    padding: 20px;
  }

  
  .stake-bottom {
    display: flex;
    justify-content: spaced-between;
    width: 100%;
    padding: 20px;
  }


  .stake-item {
    position: relative;
    height: 300px;
    border: 1px solid #004775;
    text-align: center;
    background: rgba(255,255,255, 0.3);
    border-radius: 5px;
    width: 100%;
    margin: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .stake-bottom > .stake-item {
    height: 500px;
  }

  .stake-item > h3 {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
   }

   .claim {
    width: 100%;
    position: absolute;
    right:    0;
    bottom:   0;
    border: none;
    height: 40px;
    color: white;
    background-color: #004775;
   }

   .image-container {
    display: flex;
    justify-content: spaced-evenly;
    flex-wrap: wrap;
    padding: 20px;
    width: 100%;
   }

   .bae-img {
    height: 150px;
    border-radius: 13px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 34px 35px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    margin: 10px;
   }


  .baestory {
    font-weight: bold;
    font-size: 70px;
    line-height: 84px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #004775;
    text-shadow: 4px 4px 0px #f2bac6;
    text-align: center;
    margin-top: 48px;
    @media (max-width: 768px) {
      font-size: 54px;
      line-height: 60px;
    }
  }
  .separate {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    @media (max-width: 1020px) {
      width: 100%;
    }
  }
  .content {
    margin-top: 34px;
    @media (min-width: 920px) {
      padding-left: calc(250 / 1440 * 100vw);
      padding-right: calc(250 / 1440 * 100vw);
    }
    padding-left: 16px;
    padding-right: 16px;
    .content-1 {
      font-size: 24px;
      line-height: 45px;
      text-align: center;
      letter-spacing: -0.014em;
      color: #101113;
      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 35px;
      }
    }
    .content-2 {
      font-size: 24px;
      line-height: 45px;
      text-align: center;
      letter-spacing: -0.014em;
      color: #101113;
      margin-top: 32px;
      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 35px;
      }
    }
    .content-3 {
      margin-top: 32px;
      font-size: 24px;
      line-height: 45px;
      text-align: center;
      letter-spacing: -0.014em;
      color: #101113;
      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 35px;
      }
    }
    .content-4 {
      margin-top: 32px;
      font-size: 24px;
      line-height: 45px;
      text-align: center;
      letter-spacing: -0.014em;
      color: #101113;
      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 35px;
      }
    }
    .content-5 {
      margin-top: 32px;
      font-size: 24px;
      line-height: 45px;
      text-align: center;
      letter-spacing: -0.014em;
      color: #101113;
      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 35px;
      }
    }
  }
  .bae-image {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 920px) {
      padding-left: calc(250 / 1440 * 100vw);
      padding-right: calc(250 / 1440 * 100vw);
    }
    .bae-img {
      margin: 24px;
      @media (max-width: 768px) {
        margin: 8px;
      }
      img {
        width: 414px;
        height: 486px;
        object-fit: cover;
        :hover {
          cursor: pointer;
          outline: 4px solid #004775;
          box-sizing: border-box;
          filter: drop-shadow(8px 8px 0px #f2bac6);
        }
        :active {
          outline: 4px solid #004775;
          box-sizing: border-box;
          filter: drop-shadow(4px 4px 0px #f2bac6);
        }
      }
    }
  }
`;

export default StakeStyle;
