import styled from 'styled-components';

const GalleryMenuStyle = styled.div`
  position: relative;
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .gallery-menu-check {
    width: 24px;
  }
  .gallery-menu-text {
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
    color: #8fd988;
    padding-left: 45px;
    cursor: pointer;
    :hover {
      opacity: 0.6
    }
  }
  .gallery-menu-top-line {
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 1px;
    background: #70c056;
  }
  .gallery-menu-none {
    display: none;
  }
  @media screen and (max-width: 1320px) {
    height: 66px;
    .gallery-menu-text {
      font-size: 18px;
      padding-left: 30px;
    }
    .gallery-menu-check {
      width: 20px;
    }
  }
`;

export default GalleryMenuStyle;
