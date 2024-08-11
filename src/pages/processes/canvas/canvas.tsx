import { useState, useEffect } from 'react';

function Canvas(props) {
  const calibateH = props.height - 640;

  return (
    <>
      <div
        className="bg-neutral-900 text-white"
        style={{ height: `calc(70vh - 84px + ${calibateH}px)`, width: '100%' }}
      >
        CANVAS
      </div>
    </>
  );
}

export default Canvas;