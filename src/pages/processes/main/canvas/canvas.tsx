import { useState, useEffect } from 'react';
import Renderkub from './bpmnrender/overall_mode/bpmnnormalMode';
function Canvas(props) {
  // const calibateH = (props.height - 633);
  
  return (
    <>
        <Renderkub height={props.height} windowSize={props.windowSize}/>
    </>
  );
}

export default Canvas;