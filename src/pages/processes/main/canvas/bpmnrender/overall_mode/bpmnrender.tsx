import React, { useEffect, useState, useRef } from 'react';
import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js';
import './diagram-js.css';
import './baseaddMarker.css';
import {PerformMarker} from './marker/index';


let canvas = null;

const BpmnViewer = ({ xml,height }) => {
  const containerRef = useRef(null);
  const [theme, setTheme] = useState('light');
  const [colorOptions, setColorOptions] = useState({
    defaultFillColor: '#fff',
    defaultStrokeColor: '#212121'
  });
  console.log("mal ja", height)

  const handleThemeChange = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (!xml) {
      console.error('No BPMN XML provided');
      return;
    }

    const bpmnViewer = new BpmnJS({
      container: containerRef.current,
      bpmnRenderer: colorOptions,
    });

    bpmnViewer.importXML(xml).then(({ warnings }) => {
      if (warnings.length) {
        console.warn('Warning rendering BPMN diagram:', warnings);
      } else {
        const canvas = bpmnViewer.get('canvas');
        const elementRegistry = bpmnViewer.get('elementRegistry');
        PerformMarker(canvas, elementRegistry);

        // canvas.addMarker('Activity_0nfx1ek', 'highlight');

        canvas.zoom('fit-viewport');
      }
    });

    // Cleanup on component unmount
    return () => {
      bpmnViewer.destroy();
    };
  }, [xml, colorOptions]);

  useEffect(() => {
    setColorOptions(
      theme === 'light'
        ? { defaultFillColor: '#fff', defaultStrokeColor: '#212121' }
        : { defaultFillColor: '#161616', defaultStrokeColor: '#b0b0b0' }
    );
  }, [theme]);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#eee' : '#161616',
        height: `${height-53}px`,
        width: '100%',
      }}
    >
      <button onClick={handleThemeChange} className='bg-green-300 absolute z-50'>
        {theme === 'light' ? `Use Dark Theme ${height}` : 'Use Light Theme'}
      </button>
      <div ref={containerRef} style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
};
export {canvas}
export default BpmnViewer;
