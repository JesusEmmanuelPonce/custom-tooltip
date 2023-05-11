import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const portalRoot = document.getElementById('portal');
  return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;
