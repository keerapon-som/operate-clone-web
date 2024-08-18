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
  const [height, setHeight] = useState(500);
  const [isResizing, setIsResizing] = useState(false);
  // const [statset, setStatset] = useState(655-(657*window.innerHeight/953));
  const [oldqueryString, setOldqueryString] = useState("");

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
      
      // setStatset(655-(657*window.innerHeight/953))
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
            if (newHeight >= 200 && newHeight <= 700) {
                setHeight(newHeight);
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
        ([_, value]) => value !== null && value !== "" && value !== "false" && value !== "0"
      )
    );
  
    const queryString = new URLSearchParams(filteredParams).toString();
    
    if (queryString !== oldqueryString ) {
      navigate(`/processes?${queryString}`);
      console.log("eiei navigate", queryString);
      setOldqueryString(queryString);
    }
  };

  useEffect(() => {
    handleNavigate();
  }, [FilteredSetup]);
  // style={{ height: `${height-statset}px`, position: 'relative' }}
  return (
    <div className='flex'>
      {ProcessComponentControl.Filter ? <Filter setFilteredSetup={setFilteredSetup} FilteredSetup={FilteredSetup} FilterOpened={FilterOpened} setFilterOpened={setFilterOpened} /> : null}
      {/* ไม่เห็นต้องกำหนดความสูงตรงนี้เลย */}
      <div className="flex-grow" id="resizable-box" >

        <CanvasBar />

        <Canvas height={height} windowSize={windowSize}/>

        <div
                style={{
                    // height: '5px',
                    // background: 'blue',
                    cursor: 'row-resize',
                    // position: 'absolute',
                    // bottom: `${900-height}px`,
                    // width: '100%',
                    // zIndex: 1000,
                }}
                onMouseDown={() => setIsResizing(true)}
                className={isResizing ?`p-1 border-t border-state-700 bg-blue-500` : `p-1 border-t border-state-700 bg-neutral-800`}
            />
        <div className={`p-3 border-t border-state-700 bg-neutral-800`}>
            <label className="text-white font-medium text-sm px-2 border-r border-neutral-700 ">Process Instances   -   1 result</label>
            </div>

        <ListInstance FilterOpened={FilterOpened} height={height} isResizing={isResizing} className=" bg-neutral-800 overflow-auto " style={{ height: `calc(${windowSize.height-height-103}px)` }}/>
      </div>
      
      {/* <Operations /> */}
      
    </div>
    
  );
};

export default Processes;