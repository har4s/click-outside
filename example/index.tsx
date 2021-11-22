import React from 'react';
// import { hello } from "../lib";
import ClickOutside from '../lib';

const ReactComponent: React.FC = () => {
  return (
    <div>
      <div>Click Outside Example</div>
      <ClickOutside
        onClick={() => {
          console.log('onClickOutside');
        }}
      >
        <div style={{ padding: '5rem', backgroundColor: 'red' }}></div>
      </ClickOutside>
    </div>
  );
};
