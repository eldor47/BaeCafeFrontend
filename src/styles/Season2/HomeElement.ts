import styled from 'styled-components';

const HomeStyle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;

  -webkit-animation: fadein 1s; /* Safari and Chrome */
  -moz-animation: fadein 1s; /* Firefox */
  -ms-animation: fadein 1s; /* Internet Explorer */
  -o-animation: fadein 1s; /* Opera */
  animation: fadein 1s;
  animation-delay: 0.5s;
  animation-fill-mode: both;

  .home-left-parent {
    width: 55%;
  }
  .home-left {
    position: relative;
    display: block;
    width: 100%;
    padding-left: 88px;
    padding-right: 0px;
    z-index: 1;
  }
  .home-left-title {
    font-family: 'Consolas';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 52px;
    color: #8fd988;
    text-transform: uppercase;
  }
  .home-left-description {
    font-family: 'Consolas';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    color: #8fd988;
    text-transform: uppercase;
  }
  .home-left-line {
    margin-top: 62px;
    background-color: #8fd988;
    height: 1px;
    width: 100%;
    margin-bottom: 32px;
  }
  .home-left-list-images {
    position: relative;
    display: block;
    padding-bottom: 24px;
    width: 95%;
  }
  .home-left-images {
    margin-top: 24px;
    width: 100%;
  }
  .home-left-video {
    margin-top: 24px;
    width: 100%;
    height: 25vw;
    border-color: #8FD988;
  }
  .home-welcome-description-big {
    display: block;
  }
  .home-welcome-description-small {
    display: none;
  }

  .home-right {
    position: relative;
    display: block;
    flex: 1;
  }
  .home-right-image-parent {
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 49.5%;
    display: flex;
    align-items: center;
    height: 120px;
  }
  .home-right-image-main {
    position: absolute;
    display: block;
    bottom: 0px;
    left: 15%;
    height: calc(100vh - 132px);
    object-fit: contain;
  }

  .home-right-image-parent-mobile {
    position: relative;
    display: none;
    width: 100%;
  }
  .home-right-image-detail-mobile {
    position: relative;
    display: block;
    width: 100%;
  }

  .home-right-image-sub-mobile {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0px;
    bottom: 0px;
    width: 100%;
  }

  .home-right-sub {
    margin-top: 0px;
    position: fixed;
    display: block;
    width: calc(100vh - 132px);
    height: calc(100vh - 132px);
  }
  .home-right-image {
    position: relative;
    margin-bottom: 0px;
    margin-right: 0px;
    margin-left: auto;
    height: calc(100vh - 132px);
    display: block;
  }
  .home-right-action {
    position: relative;
    display: block;
    margin-left: 30%;
    width: 400px;
    z-index: 1;
  }
  .home-right-action-mainFrame {
    position: relative;
    display: block;
    margin-top: 0px;
    margin-left: 0px;
    width: 100%;
  }
  .home-right-opensae {
    position: absolute;
    display: block;
    width: 242px;
    height: 70%;
    top: 13px;
    right: 13px;
  }
  .home-right-checkout-parent {
    position: absolute;
    top: 0px;
    left: 24px;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 2;
  }
  .home-right-checkout-text {
    font-family: 'Consolas';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #000000;
  }
  .home-right-opensea-parent {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .home-right-opensea-sub {
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .home-right-opensea-text {
    font-family: 'Consolas';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #8fd988;
    margin: auto;
    :hover {
      opacity: 0.6;
    }
  }
  .home-right-opensea-arrows {
    height: 40px;
  }

  .social {
    margin-top: 32px;
    display: flex;
    @media (max-width: 768px) {
      margin-bottom: 60px;
    }
    .social-item {
      margin-right: 48px;
      :last-child {
        margin-right: 0px;
      }
      .discord {
        width: 52px;
        height: 48px;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        background-image: url('/image/wlc/discord.svg');
        background-repeat: no-repeat;
        :hover {
          background-image: url('/image/wlc/discord2-new.svg');
        }
        :active {
          background-image: url('/image/wlc/discord3-new.svg');
        }
      }
      .twitter {
        width: 48px;
        height: 48px;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        background-image: url('/image/wlc/twitter.svg');
        background-repeat: no-repeat;
        :hover {
          background-image: url('/image/wlc/twitter2-new.svg');
        }
        :active {
          background-image: url('/image/wlc/twitter3-new.svg');
        }
      }
      .opensea {
        width: 52px;
        height: 48px;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        background-image: url('/image/wlc/opensea.svg');
        background-repeat: no-repeat;
        :hover {
          background-image: url('/image/wlc/opensea2-new.svg');
        }
        :active {
          background-image: url('/image/wlc/opensea3-new.svg');
        }
      }
      .foundation {
        width: 68px;
        height: 48px;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        background-image: url('/image/wlc/foundation.svg');
        background-repeat: no-repeat;
        :hover {
          background-image: url('/image/wlc/foundation2-new.svg');
        }
        :active {
          background-image: url('/image/wlc/foundation3-new.svg');
        }
      }
    }
  }
  @media (max-width: 1385px) {
    .home-right-action {
      margin-left: 25%;
    }
  }
  @media (max-width: 1110px) {
    .home-right-image-parent {
      display: none;
    }
    .home-left-parent {
      width: 100%;
    }
    .home-left-list-images {
      width: 100%;
    }
    .home-left {
      padding-left: 50px;
      padding-right: 50px;
    }
    .home-right-image-parent-mobile {
      display: block;
    }
    .home-right-action {
      margin-left: 0px;
    }
    .home-left-video {
      height: 50vw;
    }
  }
  @media (max-width: 1000px) {
    .home-left {
      padding-top: 30px;
    }
  }

  @media (max-width: 500px) {
    .home-left {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media (max-width: 1420px) {
    .home-welcome-description-big {
      display: none;
    }
    .home-welcome-description-small {
      display: block;
    }
  }
`;

export default HomeStyle;