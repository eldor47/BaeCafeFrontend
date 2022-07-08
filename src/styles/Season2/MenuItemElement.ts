import styled from 'styled-components';

const MenuItemStyle = styled.div`
  position: relative;
  height: 76px;
  display: flex;
  align-items: center;
  margin-left: 36px;

  .menuItemText {
    font-family: 'Consolas';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #8fd988;
    text-transform: uppercase;
    cursor: pointer;
    padding-top: 5px;
    :hover {
      opacity: 0.6
    }
  }
  .menuItem-bottomLine {
    display: block;
    position: absolute;
    left: 0px;
    bottom: 8px;
    height: 4px;
    width: 100%;
    background: #8fd988;
  }
  .menuItem-bottomLineNone {
    display: none;
  }

  @media screen and (max-width: 1270px) {
    margin-left: 24px;
    .menuItemText {
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
    }
    .menuItem-bottomLine {
      bottom: 20px;
      height: 2px;
    }
  }
`;

export default MenuItemStyle;
