import { useState, useEffect } from 'react';
import Renderkub from '../canvas/bpmnrender/bpmnnormalMode';
function Canvas(props) {
  const calibateH = (props.height - 633);
  
  return (
    <>
      <div
        // className="bg-neutral-900 text-white"
        style={{ height: `calc(70vh - 84px + ${calibateH}px)`, width: '100%' }}
      >
        <Renderkub />
      </div>
    </>
  );
}

export default Canvas;