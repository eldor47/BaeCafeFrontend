import styled from 'styled-components';

const SinatureModal = styled.div`
  border-radius: 8px;
  font-family: 'ArticulatCF-Normal';
  min-width: 360px;
  .modal_wrapper {
    position: relative;
    z-index: 1;

    width: 360px;
    min-height: 100px;

    background: #240259;
    border: 2px solid #8FD988;
    box-sizing: border-box;
    border-radius: 8px;

    padding: 18px;

    @media (max-width: 720px) {
      max-width: calc(100% - 2 * 8px);
    }
  }

  .modal_heading {
    display: flex;
    align-items: center;
    position: relative;

    > h4 {
      flex: 1;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #8FD988;
      text-align: center;
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
  }

  .modal_content {
    margin-top: 16px;
    color: #8FD988;
    .message {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      color: #8FD988;
    }
  }
  .signature {
    font-family: 'ArticulatCF-Normal';
    cursor: pointer;
    display: flex;
    font-size: 18px;
    height: 45px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 30px;
    border-radius: 10px;
    background: transparent;
    color: #8fd988;
    border: 2px solid #8fd988;
    box-sizing: border-box;
    @media (max-width: 768px) {
      font-size: 16px;
      padding: 14px 60px;
    }
    @media (max-width: 470px) {
      font-size: 12px;
      padding: 14px 30px;
    }
    :hover {
      opacity: 0.8;
    }
    :active {
      opacity: 0.8;
    }
  }
`;

export default SinatureModal;
