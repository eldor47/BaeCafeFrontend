import { CLOUDFRONT_IMG } from 'components/helper';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    outline: none
  }
  .season1{
    overflow: auto !important;
    scrollbar-color: #f2d7b2 transparent;
    scrollbar-width: thin;
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 8px;
    }
  }
  .season2{
    background: #091833;
    overflow: auto !important;
    scrollbar-width: thin;
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 8px;
    }
  }
  body {
    min-width: 425px;
    font-size: calc(14px + .5vw);
    font-family: 'ArticulatCF-Normal', sans-serif;
    line-height: 1.7;
    overscroll-behavior: none;
    :after{
      content: 
        url('${CLOUDFRONT_IMG}/season2/button/connect-btn.png'),
        url('${CLOUDFRONT_IMG}/season2/button/connect-btn-disable.png'),
        url('${CLOUDFRONT_IMG}/season2/button/connect-btn-hover.png');
    }
  }
  .fix-height{
    height: 100vh;
    overflow: hidden !important;
    // position: fixed;
  }
  .lock-top{
    right: 0;
    left: 0;
    position: fixed;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none
  }
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  .endmodal{
    position: absolute;
    width: 400px;
    height: max-content;
    border-radius: 8px;
    top: 20%;
    right: calc(calc(100% - 400px) / 2);
    opacity: 1 !important;
    background-color: #fff;
  }
  .Modal {
    position: absolute;
    height: max-content;
    border-radius: 8px;
    top: 20%;
    right: calc(calc(100% - 400px) / 2);
    opacity: 1 !important;
    background-color: #fff;
  }
  .walletconnect-modal__base{
    max-width: 450px !important;
    top: 55% !important;
  }
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .wallet-modal{
    position: absolute;
    height: max-content;
    border-radius: 8px;
    top: 20%;
    right: calc(calc(100% - 445px)/2);
    opacity: 1 !important;
  }
  .quickview-modal{
    position: absolute;
    min-width: 400px;
    width: 100%;
    height: max-content;
    border-radius: 8px;
    opacity: 1 !important;
  }
  .wallet-overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0,0,0,0.3)
  }
  .countdown-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(255, 255, 255, 0.8);
  }
  .coundown-modal {
    min-width: 400px;
    border-radius: 8px;
    display: flex;
    height: 100%;
    justify-content: center;
    opacity: 1 !important;
    background-color: transparent;
  }
  .countdown{
    display: flex;
    margin-bottom: 20px;
    flex-wrap: wrap;
    align-items: center;
    @media(max-width: 1000px){
      margin-top: 15px;
    }
    .mint-text{
      font-size: 24px;
      font-weight: bold;
      color: #00C5CE;
      margin-right: 20px;
    }
    .timer-wrapper{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      min-width: 320px;
      justify-content: space-between;
      text-align: center;
      .time{
        font-size: 16px;
        line-height: 1;
      }
      .second{
        font-size: 12px;
      }
    }
    .timer-wrapper.four{
      min-width: 320px;
    }
    .timer-wrapper.three{
      min-width: 240px;
    }
    .timer-wrapper.two{
      min-width: 160px;
    }
    .timer-wrapper.one{
      min-width: 80px;
    }
    .timer-wrapper.two-element{
    }
  }
  .fade-enter.img-btn {
    opacity: 0;
  }
  .fade-enter-active.img-btn {
    opacity: 1;
  }
  .fade-exit.img-btn {
    opacity: 1;
  }
  .fade-exit-active.img-btn {
    opacity: 0;
  }
  .img-btn {
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
  }
`;
//45 38
export default GlobalStyle;
