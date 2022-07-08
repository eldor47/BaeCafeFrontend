import { CLOUDFRONT_IMG } from 'components/helper';
import styled from 'styled-components';

const ComingSoonStyle = styled.div<{height: number}>`
  background-color: #240259;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  height: calc(100vh - 132px);
  overflow: hidden;
   @media(max-width: 420px){
   margin-top: 120px;
    min-height: ${({height}) => height - 80}px;
    background: #240259;
  }
  .comingson{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .comingson-main {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 104px;
  }
  .comingsoon-img{
    flex: 1;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('${CLOUDFRONT_IMG}/season2/comingsoon/commingsoon.png');
    @media(max-width: 420px){
      margin-top: 0px;
      max-width: 400px;
    }
    @media (max-width: 920px) {
      margin-left: 8px;
      margin-right: 8px;
      background-size: contain;
      background-position: top;
    }
  }

  .comingsonText-parent {
    position: absolute;
    display: block;
    width: 254px;
    margin-right: 20%;
    height: 104px;
    @media (max-width: 730px) {
      top: 22px;
      width: 185px;
      height: 80px;
    }
    @media (max-width: 650px) {
      width: 185px;
      height: 80px;
    }
  }
  .comingsonText-BGImage {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
  .comingsonText {
    position: relative;
    display: block;
    margin-top: 16px;
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 10px;
    font-family: 'Consolas';
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 24px;
    text-align: center;
    color: #240259;
  }
  @media (max-width: 1000px) {
    height: calc(100vh - 80px);
  }

  @media (max-width: 730px) {
    .comingsonText {
      font-size: 28px;
      padding-top: 5px;
    }
  }
  
`;

export default ComingSoonStyle;
