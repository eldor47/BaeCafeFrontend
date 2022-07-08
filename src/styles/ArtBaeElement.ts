import styled from 'styled-components';

const ArtBaeStyle = styled.div`
  background-color: #ece5db;
  padding-top: 48px;
  @media (min-width: 920px) {
    padding-left: calc(100 / 1440 * 100vw);
    padding-right: calc(100 / 1440 * 100vw);
  }
  .artbae {
    font-weight: bold;
    font-size: 70px;
    line-height: 84px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #004775;
    text-shadow: 4px 4px 0px #f2bac6;
    text-align: center;
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
  .art-bae-des {
    margin-top: 16px;
    padding-bottom: 32px;
    text-align: center;
  }
  .art-collection {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .bae-img {
      margin-left: 24px;
      margin-right: 24px;
      margin-top: 32px;
      img {
        width: 260px;
        height: 343px;
        object-fit: cover;
        @media (max-width: 768px) {
          width: 343px;
          height: 343px;
        }
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
    .art-title {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #101113;
    }
    .art-content {
      font-weight: bold;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.014em;
      color: #004775;
    }
  }
  .art-selection {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .art-item {
      margin-top: 32px;
      margin-left: 24px;
      margin-right: 24px;
      .art-title {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #101113;
      }
      .art-content {
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.014em;
        color: #004775;
      }
      .art-img {
        width: 500px;
        height: 580px;
        object-fit: cover;
        @media (max-width: 768px) {
          width: 343px;
          height: 343px;
        }
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
  .my-gallery-class {
    margin: 0 auto;
    max-width: 100%;
    padding-bottom: 20px;
    overflow: hidden;
    right: 20px;
    li {
      min-height: 210px;
    }
    @media (max-width: 420px) {
      right: 0px;
      margin: 0 0;
    }
  }
  .image-element-class {
    margin-top: 32px;
    padding-left: 18x !important;
    margin-right: 18px;
    width: 260px;
    @media (max-width: 768px) {
      width: 343px;
    }
    img {
      width: 260px;
      height: auto;
      @media (max-width: 768px) {
        width: 343px;
        height: auto;
      }
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
    .art-title {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #101113;
    }
    .art-content {
      font-weight: bold;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.014em;
      color: #004775;
    }
  }
  .more-list {
    @media (max-width: 768px) {
      margin-left: 18px;
      margin-right: 18px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 72px;
    margin-top: 32px;
    .separateLine {
      background: #f2bac6;
      border-radius: 2px;
      height: 4px;
      width: 35%;
    }
    .showmore {
      min-width: 260px;
      justify-content: center;
      align-items: center;
      padding: 28px 48px;
      background: #ffffff;
      border: 4px solid #00c5ce;
      box-sizing: border-box;
      box-shadow: 8px 8px 0px #f2bac6;
      border-radius: 99px;
      font-weight: bold;
      font-size: 28px;
      line-height: 24px;
      color: #00c5ce;
      margin-left: 32px;
      margin-right: 32px;
      cursor: pointer;
      :hover {
        cursor: pointer;
        background-color: #00c5ce;
        color: #fff;
      }
      :active {
        background-color: #018bbc;
        border-color: #018bbc;
      }
    }
  }
`;

export default ArtBaeStyle;
