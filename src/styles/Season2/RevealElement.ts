import { CLOUDFRONT_IMG } from 'components/helper';
import styled from 'styled-components';

const GalleryStyle = styled.div`
  background-color: #240259;
  @media (max-width: 1000px) {
    padding-top: 40px;
  }
  .countdown{
    padding-left: 8px;
    margin-left: 12px;
    padding-right: 8px;
    @media (min-width: 920px) {
      padding-left: calc(130 / 1440 * 100vw);
      padding-right: calc(130 / 1440 * 100vw);
    }
  }
  @media(min-width: 1024px){
    bottom: 20px;
    position: relative;
  }
  bottom: -10px;
  .top {
    min-height: calc(100vh - 240px);
    padding-left: 8px;
    padding-right: 8px;
    @media (min-width: 920px) {
      padding-left: calc(130 / 1440 * 100vw);
      padding-right: calc(130 / 1440 * 100vw);
    }
  }
  .connect {
    display: flex;
    margin-left: 12px;
    .connnect-info {
      color: #ffffff;
      font-family: 'ArticulatCF-Normal';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      display: grid;
      align-self: center;
    }
    .error {
      color: #ff6b57;
      font-family: 'ArticulatCF-Normal';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      display: grid;
      align-self: center;
    }
  }
  .tweet-input {
    display: flex;
    margin-top: 18px;
    margin-left: 12px;
    width: 100%;
    .input {
      background-color: #240259;
      border: 2px solid #949494;
      padding-left: 12px;
      flex: 1;
      font-family: 'ArticulatCF-Normal';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #fff;
      @media (max-width: 640px) {
        font-size: 14px;
      }
    }
  }
  .tweet-info {
    margin-top: 12px;
    margin-left: 12px;
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    display: flex;
    .info-content {
      margin-left: 12px;
      a {
        color: #8fd988;
      }
    }
  }
  .option {
    margin-top: 8px;
    .option-title {
      font-family: 'ArticulatCF-Normal';
      font-style: normal;
      font-weight: 700;
      margin-left: 12px;
      font-size: 28px;
      line-height: 48px;
      display: flex;
      align-items: flex-end;
      letter-spacing: -0.02em;
      color: #8fd988;
    }
    .option-list {
      display: flex;
      flex-wrap: wrap;
      .option-item {
        margin-top: 24px;
        .select-item{
          width: 32px;
          height: 0;
          position: relative;
          top: -16px;
          .circle{
            height: 32px;
            width: 32px;
            border-radius: 99%;
            background-color: #5E10BC;
            display: flex;
            align-items: center;
            justify-content: center;
            .selected{
              width: 18px;
              height: 18px;
              border-radius: 9px;
              background-color: green;
            }
          }
        }
        img {
          margin-left: 12px;
          margin-right: 12px;
        }
        .selected-image{
          border: 4px solid #8FD988;
        }
        .description{
          font-family: 'ArticulatCF-Normal';
          font-style: normal;
          font-weight: 700;
          font-size: 22px;
          line-height: 20px;
          color: #8FD988;
          margin-left: 12px;
          margin-top: 16px;
        }
        :hover{
          opacity: 0.8;
        }
      }
    }
  }
  .footer {
    margin-top: 24px;
    padding: 12px 0px;
    border-top: 4px solid #8fd988;
    position: sticky;
    bottom: 0px;
    z-index: 999;
    background-color: #240259;
    display: flex;
    justify-content: flex-end;
    .message{
      flex: 1;
      margin-right: 8px;
      margin-left: 8px;
      @media (min-width: 920px) {
        margin-left: calc(138 / 1440 * 100vw);
      }
      font-size: 16px;
      .success-message{
        margin-top: 8px;
        font-family: 'ArticulatCF-Normal';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        color: #8fd988;    
      }
      .error-message{
        margin-top: 8px;
        font-family: 'ArticulatCF-Normal';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        color: #ff3b4b;    
      }
    }
  }
  .connect-btn.submit-btn {
    width: 160px;
    height: 45px;
    background-size: 160px 45px;
    margin-left: auto;
    margin-right: 0px;
    margin-left: 8px;
    font-size: 18px;
    margin-right: 8px;
    @media (min-width: 920px) {
      margin-right: calc(130 / 1440 * 100vw);
    }
  }
  .connect-btn {
    color: #240259;
    font-size: 20px;
    line-height: 24px;
    font-family: 'ArticulatCF-Normal';
    font-weight: 600;
    cursor: pointer;
    margin-right: 28px;
    display: flex;
    height: 60px;
    width: 290px;
    border: 0px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url('${CLOUDFRONT_IMG}/season2/button/connect-btn.png');
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 300px 60px;
    box-sizing: border-box;
    @media (max-width: 768px) {
      width: 200px;
      background-size: 200px 60px;
      font-size: 18px;
    }
    :hover {
      background-image: url('${CLOUDFRONT_IMG}/season2/button/connect-btn-hover.png');
    }
    :disabled {
      background-image: url('${CLOUDFRONT_IMG}/season2/button/connect-btn-disable.png');
    }
    :active {
      opacity: 0.8;
    }
    .number {
      border: 0.1em solid #240259;
      border-radius: 100%;
      height: 28px;
      width: 28px;
      text-align: center;
      margin-right: 10px;
    }
  }
  .connected-btn {
    font-family: 'ArticulatCF-Normal';
    cursor: pointer;
    margin-right: 28px;
    display: flex;
    font-size: 20px;
    height: 60px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 30px;
    background: transparent;
    color: #8fd988;
    border: 2px solid #8fd988;
    box-sizing: border-box;
    @media (max-width: 768px) {
      font-size: 16px;
      padding: 14px 60px;
    }
    @media (max-width: 470px) {
      font-size: 12px;
      padding: 14px 30px;
    }
    :hover {
      opacity: 0.8;
    }
    :active {
      opacity: 0.8;
    }
  }
  .comingson {
    margin-top: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .comingsoon-img {
      width: 100%;
      height: 400px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url('${CLOUDFRONT_IMG}/season2/comingsoon/commingsoon.png');
      @media (max-width: 420px) {
        margin-top: 0px;
        max-width: 400px;
      }
      @media (max-width: 920px) {
        margin-left: 8px;
        margin-right: 8px;
        background-size: contain;
        background-position: top;
      }
    }
  }
  .mekabae-line {
    margin-left: 12px;
    margin-right: 12px;
    border-bottom: 4px solid #8fd988;
  }
  .mekabae {
    margin-top: 24px;
    .mekabaes{
      display: flex;
      .icon{
        align-self: center;
        :first-child{
          margin-right: 12px;
        }
        :last-child{
          margin-left: 12px;
        }
      }
    }
    .mekabae-title {
      margin-left: 12px;
      font-family: 'ArticulatCF-Normal';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 24px;
      color: #ffffff;
    }
    .mekabae-list {
      display: flex;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
      padding-bottom: 18px;
      .mekabae-item {
        margin-right: 12px;
        margin-top: 18px;
        margin-left: 12px;
        .item-content {
          margin-top: 8px;
          font-family: 'ArticulatCF-Normal';
          font-style: normal;
          font-weight: 700;
          font-size: 22px;
          line-height: 20px;
          color: #8fd988;
        }
        :hover {
          opacity: 0.8;
        }
      }
      .mekabae-item.disable{
        opacity: 0.8;
      }
      .mekabae-item.active {
        img {
          outline: 4px solid #8fd988;
        }
      }
    }
  }
`;

export default GalleryStyle;
