import styled from 'styled-components';

const ConnectWalletButton = styled.button`
  background-color: #0288d1;

  padding: 0 16px;
  border-radius: 9999px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 7px 0px;
  @media (max-width: 920px) {
    margin: 0px 0px;
  }

  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
    text-align: center;
    color: #fff;
    margin-bottom: -3px;
  }

  svg {
    color: #fff;
    margin-right: 4px;
  }

  &[data-mode='connected'] {
    border: 1px solid ${({theme}) => theme.border};
    background-color: transparent;

    display: flex;
    align-items: center;

    span {
      color: ${({theme}) => theme.fontSubColor};
    }

    img {
      margin-left: 6px;
    }
  }
`;

export default ConnectWalletButton;
