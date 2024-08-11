import React, { useEffect, useRef } from 'react';
import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js';

const BpmnViewer = ({ xml }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if (!xml) {
        console.error('No BPMN XML provided');
        return;
      }

      const bpmnViewer = new BpmnJS({
        container: containerRef.current,
        
      });
      console.log(bpmnViewer.get('canvas'));
      // bpmnViewer.importXML(xml, (err) => {
      //   if (err) {
      //     console.error('Error rendering BPMN diagram:', err);
      //   } else {
      //     const canvas = bpmnViewer.get('canvas');
      //     canvas.zoom('fit-viewport');
      //   }
      // });
      bpmnViewer.importXML(xml).then(({ warnings }) => {
        if (warnings.length) {
          console.warn('Warning rendering BPMN diagram:', warnings);
        } else {
          const canvas = bpmnViewer.get('canvas');
          canvas.zoom('fit-viewport');
        }
      });

      // Cleanup on component unmount
      return () => {
        bpmnViewer.destroy();
      };
    } catch (error) {
      console.error('Error rendering BPMN diagram:', error
      );
    }
  }, [xml]);

  return <div ref={containerRef} style={{height:1000}} />;
};

export default BpmnViewer;