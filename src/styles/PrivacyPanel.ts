import styled from 'styled-components';

import {ThemeType} from './theme';

const PrivacyPanel = styled.div<{theme: ThemeType}>`
  > h5 {
    margin-top: 10px;

    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;

    color: ${({theme: {fontSubColor}}) => fontSubColor};
  }
  .message {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
  }
  .wallet {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      margin-left: 10px;
    }
  }
  .notice {
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
  }
  .signature {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    color: #fff;
    padding: 4px 25px;
    font-size: 16px;
    border-radius: 15px;
    background-color: ${({theme: {maincolor}}) => maincolor};
  }
  .verify {
    font-family: 'Consolas';
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    border-radius: 10px;
    height: 45px;
    color: #fff;
    padding: 4px 25px;
    font-size: 16px;
    align-items: center;
    border: 2px solid #8fd988;
    background-color: transparent;
    span {
      margin-left: 5px;
    }
  }
  > ul {
    margin-top: 10px;

    li {
      + li {
        margin-top: 10px;
      }
      display: flex;

      border-bottom: 1px solid ${({theme}) => theme.border};
      padding-bottom: 10px;

      svg {
        path {
          fill: ${({theme: {fontSubColor}}) => fontSubColor};
        }
      }

      > div:first-child {
        width: 18px;
        height: 18px;
        display: flex;
        margin-right: 6px;
        align-items: center;
      }

      > div:last-child {
        flex: 1;
        > h4 {
          font-style: normal;
          margin-left: 4px;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;

          color: ${({theme: {fontSubColor}}) => fontSubColor};
        }

        > p {
          font-style: normal;
          font-weight: normal;
          font-size: 11px;
          line-height: 17px;

          color: ${({theme: {fontSubColor}}) => fontSubColor};
        }
      }
    }
  }

  > a {
    margin-top: 10px;

    display: block;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: ${({theme: {maincolor}}) => maincolor};
  }
`;

export default PrivacyPanel;
