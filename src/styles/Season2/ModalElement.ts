import styled from 'styled-components';

const ModalStyle = styled.div`
 padding: 24px;
 background-color: #240259;
 border: 2px solid #8FD988;
 box-sizing: border-box;
 border-radius: 8px;
 min-width: 400px;
  .modalTitle {
    font-weight: bold;
    font-size: 24px;
    line-height: 48px;
    display: flex;
    flex: 1;
    align-items: flex-end;
    letter-spacing: -0.02em;
    color: #8FD988;
    font-family: 'ArticulatCF-Normal';
  }
  .modalHeader {
    display: flex;
    border-bottom: 2px solid #8FD988;
    font-family: 'ArticulatCF-Normal';
  }
  .closeBtn {
    font-size: 24px;
    align-self: center;
    cursor: pointer;
    outline: none;
    color: #8FD988;
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
    .connected{
      display: flex;
      margin-top: 18px;
      .connected-txt{
        font-weight: 500;
        font-size: 16px;
        line-height: 48px;
        margin-right: 10px;
        color: #8FD988;
        font-family: 'ArticulatCF-Normal';
      }
      .change-btn{
        height: 40px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 18px 20px;
        color: #00C5CE;
        border: 1px solid #00C5CE;
        box-sizing: border-box;
        border-radius: 99px;
        margin-right: 8px;
        :hover{
          border: 1px solid #00848a;
          color: #00848a;
        }
        :active{
          border: 1px solid #004346;
          color: #004346;
        }
      }
      .signout-btn{
        display: flex;
        cursor: pointer;
        font-weight: bold;
        flex-direction: row;
        font-size: 16px;
        font-family: 'ArticulatCF-Normal';
        height: 40px;
        justify-content: center;
        align-items: center;
        padding: 18px 20px;
        color: #7E54D9;
        border: 2px solid #7E54D9;
        background-color: transparent;
        box-sizing: border-box;
        :hover{
          opacity: 0.8;
        }
        :active{
          opacity: 1;

        }
      }
    }
    .address-list{
      margin-top: 12px;
      display: flex;
      .address{
        font-size: 16px;
        margin-left: 12px;
        color: #8FD988;
        font-family: 'ArticulatCF-Normal';
      }
      .copy-btn{
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .copy{
          display: flex;
          cursor: pointer;
          :hover{
            opacity: 0.8;
          }
        }
        .url{
          cursor: pointer;
          a{
            display: flex;
          }
          :hover{
            opacity: 0.8;
          }
        }
       
       
      }
    }
  }
  .walletLine {
    width: 100%;
    background-color: #240259;
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
    color: #8FD988;
    line-height: 38px;
    font-family: 'ArticulatCF-Normal';
    flex: 1;
  }
`;

export default ModalStyle;
