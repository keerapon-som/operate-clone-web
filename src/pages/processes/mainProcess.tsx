import { useState, useEffect } from 'react';
import Filter from './filter/mainFilter';
import CanvasBar from './canvas/canvasBar';
import Canvas from './canvas/canvas';
import ListInstance from './listinstance/mainListinstance';
import './filter/layoutFilter.css'
import Operations from './operation/mainOperation';
import { useNavigate, useLocation } from 'react-router-dom';

const Processes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [ProcessComponentControl, setProcessComponentControl] = useState({
    Filter: true,
    CanvasBar: true,
    Canvas: true,
    ListInstance: true,
    Operations: true
  });
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
    Version: 0,
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
    const params = new URLSearchParams(location.search);
    setFilteredSetup({
      Name: { bpmnProcessId: params.get('process') || '', name: '' },
      Version: parseInt(params.get('version') || '0', 10),
      Flownode: params.get('flownode') || '',
      InstanceState: {
        RunningInstances: params.get('RunningInstances') === 'false',
        Active: params.get('active') === 'true',
        Incidents: params.get('incidents') === 'true',
        FinishedInstances: params.get('FinishedInstances') === 'false',
        Completed: params.get('completed') === 'false',
        Canceled: params.get('canceled') === 'false',
      },
    });
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

  // useEffect(() => {
  //   // Disable scrolling on the entire page when the component mounts
  //   document.body.style.overflow = 'hidden';

  //   // Re-enable scrolling on the entire page when the component unmounts
  //   return () => {
  //     document.body.style.overflow = 'visible';
  //   };
  // }, []); // This effect runs only once, similar to componentDidMount

  const handleNavigate = () => {
    const params = {
      process: FilteredSetup.Name.bpmnProcessId,
      version: FilteredSetup.Version.toString(),
      flownode: FilteredSetup.Flownode,
      // RunningInstances: FilteredSetup.InstanceState.RunningInstances.toString(),
      active: FilteredSetup.InstanceState.Active.toString(),
      incidents: FilteredSetup.InstanceState.Incidents.toString(),
      // FinishedInstances: FilteredSetup.InstanceState.FinishedInstances.toString(),
      completed: FilteredSetup.InstanceState.Completed.toString(),
      canceled: FilteredSetup.InstanceState.Canceled.toString(),
    };
  
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(
        ([_, value]) => value !== null && value !== "" && value !== "false"
      )
    );
  
    const queryString = new URLSearchParams(filteredParams).toString();
  
    navigate(`/processes?${queryString}`);
  };

  useEffect(() => {
    handleNavigate();
  }, [FilteredSetup]);

  return (
    <div className='flex'>
      {ProcessComponentControl.Filter ? <Filter setFilteredSetup={setFilteredSetup} FilteredSetup={FilteredSetup} FilterOpened={FilterOpened} setFilterOpened={setFilterOpened} /> : null}
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