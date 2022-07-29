import styled from 'styled-components';

const GalleryStyle = styled.div`
  background-color: #240259;

  .gallery-big {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-left: 50px;
  }
  .gallery-small {
    display: none;
    position: relative;
    width: 100%;
  }
  .gallery-list {
    display: block;
    padding-right: 40px;
  }

  .gallery-mobile {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
  }

  .gallery-mobile-image-parent {
    display: block;
    position: relative;
    width: calc((100% - 40px) / 2);
    height: 60vw;
    background-color: #a9d250;
  }

  .gallery-left {
    position: relative;
    display: block;
    width: 400px;
  }
  .gallery-title {
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 52px;
    text-transform: uppercase;
    color: #b6f486;
    padding-bottom: 34px;
  }
  .gallery-right {
    position: relative;
    flex: 1;
    width: calc(100vw - 510px);
  }

  .gallery-drop-menu {
    display: none;
    width: 100%;
    background-color: #240259;
  }

  .gallery-drop-menu-parent {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .gallery-drop-menu-title {
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 52px;
    text-transform: uppercase;
    color: #b6f486;
  }
  .gallery-drop-menu-right {
    position: relative;
    display: flex;
    margin-top: -7px;
    margin-right: 35px;
    margin-left: auto;
    height: 100%;
    cursor: pointer;
    :hover {
      opacity: 0.6
    }
  }
  .gallery-drop-menu-filter {
    display: block;
    position: relative;
    margin-top: 7px;
    height: 25px;
  }
  .gallery-drop-menu-type {
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    color: #8fd988;
    text-transform: uppercase;
    padding-top: 5px;
    padding-right: 15px;
  }

  @media (max-width: 1500px) {
    .gallery-left {
      width: 300px;
    }
  }
  @media screen and (max-width: 1320px) {
    padding-left: 40px;
    .gallery-left {
      width: 230px;
    }
    .gallery-title {
      font-size: 40px;
    }
  }
  @media (max-width: 1030px) {
    .gallery-big {
      display: none;
    }
    .gallery-small {
      display: block;
    }

    .gallery-left {
      display: none;
    }
    .gallery-drop-menu {
      display: block;
    }
  }
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    .gallery-list {
      padding-right: 20px;
    }
    .gallery-drop-menu-right {
      margin-right: 15px;
    }
  }
`;

export default GalleryStyle;
