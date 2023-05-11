import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, style }) => {

    const parentNode = document.createElement("div");

    useEffect(() => {

        if(!parentNode) return
        const inlineStyles = Object.entries(style)
            .map(([key, value]) => `${key}:${value}`)
            .join("; ");

        parentNode.setAttribute("style", inlineStyles)
      
        document.body.appendChild(parentNode);
    
        return () => parentNode.remove();
     
    }, [parentNode]);

    return createPortal(children, parentNode)
}

export default Portal