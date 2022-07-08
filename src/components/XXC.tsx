import React from 'react';
import type {NextPage} from 'next';

import XXCStyle from 'styles/XXCElement';

interface HeaderProps {}

const XXC: NextPage<HeaderProps> = ({}) => {
  return (
    <XXCStyle>
      <div className="xxc">
        <div className="xxc-inside"></div>
      </div>
      {/* <img src="" height="752" width="100%" /> */}
    </XXCStyle>
  );
};

export default XXC;
