import React from 'react';
import Portal from './Portal';

const Tooltip = ({ children, isOpen, position }) => {
  return isOpen ? (
    <Portal>
      <div
        style={{
          position: 'absolute',
          top: position.y + 10,
          left: position.x,
          backgroundColor: 'lightgray',
          padding: '10px',
        }}
      >
        {children}
      </div>
    </Portal>
  ) : null;
};

export default Tooltip;
