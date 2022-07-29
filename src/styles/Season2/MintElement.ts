import { CLOUDFRONT_IMG } from 'components/helper';
import styled from 'styled-components';

const MintStyle = styled.div<{height: number}>`
  flex: 1;
  padding-right: 16px;
  padding-left: 16px;
  min-height: calc(100vh - 132px);
  @media (min-width: 920px) {
    padding-left: calc(61 / 1440 * 100vw);
    padding-right: calc(61 / 1440 * 100vw);
  }
  @media(max-width: 1000px){
    min-height: ${({height}) => height - 80}px;
   }
   
   .sold-out {
      pointer-events: none;
      position: relative;
      width: fit-content;
      left: -20vw;
      top: 30vh;
      height: 0px;
      opacity: 0.6;
      z-index: 1;
      float: right;
      @media (max-width: 818px) {
        bottom: 35px;
      }
      .credit-title {
        margin-left: 10px;
        cursor: pointer;
        font-size: 80px;
        font-weight: 700;
        border-radius: 4px;
        border: 10px solid red;
        padding: 0px 10px;
        color: red;
        transform: rotate(-45deg);
        @media (max-width: 818px) {
          margin-left: 5px;
          font-size: 50px;
        }
      }
  }
  .transaction {
    display: flex;
    font-size: 24px;
    margin-top: 15px;
    .success {
      align-self: center;
      padding-top: 2px;
      font-family: 'ArticulatCF-Normal';
      color: #8FD988;
      font-weight: 700;
      margin-right: 8px;
    }
    .transactions{
      display: flex;
      flex: 1;
      flex-wrap: wrap;
    }
    .txid {
      color: #fff;
      margin-left: 5px;
      :hover {
        opacity: 0.8;
      }
    }
    .etherscan {
      display: flex;
      font-family: 'ArticulatCF-Normal';
      color: #101113;
      align-items: center;
      padding-top: 2px;
      :hover {
        color: #018bbc;
      }
    }
    .opensea {
      margin-left: 15px;
      text-underline-offset: 2px;
      text-decoration-line: underline;
      color: #8FD988;
      :hover {
        opacity: 0.8;
      }
      svg {
        margin-left: -4px;
      }
    }
  }
  .error-message {
    color: #b75a5f;
    font-weight: bold;
    font-size: 15px;
    text-align: left;
    margin-top: 20px;
  }
  .info-message {
    color: #00C5CE;
    font-weight: bold;
    font-size: 15px;
    text-align: left;
    margin-top: 10px;
  }
  .hidden-btn {
    display: none;
  }
  .mint-bae {
    font-weight: bold;
    font-family: 'ArticulatCF-Normal';
    font-size: 36px;
    line-height: 38px;    
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.02em;
    color: #b6f486;
  }
  .mint-title {
    font-weight: bold;
    font-family: 'ArticulatCF-Normal';
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #b6f486;
    @media(max-width: 1110px){
      margin-top: 20px;
    }
  }
  .mint-description {
    margin-top: 8px;
    font-weight: 400;
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -0.014em;
    display: flex;
    align-items: flex-end;
    color: #b6f486;
  }
  .mint-calculate {
    .mint-detail{
      .detail-row{
        display: flex;
        margin-left: 32px;
        font-size: 24px;
        line-height: 32px;
        font-family: 'ArticulatCF-Normal';
        color: #b6f486;
        width: 400px;
        @media(max-width: 768px){
          margin-left: 5px;
          font-size: 18px;
        }
        .detail-left{
        }
        .detail-right{
          flex: 1;
          text-align: right;
          padding-right: 15px;
          @media(max-width: 768px){
            padding-right: 100px;
          }
        }
      }
    }
    .mint-row.payable{
      border-top: 4px solid #B6F486;
      border-bottom: 4px solid #B6F486;
      margin-top: 24px;
      padding: 36px 0px;
    }
    .mint-row {
      display: flex;
      padding-top: 10px;
      padding-bottom: 10px;
      align-items: center;
      @media (min-width: 768px) {
        max-height: 70px;
      }
      .mint-text {
        font-family: 'ArticulatCF-Normal';
        font-weight: bold;
        font-size: 30px;
        line-height: 36px;
        display: flex;
        align-items: flex-end;
        letter-spacing: -0.02em;
        color: #b6f486;
        @media (max-width: 768px) {
          font-size: 24px;
        }
      }
      .mint-subrow {
        margin-left: 120px;
        display: flex;
        align-items: center;
        @media (max-width: 768px) {
          margin-left: 60px;
        }
        .mint-plus-btn,
        .mint-add-btn {
          color: #b6f486;
          font-weight: normal;
          font-family: 'ArticulatCF-Normal';
          cursor: pointer;
          background-color: transparent;
          border: none;
          display: contents;
          transform: matrix(0, -1, -1, 0, 0, 0);
          :hover {
            color: #00c5ce;
          }
          :active {
            color: #018bbc;
          }
        }
        .mint-plus-btn.hash-code {
          height: 0px;
        }
        .mint-total {
          color: #b6f486;
          margin-left: 40px;
          margin-right: 40px;
          font-weight: 500;
          font-size: 22px;
          line-height: 32px;
          display: flex;
          align-items: flex-end;
          text-align: right;
          @media (max-width: 768px) {
            font-size: 20px;
          }
        }
        .mint-payable {
          margin-left: 64px;
          font-weight: 500;
          font-size: 20px;
          line-height: 32px;
          display: flex;
          color: #b6f486;
          font-family: 'ArticulatCF-Normal';
          align-items: flex-end;
          text-align: right;
          @media (max-width: 768px) {
            font-size: 20px;
            margin-left: 0px;
            width: auto;
          }
          @media (max-width: 450px) {
            font-size: 16px;
          }
        }
        .mint-connect-txt {
          margin-left: 64px;
          font-weight: 300;
          font-size: 20px;
          line-height: 24px;
          display: flex;
          align-items: flex-end;
          text-align: right;
          @media (max-width: 768px) {
            font-size: 18px;
          }
        }
      }
    }
    .loading-text:after {
      content: ' .';
      font-size: 40px;
      font-weight: bold;
      animation: dots 2s steps(5, end) infinite;
    }
    @keyframes dots {
      0%,
      20% {
        color: rgb(0, 71, 117);
        text-shadow: 0.25em 0 0 rgb(0, 71, 117), 0.5em 0 0 rgb(0, 71, 117);
      }
      40% {
        color: #20a7ff;
        text-shadow: 0.25em 0 0 rgb(0, 71, 117), 0.5em 0 0 rgb(0, 71, 117);
      }
      60% {
        text-shadow: 0.25em 0 0 #20a7ff, 0.5em 0 0 rgb(0, 71, 117);
      }
      80%,
      100% {
        text-shadow: 0.25em 0 0 #20a7ff, 0.5em 0 0 #20a7ff;
      }
    }
    .mint-footer {
      margin-top: 24px;
      .mint-btn-list {
        display: flex;
        .connect-btn {
          color: #240259;
          font-size: 28px;
          font-family: 'ArticulatCF-Normal';
          font-weight: 600;
          cursor: pointer;
          margin-right: 32px;
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
        }
        .connected-btn {
          font-family: 'ArticulatCF-Normal';
          cursor: pointer;
          margin-right: 32px;
          display: flex;
          font-size: 20px;
          height: 60px;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 18px 60px;
          background: transparent;
          color: #8FD988;
          border: 2px solid #8FD988;
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
        .mint-btn {
          color: #240259;
          font-size: 28px;
          font-family: 'ArticulatCF-Normal';
          font-weight: 600;
          cursor: pointer;
          cursor: pointer;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          position: static;
          width: 140px;
          line-height: 24px;
          text-align: center;
          background-image: url('${CLOUDFRONT_IMG}/season2/button/connect-btn.png');
          background-color: transparent;
          background-repeat: no-repeat;
          background-size: 300px 60px;
          background-position: right;
          border: 0px;
          i {
            margin-right: 5px;
          }
          @media (max-width: 768px) {
            font-size: 18px;
          }
          :hover {
            background-image: url('${CLOUDFRONT_IMG}/season2/button/connect-btn-hover.png');
          }
          :disabled {
            background-image: url('${CLOUDFRONT_IMG}/season2/button/connect-btn-disable.png');
          }
          :active {
          }
        }
      }
    }
  }
`;

export default MintStyle;
