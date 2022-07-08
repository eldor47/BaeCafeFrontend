import { CLOUDFRONT_IMG } from 'components/helper';
import styled from 'styled-components';

const XXCStyle = styled.div`
  height: 729px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 420px) {
    height: 195px;
  }
  .xxc {
    height: 729px;
    width: 100%;
    background: url('${CLOUDFRONT_IMG}/image/XXC.jpg') no-repeat;
    padding: 10px;
    background-size: cover;
    .xxc-inside {
      width: 100%;
      height: 100%;
      border: 2px solid #f2bac6;
      box-sizing: border-box;
    }
    @media (max-width: 768px) {
      height: 300px;
    }
    @media (max-width: 420px) {
      height: 195px;
    }
  }
`;

export default XXCStyle;
