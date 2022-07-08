import styled from 'styled-components';

const ModalStyle = styled.div`
 padding: 24px;
 background-color: #ece5db;
 border: 2px solid #101113;
 box-sizing: border-box;
 border-radius: 8px;
  .modalTitle {
    font-weight: bold;
    font-size: 24px;
    line-height: 48px;
    display: flex;
    flex: 1;
    align-items: flex-end;
    letter-spacing: -0.02em;
    color: #101113;
  }
  .endHeader{
    display: flex;
    justify-content: flex-end;
  }
  .modalHeader {
    display: flex;
    border-bottom: 2px solid #101113;
  }
  .closeBtn {
    font-size: 24px;
    align-self: center;
    cursor: pointer;
    outline: none;
    color: #101113;
    border-color: transparent;
    background-color: transparent;
    :hover{
      opacity: 0.4;
      color: #000000;
    }
  }
  .modalBody {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-top: 10px;
    a {
      font-weight: 600;
      color: #004775;
      :hover{
        opacity: 0.6;
      }
    }
  }
  .walletLine {
    width: 100%;
    background-color: #ece5db;
    border: transparent;
    cursor: pointer;
    display: flex;
    border-radius: 8px;
    padding-top: 24px;
  }
  .walletLine:hover {
    opacity: 0.8;
  }
  .walletName {
    margin-left: 18px;
    font-size: 22px;
    font-weight: 600;
    text-align: left;
    color: #101113;
    line-height: 38px;
    flex: 1;
  }
`;

export default ModalStyle;
