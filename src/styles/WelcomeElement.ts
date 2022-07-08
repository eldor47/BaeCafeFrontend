import { CLOUDFRONT_IMG } from 'components/helper';
import styled from 'styled-components';

const Welcome = styled.div`
  display: flex;
  min-height: 784px;
  background: url('/image/story/pattern4.png') 13% 15% no-repeat,
    url('/image/story/pattern5.png') 12% 12% no-repeat,
    url('/image/background/pattern7.png') 10% 85% no-repeat,
    url('/image/background/pattern8.png') 5% 90% no-repeat,
    url('/image/background/pattern9.png') 55% 10% no-repeat,
    url('/image/background/pattern9.png') 40% 90% no-repeat;
  @media (min-width: 920px) {
    padding-left: calc(100 / 1440 * 100vw);
  }
  @media (min-width: 1440px) {
    padding-left: calc(180 / 1440 * 100vw);
  }
  @media (max-width: 768px) {
    background: url('/image/story/pattern4.png') 6% 12% no-repeat,
      url('/image/story/pattern5.png') 5% 7% no-repeat,
      url('/image/background/pattern7.png') 6% 55% no-repeat,
      url('/image/background/pattern8.png') -20% 55% no-repeat,
      url('/image/background/pattern9.png') 20% 55% no-repeat;
    background-color: #ece5db;
  }
  padding-left: 16px;
  background-color: #ece5db;
  .wlc {
    display: flex;
    flex-wrap: wrap;
    .wlc-content {
      margin-right: 30px;
      @media(max-width: 568px){
        margin-right: 0px;
      }
    }
  }
  .hibaes {
    font-weight: bold;
    margin-top: 84px;
    font-size: 70px;
    line-height: 84px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #004775;
    text-shadow: 4px 4px 0px #f2bac6;
    background-repeat: no-repeat;
    background-size: 130px 100px;
    @media (max-width: 768px) {
      font-size: 54px;
      line-height: 60px;
      margin-top: 60px;
    }
  }
  .introduce {
    margin-top: 32px;
    .introduce-txt {
      font-size: 24px;
      line-height: 38px;
      letter-spacing: -0.014em;
      color: #101113;
      :first-child {
        margin-bottom: 40px;
      }
      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 35px;
      }
    }
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
          background-image: url('/image/wlc/discord2.svg');
        }
        :active {
          background-image: url('/image/wlc/discord3.svg');
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
          background-image: url('/image/wlc/twitter2.svg');
        }
        :active {
          background-image: url('/image/wlc/twitter3.svg');
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
          background-image: url('/image/wlc/opensea2.svg');
        }
        :active {
          background-image: url('/image/wlc/opensea3.svg');
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
          background-image: url('/image/wlc/foundation2.svg');
        }
        :active {
          background-image: url('/image/wlc/foundation3.svg');
        }
      }
    }
  }
  .image-box {
    flex: 1;
    display: flex;
    margin-left: calc(60 / 1440 * 100vw);
    margin-right: auto;
    width: calc(100vw - 480px);
    min-height: 480px;
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -moz-animation: fadein 2s; /* Firefox */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera */
    animation: fadein 2s;
    animation-delay: 1s;
    animation-fill-mode: both;

    @keyframes fadein {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
    @media (max-width: 920px) {
      margin-left: 0px;
    }
    @media (max-width: 1024px) {
      min-width: 400px;
      background-image: url('${CLOUDFRONT_IMG}/image/wlc/baebg.png');
      background-repeat: no-repeat;
      background-position: 10% 0%;
      background-size: 665px 665px
    }
    @media (max-width: 768px) {
      background-position: 10% -20%;
    }
    background: url('${CLOUDFRONT_IMG}/image/wlc/baebg.png') -20% -20%
      no-repeat;
    .image-slide.safari {
      background-image: url('${CLOUDFRONT_IMG}/image/wlc/Hana.png'),
        url('${CLOUDFRONT_IMG}/image/wlc/bae1.png');
    }
    .image-slide {
      height: auto;
      width: 100%;
      @media (max-width: 1024px) {
        width: 100%;
        height: auto;
        background-size: cover;
      }
      background-repeat: no-repeat;
      -webkit-animation: fade 32s infinite;
      animation: fade 32s infinite;
      @media (max-width: 1024px) {
        animation: fade2 20s infinite;
      }
      @keyframes fade {
        100%,
        0% {
          background-image: url('${CLOUDFRONT_IMG}/image/wlc/Hana.png'),
            url('${CLOUDFRONT_IMG}/image/wlc/bae1.png');
          background-size: auto, 965px 965px;
        }
        20% {
          background-image: url('${CLOUDFRONT_IMG}/image/wlc/tanline.png'),
            url('${CLOUDFRONT_IMG}/image/wlc/bae2.png');
        }
        40% {
          background-image: url('${CLOUDFRONT_IMG}/image/wlc/maid.png'),
            url('${CLOUDFRONT_IMG}/image/wlc/bae3.png');
        }
        60% {
          background-image: url('${CLOUDFRONT_IMG}/image/wlc/Hana.png'),
            url('${CLOUDFRONT_IMG}/image/wlc/bae1.png');
        }
        80% {
          background-image: url('${CLOUDFRONT_IMG}/image/wlc/tanline.png'),
            url('${CLOUDFRONT_IMG}/image/wlc/bae2.png');
        }
      }
      @keyframes fade2 {
        100%,
        0% {
          background-image: url('${CLOUDFRONT_IMG}/image/wlc/Hana.png'),
            url('${CLOUDFRONT_IMG}/image/wlc/bae1.png');
          background-size: 483px 483px, 665px 665px;
        }
        20% {
          background-image: url('${CLOUDFRONT_IMG}/image/wlc/tanline.png'),
            url('${CLOUDFRONT_IMG}/image/wlc/bae2.png');
          background-size: 483px 483px, 665px 665px;
        }
        40% {
          background-image: url('${CLOUDFRONT_IMG}/image/wlc/maid.png'),
            url('${CLOUDFRONT_IMG}/image/wlc/bae3.png');
          background-size: 483px 483px, 665px 665px;
        }
        60% {
          background-image: url('${CLOUDFRONT_IMG}/image/wlc/Hana.png'),
            url('${CLOUDFRONT_IMG}/image/wlc/BG.png');
          background-size: 483px 483px, 665px 665px;
        }
        80% {
          background-image: url('${CLOUDFRONT_IMG}/image/wlc/tanline.png'),
            url('${CLOUDFRONT_IMG}/image/wlc/bae2.png');
          background-size: 483px 483px, 665px 665px;
        }
      }
    }
  }
`;

export default Welcome;
