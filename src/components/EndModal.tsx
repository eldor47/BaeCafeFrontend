import React from 'react';
import ReactModal from 'react-modal';

import CloseIcon from 'icon/closeIcon';
import ModalStyle from 'styles/EndModalElement';
import { OPENSEACOLLECTION } from './helper';

interface ModalProps {
  isOpen: boolean;
  handleModal: () => void;
}

// eslint-disable-next-line react/display-name
const EndModal: React.FC<ModalProps> = React.memo(
  ({ handleModal, isOpen }) => {
    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={() => handleModal()}
        className="endmodal"
        overlayClassName="Overlay"
      >
        <ModalStyle>
          <div className="modalHeader">
            <div className="modalTitle">Season 1 is sold out</div>
            <button className="closeBtn" onClick={() => handleModal()}>
              <CloseIcon />
            </button>
          </div>
          <div className="modalBody">
          You can buy Baes on <a href={OPENSEACOLLECTION} target="_blank" rel="noreferrer">OpenSea</a>. Season 2 is in the works!
          </div>
        </ModalStyle>
      </ReactModal>
    );
  }
);

export default EndModal;
