import Router from 'next/router';
import ReactModal from 'react-modal';
import ReactTooltip from 'whalestats-tooltip';
import { useCallback, memo, FC, useState } from 'react';

import Copy from 'icon/copy';
import LinkI from 'icon/link';
import { NETWORK } from './helper';
import CloseIcon from 'icon/closeIcon';
import UiConnectedWalletPanel from 'styles/ModalElement';
import AvatarGenerator from 'components/common/AvatarGenerator';

// eslint-disable-next-line react/display-name
const ConnectWalletButton: FC<any> = memo(
  ({ address, isOpen, walletName, handleChangeModal, showChainModal }) => {
    const [addtooltip, setAddTooltip] = useState<string>(
      'Copy address to clipboard'
    );

    const onSignOut = () => {
      localStorage.removeItem('wallet');
      Router.reload();
    }

    const showAddressByDots = useCallback((address) => {
      if (!address || address.length < 10) {
        return address;
      }
      return (
        address.slice(0, 6) +
        '...' +
        address.slice(address.length - 4, address.length)
      );
    }, []);

    const copyToClipboard = useCallback((address) => {
      try {
        navigator.clipboard.writeText(address);
        setAddTooltip('Copied');
      } catch {
        setAddTooltip('Permission denied');
      }
    }, []);

    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={() => handleChangeModal()}
        className="wallet-modal"
        overlayClassName="wallet-overlay"
      >
        <UiConnectedWalletPanel>
          <div className="modalHeader">
            <div className="modalTitle">Account</div>
            <button className="closeBtn" onClick={() => handleChangeModal()}>
              <CloseIcon />
            </button>
          </div>
          <div className="modalBody">
            <div className="connected">
              <p className="connected-txt">Connected with {walletName}</p>
              <button onClick={() => onSignOut()} className="signout-btn">
                Signout
              </button>
            </div>
            <ReactTooltip
              id="copy-address"
              type="dark"
              getContent={() => {
                return addtooltip;
              }}
            />
            <div className="address-list">
              <AvatarGenerator
                size="small"
                genKey={address}
              />
              <span className="address">{showAddressByDots(address)}</span>
              <div className="copy-btn">
                <Copy
                  data-tip
                  data-for="copy-address"
                  onBlur={() => setAddTooltip('Copy address to clipboard')}
                  onClick={() => copyToClipboard(address)}
                  type="ground"
                />
                <a
                  style={{ marginLeft: 5 }}
                  href={`${NETWORK}address/${address}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkI />
                </a>
              </div>
            </div>
          </div>
        </UiConnectedWalletPanel>
      </ReactModal>
    );
  }
);
export default ConnectWalletButton;
