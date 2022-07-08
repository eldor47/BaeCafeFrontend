import styled from 'styled-components';

const BaeFriends = styled.div`
  padding-top: 48px;
  padding-bottom: 100px;
  background: url('/image/story/pattern1.png') 90% 20% no-repeat,
    url('/image/story/pattern3.png') 88% 18% no-repeat,
    url('/image/story/pattern6.png') 10% 80% no-repeat,
    url('/image/story/pattern3.png') 10% 78% no-repeat,
    url('/image/story/pattern5.png') 89% 96% no-repeat,
    url('/image/story/pattern4.png') 90% 90% no-repeat;
  background-color: #cae6ea;
  @media (min-width: 920px) {
    padding-left: calc(100 / 1440 * 100vw);
    padding-right: calc(100 / 1440 * 100vw);
  }
  .baefriends {
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
  .bae-friends-des {
    margin-top: 16px;
    margin-bottom: 32px;
    text-align: center;
  }
  .bae-art {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .bae-item {
      margin-right: 48px;
      margin-top: 30px;
      max-width: 368px;
      @media (max-width: 768px) {
        margin-left: 8px;
        margin-right: 8px;
      }
      img {
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
      :last-child {
        margin-right: 0px;
      }
      .bae-name {
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.02em;
        color: #004775;
      }
      .bae-description {
        font-size: 18px;
        line-height: 26px;
        color: #101113;
        margin-top: 4px;
        a{
          color: #0000EE;
          :hover{
            opacity: 0.6;
          }
        }
      }
      .bae-twitter {
        margin-top: 18px;
        .twitter {
          display: flex;
          width: 48px;
          height: 48px;
          cursor: pointer;
          background-image: url('/image/wlc/twitter.svg');
          background-repeat: no-repeat;
          :hover {
            background-image: url('/image/wlc/twitter2.svg');
          }
          :active {
            background-image: url('/image/wlc/twitter3.svg');
          }
        }
      }
    }
  }
`;

export default BaeFriends;
