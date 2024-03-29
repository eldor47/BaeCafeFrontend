import styled from 'styled-components';

const Season2Style = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  padding-top: 132px;
  background-color: #091833;

  .season2-parent-menu {
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    z-index: 2;
  }
  @media (max-width: 1000px) {
    padding-top: 80px;
    .season2-parent-menu {
      height: 80px;
      width: 100%;
      z-index: 2;
    }
  }
`;

export default Season2Style;
