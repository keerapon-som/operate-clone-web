import { useState, useEffect } from 'react';
import Filter from './filter/mainFilter';
import CanvasBar from './canvas/canvasBar';
import Canvas from './canvas/canvas';
import ListInstance from './listinstance/mainListinstance';
import './filter/layoutFilter.css'
import Operations from './operation/mainOperation';

const Processes = () => {
  const [FilterOpened, setFilterOpened] = useState(true)
  const [height, setHeight] = useState(300);
  const [isResizing, setIsResizing] = useState(false);
  const [statset, setStatset] = useState(0);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      const X = (window.innerHeight/953)
      const Y = 655-(657*X)
      setStatset(Y)
      // setHeight(setNewhigh);
    };
    console.log(windowSize.height);
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
        if (isResizing) {
            const newHeight = event.clientY - document.getElementById('resizable-box').getBoundingClientRect().top;
            if (newHeight >= 300 && newHeight <= 700) {
                setHeight(newHeight+statset);
            }
        }
    };

    const handleMouseUp = () => {
        setIsResizing(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };
}, [isResizing]);

  useEffect(() => {
    // Disable scrolling on the entire page when the component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling on the entire page when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []); // This effect runs only once, similar to componentDidMount

  return (
    <div className='flex'>
      <Filter FilterOpened={FilterOpened} setFilterOpened={setFilterOpened} />
      <div className="flex-grow " id="resizable-box"style={{ height: `${height-statset}px`, position: 'relative' }}>
      <div
                style={{
                    height: '20px',
                    background: 'gray',
                    cursor: 'row-resize',
                    position: 'absolute',
                    bottom: -10,
                    width: '100%',
                    zIndex: 1000,
                }}
                onMouseDown={() => setIsResizing(true)}
            />
        <CanvasBar />
        <Canvas height={height} windowSize={windowSize}/>
        <ListInstance FilterOpened={FilterOpened} height={height} isResizing={isResizing} className=" bg-neutral-800"/>

      </div>
      <Operations />
    </div>
  );
};

export default Processes;