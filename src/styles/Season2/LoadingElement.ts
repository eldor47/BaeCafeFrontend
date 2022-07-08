import styled from 'styled-components';

const LoadingStyle = styled.div`
  width: fit-content;
  margin: auto;
  .loader {
    border: 5px solid ${({theme}) => theme.loading};
    border-top: 5px solid #0288d1; /* Blue */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const LoadingOverlayStyle = styled.div`
  width: fit-content;
  margin: auto;
  .loading-overlay {
    display: none;
    background: rgba(255, 255, 255, 0.7);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9998;
    align-items: center;
    justify-content: center;
  }

  .loading-overlay.is-active {
    display: flex;
  }

  .code {
    font-family: monospace;
    /*   font-size: .9em; */
    color: #dd4a68;
    background-color: rgb(238, 238, 238);
    padding: 0 3px;
  }
  .loader {
    width: 20px;
    height: 20px;
    animation: loading 2s infinite ease-out;
    margin: auto;
    border-radius: 50%;
    background-color: #240259;
  }
  @keyframes loading {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(8);
      opacity: 0;
    }
  }
`;
export {LoadingOverlayStyle, LoadingStyle};
