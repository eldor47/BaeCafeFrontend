import React from 'react';
import ReactModal from 'react-modal';

import CloseIcon from 'icon/closeIcon';
import ModalStyle from 'styles/Season2/ModalElement';
import { injected, walletconnect } from 'components/connectors';

interface ModalProps {
  isOpen: boolean;
  handleModal: () => void;
  connectWallet: any;
}

// eslint-disable-next-line react/display-name
const WalletModal: React.FC<ModalProps> = React.memo(
  ({ isOpen, handleModal, connectWallet }) => {
    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={() => handleModal()}
        className="Modal"
        overlayClassName="wallet-overlay"
      >
        <ModalStyle>
          <div className="modalHeader">
            <div className="modalTitle">Connect Wallet</div>
            <button className="closeBtn" onClick={() => handleModal()}>
              <CloseIcon />
            </button>
          </div>
          <div className="modalBody">
            <button
              className="walletLine"
              onClick={() => connectWallet(injected)}
            >
              <div className="wallet-icon">
                <img src="/image/metamask.png" alt="metamask"></img>
              </div>
              <div className="walletName">Metamask</div>
            </button>
            <button
              className="walletLine"
              onClick={() => connectWallet(walletconnect)}
            >
              <div>
                <img src="/image/walletconnect.png" alt="walletconnect"></img>
              </div>
              <div className="walletName" >WalletConnect</div>
            </button>
          </div>
        </ModalStyle>
      </ReactModal>
    );
  }
);

export default WalletModal;
