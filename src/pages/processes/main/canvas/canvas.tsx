import { useState, useEffect } from 'react';
import Renderkub from './bpmnrender/overall_mode/bpmnnormalMode';
function Canvas(props) {
  // const calibateH = (props.height - 633);
  
  return (
    <>
      <div
        // style={{ height: `calc(70vh - 84px + ${calibateH}px)`, width: '100%' }}
        // style={{ height: `calc(${props.height-35}px)`, width: '100%' }}
      >
        <Renderkub height={props.height}/>
      </div>
    </>
  );
}

export default Canvas;