import { useState, useEffect } from 'react';
import Filter from './filter/mainFilter';
import CanvasBar from './canvas/canvasBar';
import Canvas from './canvas/canvas';
import ListInstance from './listinstance/mainListinstance';
import './filter/layoutFilter.css'
import Operations from './operation/mainOperation';
import { useNavigate } from 'react-router-dom';

const Processes = () => {
  const navigate = useNavigate();

  const [FilterOpened, setFilterOpened] = useState(true)
  const [height, setHeight] = useState(300);
  const [isResizing, setIsResizing] = useState(false);
  const [statset, setStatset] = useState(655-(657*window.innerHeight/953));

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [FilteredSetup, setFilteredSetup] = useState({
    Name: {"bpmnProcessId": "", "name": ""},
    Version: "",
    Flownode: "",
    InstanceState: {
      RunningInstances: true,
      Active: true,
      Incidents: true,
      FinishedInstances: false,
      Completed: false,
      Canceled: false
  },
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      
      setStatset(655-(657*window.innerHeight/953))
      // setHeight(setNewhigh);
    };
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

  useEffect(() => {
    const navigateString = "/processes?name="
    // const navigateString = "/processes?name=" + FilteredSetup.Name.map((item) => item.value).join(",") + "&version=" + FilteredSetup.Version.map((item) => item.value).join(",") + "&flownode=" + FilteredSetup.Flownode.map((item) => item.value).join(",") + "&runningInstances=" + FilteredSetup.InstanceState.RunningInstances + "&active=" + FilteredSetup.InstanceState.Active + "&incidents=" + FilteredSetup.InstanceState.Incidents + "&finishedInstances=" + FilteredSetup.InstanceState.FinishedInstances + "&completed=" + FilteredSetup.InstanceState.Completed + "&canceled=" + FilteredSetup.InstanceState.Canceled;
    navigate(navigateString);
  }, [FilteredSetup]);

  return (
    <div className='flex'>
      <Filter setFilteredSetup={setFilteredSetup} FilteredSetup={FilteredSetup} FilterOpened={FilterOpened} setFilterOpened={setFilterOpened} />
      <div className="flex-grow " id="resizable-box"style={{ height: `${height-statset}px`, position: 'relative' }}>
      <div
                style={{
                    height: '20px',
                    // background: 'gray',
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