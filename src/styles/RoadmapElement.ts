import styled from 'styled-components';

const RoadmapStyle = styled.div`
  padding-top: 48px;
  padding-bottom: 100px;
  background: url('/image/story/pattern1.png') 90% 20% no-repeat,
    url('/image/story/pattern3.png') 92% 22% no-repeat,
    url('/image/story/pattern6.png') 12% 60% no-repeat,
    url('/image/story/pattern3.png') 10% 56% no-repeat,
    url('/image/story/pattern5.png') 92% 88% no-repeat,
    url('/image/story/pattern4.png') 90% 90% no-repeat;
  background-color: #ece5db;

  @media (min-width: 1028px) {
    padding-left: calc(128 / 1440 * 100vw);
    padding-right: calc(128 / 1440 * 100vw);
  }
  .roadmap {
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
  .roadmap-des {
    margin-top: 16px;
    padding-bottom: 32px;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 35px;
    }
  }
  .upcomming {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    margin-top: 9px;
    color: #004775;
    margin-left: 24px;
    margin-bottom: 24px;
    text-align: center;
    @media (max-width: 768px) {
      margin-left: 18px;
    }
  }
  .roadmap-stage {
    display: flex;
    padding-left: 60px;
    @media (max-width: 768px) {
      padding-left: 8px;
    }
    .roadmap-image {
      min-width: 240px;
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .image {
        display: flex;
        flex-direction: column;
        .heart {
          align-self: center;
          margin-bottom: 5px;
          margin-top: 5px;
        }
        .stick {
          height: 60px;
          width: 4px;
          align-self: center;
          object-fit: cover;
          @media (max-width: 768px) {
            object-fit: cover;
            height: 100%;
            width: 4px;
            align-self: center;
          }
        }
      }
    }
    .roadmap-image2 {
      flex: 1;
    }
    .roadmap-content2.multi-line{
      margin-top: -2%;
      @media(max-width: 1410px){
        margin-top: -4%;
      }
      @media(max-width:768px){
        margin-top: -10%;
      }
      @media(max-width:600px){
        margin-top: -20%;
      }
    }
    .roadmap-content2.two-line{
      @media(max-width: 540px){
        margin-top: -2%;
      }
    }
    .roadmap-content2 {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: relative;
      .title {
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        letter-spacing: -0.02em;
        color: #101113;
        margin-right: 8px;
        text-align: right;
        @media (max-width: 768px) {
          margin-right: 24px;
        }
      }
      .task {
        font-size: 18px;
        line-height: 26px;
        color: #101113;
        text-align: right;
        margin-right: 36px;
        @media (max-width: 768px) {
          margin-right: 24px;
        }
      }
    }
    .roadmap-content.threeline{
      @media(max-width: 1144px){
        margin-top: -2%;
      }
      @media(max-width: 499px){
        margin-top: -6%;
      }
    }
    .roadmap-content.twoline{
      margin-top: 0%;
      @media(max-width: 499px){
        margin-top: -2%;
      }
    }
    .roadmap-content {
      flex: 1;
      .title {
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        letter-spacing: -0.02em;
        margin-top: 4px;
        margin-left: 8px;
        margin-bottom: 8px;
        @media (max-width: 768px) {
          margin-left: 18px;
        }
      }
      .title-inactive {
        color: #101113;
      }
      .task {
        font-size: 18px;
        line-height: 26px;
        color: #101113;
        margin-left: 36px;
        @media (max-width: 768px) {
          margin-left: 24px;
        }
      }
    }
  }
`;

export default RoadmapStyle;
