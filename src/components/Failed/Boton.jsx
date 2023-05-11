import React, { useState } from 'react';
import Tooltip from './Tooltip';

function Boton(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonRect, setButtonRect] = useState(null);

  const buttonRef = React.useRef(null);

  const openTooltip = () => {
    setIsOpen(true);
    setButtonRect(buttonRef.current.getBoundingClientRect());
  };

  const closeTooltip = () => {
    setIsOpen(false);
    setButtonRect(null);
  };

  return (
    <>
      <button ref={buttonRef} onClick={openTooltip}>
        {props.children}
      </button>
      <Tooltip
        isOpen={isOpen}
        onClose={closeTooltip}
        position={buttonRect && {
          top: buttonRect.bottom,
          left: buttonRect.left + buttonRect.width / 2,
        }}
      >
        {props.tooltip}
      </Tooltip>
    </>
  );
}

export default Boton;
