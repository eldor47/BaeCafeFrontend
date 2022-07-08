import React from 'react';

import {LoadingOverlayStyle} from "../../styles/Season2/LoadingElement";

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <LoadingOverlayStyle>
      <div className={`loading-overlay ${isLoading ? 'is-active' : ''}`}>
        <span className="loader"></span>
      </div>
    </LoadingOverlayStyle>
  );
};

export default Loading;
