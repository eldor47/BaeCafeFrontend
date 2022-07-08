import React, { useCallback, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { SpinnerCircularFixed } from 'spinners-react';

import ModalStyle from 'styles/Season2/ModalElement';
import { injected, walletconnect } from 'components/connectors';

import Wallet from 'icon/wallet';
import CloseIcon from 'icon/closeIcon';
import PrivacyPanel from 'styles/PrivacyPanel';
import SinatureUI from 'styles/SignatureModal';
import {useWalletSignature} from 'components/Season2/hooks/wallet-signature.hook';

interface ModalProps {
  address: string;
  currentModal: string;
  isOpen: boolean;
  handleModal: () => void;
  connectWallet: any;
  handleCurrentModal: (value: string) => void;
}

const WalletModal: React.FC<ModalProps> = React.memo(function RevealModal({
  isOpen,
  handleModal,
  connectWallet,
  currentModal,
  address,
}) {
  const {withSignature} = useWalletSignature();
  const [loading, setLoading] = useState<boolean>(false);

  const showAddressByDots = useCallback(() => {
    if (!address || address.length < 10) {
      return address;
    }
    return (
      address.slice(0, 8) +
      '...' +
      address.slice(address.length - 6, address.length)
    );
  }, [address]);

  const handleSignature = async () => {
    setLoading(true);
    await withSignature();
    setLoading(false);
    handleModal();
  };
  
  const handleOverlayClick = () =>{
    if(currentModal === 'chain'){
      handleModal();
    }
  }

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={handleOverlayClick}
      className="Modal"
      overlayClassName="wallet-overlay"
    >
      {(currentModal === 'chain' && (
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
              <div className="walletName">WalletConnect</div>
            </button>
          </div>
        </ModalStyle>
      )) || (
        <SinatureUI>
          <div
            className="modal_wrapper"
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            <div className="modal_heading">
              <h4>Link your wallet</h4>
              <button className="closeBtn" onClick={() => handleModal()}>
                <CloseIcon />
              </button>
            </div>
            <div className="modal_content">
              <PrivacyPanel>
                <div className="message">
                  Once you&apos;ve linked your wallet, you no longer need to
                  sign every interaction.
                </div>
                <div className="wallet">
                  <Wallet color="#fff" /> <span>{showAddressByDots()}</span>
                </div>
                <div className="notice">
                  <p>
                    This only gives us permission to sign messages. We cannot
                    transfer or store funds.
                  </p>
                </div>
                {(!loading && (
                  <button
                    className="signature"
                    onClick={() => handleSignature()}
                  >
                    Approve
                  </button>
                )) || (
                  <button className="verify">
                    <SpinnerCircularFixed size={16} color="green" thickness={250} secondaryColor="#bdd0d9" /> <span>Verifying</span>
                  </button>
                )}
              </PrivacyPanel>
            </div>
          </div>
        </SinatureUI>
      )}
    </ReactModal>
  );
});

export default WalletModal;
