import styled from 'styled-components';

const TeamStyle = styled.div`
  position: relative;
  padding-top: 0px;
  padding-bottom: 100px;
  background-color: #240259;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  @media (min-width: 920px) {
    padding-left: calc(61 / 1440 * 100vw);
    padding-right: calc(61 / 1440 * 100vw);
  }
  .team-firstParent {
    position: relative;
    display: block;
  }
  .team-titleText {
    position: absolute;
    top: -85px;
    left: 0px;
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 52px;
    text-transform: uppercase;
    color: #b6f486;
  }
  .baefriends {
    font-weight: bold;
    font-size: 80px;
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
      margin-left:  calc(86 / 1440 * 100vw);
      margin-top: 30px;
      max-width: 368px;
      @media (max-width: 1387px) {
        margin-left: 60px;
      }
      @media (max-width: 768px) {
        margin-left: 8px;
        margin-right: 8px;
      }
      img {
        :hover {
          cursor: pointer;
          outline: 4px solid #7e54d9;
          box-sizing: border-box;
          filter: drop-shadow(8px 8px 0px #8fd988);
        }
        :active {
          outline: 4px solid #004775;
          box-sizing: border-box;
          filter: drop-shadow(4px 4px 0px #8fd988);
        }
      }
      :first-child {
        margin-left: 0px;
      }
      .bae-name {
        font-family: 'ArticulatCF-Normal';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.02em;
        color: #8fd988;
      }
      .bae-description {
        font-family: 'ArticulatCF-Normal';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        color: #8fd988;
        margin-top: 4px;
        a {
          font-weight: 700;
          text-underline-offset: 2px;
          text-decoration-line: underline;
          :hover {
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

  @media (max-width: 1000px) {
    padding-top: 30px;
  }
`;

export default TeamStyle;
