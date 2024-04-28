import React, { useRef, useState, useEffect } from 'react';

const ResizableDiv = ({ children }) => {
  const [height, setHeight] = useState('calc(100vh - 146px)');
  const divRef = useRef(null);

  const handleMouseDown = (e) => {
    const initialY = e.clientY;
    const initialHeight = divRef.current.parentNode.offsetHeight;

    const handleMouseMove = (e) => {
      const newHeight = initialHeight + e.clientY - initialY;
      setHeight(`${newHeight}px`);
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    const divElement = divRef.current;
    divElement.addEventListener('mousedown', handleMouseDown);

    return () => {
      divElement.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div style={{ height: height, width: '100%' }}>
      
      <div ref={divRef} style={{bottom: 0, width: '100%', height: height, cursor: 'ns-resize' }} />
      {children}
    </div>
  );
};

export default ResizableDiv;