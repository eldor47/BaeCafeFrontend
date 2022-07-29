import { CLOUDFRONT_IMG } from 'components/helper';
import styled from 'styled-components';

const MenuStyle = styled.div`

  width: 100%;
  padding-top: 20px;
  padding-bottom: 0px;
  background-color: #091833;

  .season2-menu-parent {
    width: 100%;
    display: flex;
    padding-bottom: 10px;
    align-items: center;
    a {
      display: contents;
    }
  }
  .season2-menu-small {
    position: relative;
    display: none;
    padding-bottom: 64px;

    @media (max-width: 1110px) {
      display: block;
      overflow-y: scroll;
      width: 100%;
      height: calc(100vh - 132px);
    }
  }
  .season2-menu-smallRow {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 56px;
    opacity: 1;
  }
  .season2-menu-smallRow-action {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 20px;
    opacity: 1;
  }
  .season2-menu-smallText {
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    padding-top: 5px;
    :hover {
      opacity: 0.6;
    }
    opacity: 1;
  }

  .menu-close-image-parent {
    position: absolute;
    display: flex;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 56px;
    justify-content: center;
    align-items: center;
  }
  .menu-close-image {
    position: relative;
    display: block;
    width: 25px;
    cursor: pointer;
  }
  .menu-button {
    cursor: pointer;
  }

  .menuHamburger {
    display: none;
    @media (max-width: 1110px) {
      position: relative;
      display: flex;
      flex-grow: 1;
      z-index: 1;
      justify-content: flex-end;
    }
    label {
      display: inline-block;
      width: 50px;
      height: 50px;
      margin-top: 5px;
      margin-right: 4px;
      padding: 13px;
      span {
        display: block;
        width: 25px;
        height: 10px;
        border-top: 3px solid #fff;
      }
    }
  }
  #nav-check:checked ~ .menuHamburger > .nav-label > .line1 {
    transform: rotate(-45deg) translate(-1px, 8px);
  }
  #nav-check:checked ~ .menuHamburger > .nav-label > .line2 {
    transform: scaleY(0);
    background-color: transparent;
  }
  #nav-check:checked ~ .menuHamburger > .nav-label > .line3 {
    transform: rotate(45deg) translate(-10px, -10px);
  }
  #nav-check {
    display: none;
  }

  .season2-logo {
    height: 75px;
    padding-left: 24px;
    padding-right: 31px;
    :hover {
      opacity: 0.8;
    }
  }
  .season2-menu-big {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    padding-right: calc(61 / 1440 * 100vw);
  }
  .season2-menu-comingsoon {
    position: relative;
    display: block;
    height: 35px;
    display: flex;
    align-items: center;
    padding-left: 9px;
    padding-right: 9px;
    background: #8fd988;
    margin-left: 36px;
    @media (max-width: 1270px) {
      margin-left: 24px;
    }
    @media (max-width: 1110px) {
      margin-left: 0;
    }
  }
  .season2-menu-comingsoonText {
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    text-transform: uppercase;
    color: white;
    padding-top: 5px;
    width: max-content;
  }
  .season2-menu-primary {
    position: relative;
    display: block;
    margin-left: 36px;
    height: 50px;
    cursor: pointer;
    width: 150px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 132px 50px;
    :hover {
      opacity: 0.5;
      transition: 0.25s;
    }
    @media (max-width: 1270px) {
      margin-left: 24px;
    }
    @media (max-width: 1110px) {
      margin-left: 0;
    }
    border: 3px solid white;
    border-radius: 10px;
  }
  .season2-menu-primaryImage {
    height: 100%;
  }
  .season2-menu-primaryText-parent {
    position: absolute;
    display: flex;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .season2-menu-primaryText {
    font-family: 'ArticulatCF-Normal';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    cursor: pointer;
    padding-top: 5px;
    color: white;
    z-index: 1;
    @media (max-width: 1320px) {
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
    }
  }

  .season2-menu-switchParent {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 36px;
    align-items: center;
    height: 80px;
  }
  .season2-menu-switchImage {
    height: 44px;
    cursor: pointer;
  }
  .season2-menu-switchText {
    font-family: 'ArticulatCF-Normal';
    width: max-content;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
    cursor: pointer;
    padding-top: 10px;
    color: white;
    height: 32px;
    @media (max-width: 1320px) {
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
    }
    :hover {
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 1450px) {
    .season2-menu-primary {
      height: 50px;
    }
    .season2-menu-switchParent {
      margin-left: 36px;
    }
    .season2-menu-switchImage {
      height: 34px;
    }
  }
  @media screen and (max-width: 1320px) {
    .season2-logo {
      height: 63px;
      padding-left: 24px;
      padding-right: 15px;
    }
  }
  @media screen and (max-width: 1270px) {
    padding-bottom: 0px;
  }

  @media (max-width: 1110px) {
    .season2-menu-big {
      display: none;
      align-items: center;
    }
    .season2-logo {
      margin-top: 20px;
    }
  }

  @media (max-width: 1110px) {
    padding-top: 0px;
    padding-bottom: 10px;
  }

  @media (max-width: 1000px) {
    .season2-menu-parent {
      height: 80px;
    }
    .season2-logo {
      margin-top: 15px;
    }
  }
`;

export default MenuStyle;
