import styled from 'styled-components';

const FooterStyle = styled.footer`
  padding: 8px 0px 8px 8px;
  background-color: #101113;
  @media (min-width: 920px) {
    padding-left: calc(156 / 1440 * 100vw);
    padding-right: calc(156 / 1440 * 100vw);
  }
  @media (min-width: 1440px) {
    padding-left: calc(200 / 1440 * 100vw);
    padding-right: calc(200 / 1440 * 100vw);
  }
  display: flex;
  .logo {
    flex: 1;
    display: flex;
    cursor: pointer;
    .logo-animation {
      height: 120px;
      width: 120px;
      background-image: url('/image/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
      :hover {
        opacity: 0.8;
        // animation: logogif 3s ease-in-out infinite alternate;
        // @keyframes logogif {
        //   100%,
        //   0% {
        //     background-image: url('/image/logo.svg');
        //   }
        //   16% {
        //     background-image: url('/image/logo2.svg');
        //   }
        //   50% {
        //     background-image: url('/image/logo.svg');
        //   }
        //   75% {
        //     background-image: url('/image/logo2.svg');
        //   }
        //   83% {
        //     background-image: url('/image/logo.svg');
        //   }
        //   91% {
        //     background-image: url('/image/logo2.svg');
        //   }
        // }
      }
    }
  }
  .social-list {
    align-self: center;
    display: flex;
    margin-right: 20px;
  }
  .twitter {
    height: 80px;
    width: 80px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    background-image: url('/image/footer/twitter.svg');
    background-position: center;
    @media(max-width: 768px){
      height: 60px;
      width: 60px;
    }
    :hover {
      animation: logotwitter 3s ease-in-out infinite alternate;
      @keyframes logotwitter {
        100%,
        0% {
          background-image: url('/image/footer/twitter.svg');
        }
        16% {
          background-image: url('/image/footer/twitter2.svg');
        }
        50% {
          background-image: url('/image/footer/twitter.svg');
        }
        75% {
          background-image: url('/image/footer/twitter2.svg');
        }
        83% {
          background-image: url('/image/footer/twitter.svg');
        }
        91% {
          background-image: url('/image/footer/twitter2.svg');
        }
      }
    }
  }
  .discord {
    height: 80px;
    width: 80px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    background-image: url('/image/footer/discord.svg');
    background-position: center;
    @media(max-width: 768px){
      height: 60px;
      width: 60px;
    }
    :hover {
      animation: logodiscord 3s ease-in-out infinite alternate;
      @keyframes logodiscord {
        100%,
        0% {
          background-image: url('/image/footer/discord.svg');
        }
        16% {
          background-image: url('/image/footer/discord2.svg');
        }
        50% {
          background-image: url('/image/footer/discord.svg');
        }
        75% {
          background-image: url('/image/footer/discord2.svg');
        }
        83% {
          background-image: url('/image/footer/discord.svg');
        }
        91% {
          background-image: url('/image/footer/discord2.svg');
        }
      }
    }
  }
  .opensea {
    height: 80px;
    width: 80px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    background-image: url('/image/footer/opensea.svg');
    background-repeat: no-repeat;
    background-position: center;
    @media(max-width: 768px){
      height: 60px;
      width: 60px;
    }
    :hover {
      animation: logoopensea 3s ease-in-out infinite alternate;
      @keyframes logoopensea {
        100%,
        0% {
          background-image: url('/image/footer/opensea.svg');
        }
        16% {
          background-image: url('/image/footer/opensea2.svg');
        }
        50% {
          background-image: url('/image/footer/opensea.svg');
        }
        75% {
          background-image: url('/image/footer/opensea2.svg');
        }
        83% {
          background-image: url('/image/footer/opensea.svg');
        }
        91% {
          background-image: url('/image/footer/opensea2.svg');
        }
      }
    }
  }
  .foundation {
    height: 80px;
    width: 80px;
    margin-left: 4px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    background-image: url('/image/footer/foundation.svg');
    background-repeat: no-repeat;
    background-position: center;
    @media(max-width: 768px){
      height: 60px;
      width: 80px;
      margin-left: 2px;
    }
    :hover {
      animation: logofoundation 3s ease-in-out infinite alternate;
      @keyframes logofoundation {
        100%,
        0% {
          background-image: url('/image/footer/foundation.svg');
        }
        16% {
          background-image: url('/image/footer/foundation2.svg');
        }
        50% {
          background-image: url('/image/footer/foundation.svg');
        }
        75% {
          background-image: url('/image/footer/foundation2.svg');
        }
        83% {
          background-image: url('/image/footer/foundation.svg');
        }
        91% {
          background-image: url('/image/footer/foundation2.svg');
        }
      }
    }
  }
`;
export default FooterStyle;
