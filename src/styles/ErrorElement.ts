import styled from 'styled-components';

const ErrorStyle = styled.div`
  text-align: center;
  .error-img {
    margin-top: 10%;
    display: flex;
    justify-content: center;
  }
  .error-title {
    font-size: 24px;
    line-height: 135%;
    align-items: center;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: center;
    color: ${({theme}) => theme.white};
  }
  .error-content {
    font-size: 18px;
    line-height: 140%;
    text-align: center;
    color: ${({theme}) => theme.white};
  }
  .error-btn {
    flex: 1;
    min-width: 200px;
    margin-top: 24px;
    max-height: 45px;
    font-size: 16px;
    text-align: center;
    border: 2px solid;
    border-color: ${({theme}) => theme.border};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 8px 8px;
    margin-right: 8px;
    background-color: ${({theme}) => theme.ethbutton};
    color: ${({theme}) => theme.fontSubColor};
  }
  .not-found {
    margin-top: 0px;
  }
  .error-number {
    justify-content: center;
    margin-top: 5%;
    .error-first {
      font-size: 142px;
      line-height: 135%;
      color: #fff;
      -webkit-text-fill-color: white; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
    .error-second {
      color: #fff;
      font-size: 142px;
      line-height: 135%;
      -webkit-text-fill-color: white; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
  }
`;

export default ErrorStyle;
