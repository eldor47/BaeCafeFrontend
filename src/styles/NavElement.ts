import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #ece5db;
  display: flex;
  flex-wrap: wrap;

  .season-selection {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
  .left {
    display: flex;
  }
  @media (min-width: 1040px) {
    padding-left: calc(61 / 1440 * 100vw);
  }
  .logo {
    .logo-animation {
      height: 120px;
      width: 120px;
      background-size: contain;
      cursor: pointer;
      @media (max-width: 1040px) {
        height: 80px;
        width: 80px;
        margin-left: 8px;
      }
      background-image: url('/image/logo.png');
      :hover {
        opacity: 0.8;
        // animation: logogif 3s ease-in-out infinite alternate;
        // @keyframes logogif {
        //   100%,
        //   0% {
        //     background-image: url('/image/logo.png');
        //   }
        //   16% {
        //     background-image: url('/image/logo2.svg');
        //   }
        //   50% {
        //     background-image: url('/image/logo.svg');
        //   }
        //   75% {
        //     background-image: url('/image/logo2.svg');
        //   }
        //   83% {
        //     background-image: url('/image/logo.svg');
        //   }
        //   91% {
        //     background-image: url('/image/logo2.svg');
        //   }
        // }
      }
    }
  }
  .dropdownMenu {
    display: none !important;
  }
  .dropdownMenu.open {
    display: flex !important;
    flex-direction: column;
    overflow: scroll;
    @media (min-width: 768px) {
      display: none !important;
    }
    .nav-item {
      cursor: pointer;
      align-self: center;
      font-weight: bold;
      font-size: 32px;
      line-height: 32px;
      text-align: right;
      text-transform: uppercase;
      color: #004775;
      border: none;
      background-color: transparent;
      margin-top: 40px;
      :first-child {
        margin-top: 77px;
      }
      :hover {
        color: #00c5ce;
      }
      :active {
        color: #018bbc;
      }
    }
    .nav-item.mint{
      cursor: pointer;
      align-self: center;
      font-weight: bold;
      font-size: 28px;
      line-height: 24px;
      text-align: right;
      text-transform: uppercase;
      color: #fff;
      padding: 28px 48px;
      border: none;
      background-color: #004775;
      box-shadow: 8px 8px 0px #f2bac6;
      border-radius: 99px;
      :hover {
        box-shadow: 8px 8px 0px #f2bac6;
        background-color: #00c5ce;
        color: #fff;
      }
      :active {
        background-color: #018bbc;
        color: #fff;
        border: 4px solid #018bbc;
      }
    }
  }
  .menuHamburger {
    display: none;
    @media (max-width: 768px) {
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
        border-top: 3px solid #004775;
      }
    }
  }
  #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  #nav-check:checked ~ .nav-links {
    height: 150vh;
    overflow-y: scroll !important;
    padding-bottom: 55vh;
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

  .nav-items.big-screen {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      display: none;
    }
    .nav-item.toggle{
      display: grid;
      font-size: 18px;
      height: 60px;
      align-self: center;
      @media(max-width: 768px){
        padding-bottom: 20px;
      }
    }
    .nav-item {
      cursor: pointer;
      font-weight: bold;
      font-size: 28px;
      line-height: 32px;
      text-align: right;
      text-transform: uppercase;
      color: #004775;
      border: none;
      background-color: transparent;
      margin-left: 32px;
      @media (max-width: 1534px) {
        margin-left: 16px;
        font-size: 26px;
      }
      @media(max-width: 1380px) {
        margin-left: 10px;
        font-size: 24px;
      }
      @media(max-width: 1290px) {
        margin-left: 10px;
        font-size: 20px;
      }
      @media (max-width: 1100px) {
        margin-left: 8px;
        font-size: 18px;
      }
      @media (max-width: 933px) {
        margin-left: 4px;
      }
      :first-child {
        margin-left: 24px;
        @media (max-width: 1335px) {
          margin-left: 20px;
        }
        @media (max-width: 911px) {
          margin-left: 8px;
        }
      }
      :hover {
        color: #00c5ce;
      }
      :active {
        color: #018bbc;
      }
    }
    .mint-item {
      cursor: pointer;
      align-self: center;
      font-weight: bold;
      font-size: 28px;
      line-height: 24px;
      text-align: right;
      text-transform: uppercase;
      color: #fff;
      padding: 18px 48px;
      border: none;
      background-color: #004775;
      box-shadow: 8px 8px 0px #f2bac6;
      border-radius: 99px;
      @media (max-width: 1500px) {
        margin-left: 16px;
        font-size: 28px;
      }
      @media(max-width: 1250px) {
        margin-left: 10px;
        font-size: 18px;
        padding: 14px 38px;
      }
      @media (max-width: 1040px) {
        margin-left: 8px;
        font-size: 16px;
        padding: 12px 30px;
      }
      @media (max-width: 868px) {
        margin-left: 4px;
        font-size: 12px;
        padding: 10px 30px;

      }
      :hover {
        box-shadow: 8px 8px 0px #f2bac6;
        background-color: #00c5ce;
        color: #fff;
      }
      :active {
        background-color: #018bbc;
        color: #fff;
        border: 4px solid #018bbc;
      }
    }
  }
`;

export default Nav;
