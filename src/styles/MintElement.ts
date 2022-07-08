import styled from 'styled-components';

const MintStyle = styled.div`
  flex: 1;
  padding-top: 18px;
  padding-bottom: 50px;
  padding-right: 16px;
  padding-left: 16px;
  background: url('/image/story/pattern1.png') 90% 5% no-repeat,
    url('/image/story/pattern3.png') 88% 0% no-repeat,
    url('/image/story/pattern6.png') 12% 20% no-repeat,
    url('/image/story/pattern3.png') 12% 20% no-repeat,
    url('/image/story/pattern5.png') 89% 96% no-repeat,
    url('/image/story/pattern4.png') 90% 90% no-repeat;
  background-color: #ece5db;
  @media (min-width: 920px) {
    padding-left: calc(141 / 1440 * 100vw);
    padding-right: calc(141 / 1440 * 100vw);
  }
  .transaction {
    display: flex;
    font-size: 24px;
    margin-top: 15px;
    justify-content: center;
    .success {
      color: #27ae60;
    }
    .txid {
      margin-left: 5px;
    }
    .etherscan {
      display: flex;
      color: #101113;
      align-items: center;
      :hover {
        color: #018bbc;
      }
    }
    .opensea {
      margin-left: 15px;
      text-underline-offset: 2px;
      text-decoration-line: underline;
      color: #018bbc;
      :hover {
        opacity: 0.6;
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
  .hidden-btn {
    display: none;
  }
  .mint-bae {
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.02em;
    color: #adb5bd;
    // color: #018bbc;
  }
  .mint-title {
    font-weight: bold;
    font-size: 45px;
    line-height: 50px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    // color: #004775;
    color: #adb5bd;
    // text-shadow: 4px 4px 0px #f2bac6;
  }
  .mint-description {
    margin-top: 12px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.014em;
    // color: #000000;
    color: #adb5bd;
  }
  .mint-calculate {
    .mint-row {
      display: flex;
      padding-top: 32px;
      padding-bottom: 32px;
      border-bottom: 4px solid #f2bac6;
      align-items: center;
      @media (min-width: 768px) {
        max-height: 70px;
      }
      .mint-text {
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        display: flex;
        align-items: flex-end;
        letter-spacing: -0.02em;
        // color: #101113;
        color: #adb5bd;
        @media (max-width: 768px) {
          font-size: 22px;
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
          // color: #101113;
          color: #adb5bd;
          font-weight: normal;
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
          color: #adb5bd;
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
          color: #adb5bd;

          align-items: flex-end;
          text-align: right;
          @media (max-width: 768px) {
            font-size: 20px;
          }
          @media (max-width: 450px) {
            font-size: 16px;
          }
        }
        .loading-text:after {
          content: ' .';
          font-size: 40px;
          font-weight: bold;
          margin-left: 64px;
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
    .mint-footer {
      margin-top: 22px;
      width: max-content;
      .mint-btn-list {
        display: flex;
        .connect-btn {
          width: auto;
          cursor: pointer;
          margin-right: 32px;
          display: flex;
          font-size: 20px;
          height: 60px;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 18px 68px;
          background: #ffffff;
          // color: #00c5ce;
          border: 4px solid #00c5ce;
          box-sizing: border-box;
          box-shadow: 8px 8px 0px #f2bac6;
          border-radius: 99px;
          @media (max-width: 768px) {
            font-size: 16px;
            padding: 14px 60px;
          }
          @media (max-width: 470px) {
            font-size: 12px;
            padding: 14px 30px;
          }
          :hover {
            box-shadow: 8px 8px 0px #f2bac6;
            background-color: #00c5ce;
            color: #fff;
          }
          :disabled {
            background-color: #adb5bd;
            box-shadow: none;
            color: #fff;
            border: 1px solid #adb5bd;
          }
          :active {
            background-color: #018bbc;
            color: #fff;
            border: 4px solid #018bbc;
          }
        }
        .connected-btn {
          width: auto;
          cursor: pointer;
          margin-right: 32px;
          display: flex;
          font-size: 20px;
          height: 60px;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 18px 68px;
          background: transparent;
          color: #101113;
          border: 4px solid #adb5bd;
          box-sizing: border-box;
          border-radius: 99px;
          @media (max-width: 768px) {
            font-size: 16px;
            padding: 14px 60px;
          }
          @media (max-width: 470px) {
            font-size: 12px;
            padding: 14px 30px;
          }
          :hover {
            border: 4px solid #828282;
          }
          :active {
            border: 4px solid #101113;
          }
        }
        .mint-btn {
          display: flex;
          height: 60px;
          cursor: pointer;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 18px 18px;
          position: static;
          width: 140px;
          left: 376px;
          background: #004775;
          border-radius: 99px;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
          color: #ffffff;
          border: 4px solid #00c5ce;
          box-shadow: 8px 8px 0px #f2bac6;
          border: 0px;
          i {
            margin-right: 5px;
          }
          @media (max-width: 768px) {
            font-size: 16px;
            padding: 14px 48px;
          }
          :hover {
            box-shadow: 8px 8px 0px #f2bac6;
            background-color: #00c5ce;
            color: #fff;
          }
          :active {
            background-color: #018bbc;
            color: #fff;
            border: 4px solid #018bbc;
          }
          :disabled {
            background-color: #adb5bd;
            box-shadow: none;
          }
        }
      }
    }
  }
`;

export default MintStyle;
