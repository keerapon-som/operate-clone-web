import { useState, useEffect } from 'react';
// import Filter from './filter/mainFilter';
import CanvasBar from './canvas/canvasBar';
import Canvas from './canvas/canvas';
import BottomBar from './history_variables/bottombar'
// import ListInstance from './listinstance/mainListinstance';
// import './filter/layoutFilter.css'
import { useNavigate, useLocation } from 'react-router-dom';

const Procesinstance = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [height, setHeight] = useState(30);
  const [isResizing, setIsResizing] = useState(false);
  // const [statset, setStatset] = useState(655-(657*window.innerHeight/953));


  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });



  useEffect(() => {
    // const params = new URLSearchParams(location.search);
    // setFilteredSetup({
    //   Name: { bpmnProcessId: params.get('process') || '', name: '' },
    //   Version: parseInt(params.get('version') || '0', 10),
    //   Flownode: params.get('flownode') || '',
    //   InstanceState: {
    //     RunningInstances: params.get('RunningInstances') === 'false',
    //     Active: params.get('active') === 'true',
    //     Incidents: params.get('incidents') === 'true',
    //     FinishedInstances: params.get('FinishedInstances') === 'false',
    //     Completed: params.get('completed') === 'false',
    //     Canceled: params.get('canceled') === 'false',
    //   },
    // });
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
        const newHeight = (event.clientY-50)/(window.innerHeight-50)*100;
        if (newHeight >= 20 && newHeight <= 80) {
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

  // const handleNavigate = () => {
  //   const params = {
  //     process: FilteredSetup.Name.bpmnProcessId,
  //     version: FilteredSetup.Version.toString(),
  //     flownode: FilteredSetup.Flownode,
  //     // RunningInstances: FilteredSetup.InstanceState.RunningInstances.toString(),
  //     active: FilteredSetup.InstanceState.Active.toString(),
  //     incidents: FilteredSetup.InstanceState.Incidents.toString(),
  //     // FinishedInstances: FilteredSetup.InstanceState.FinishedInstances.toString(),
  //     completed: FilteredSetup.InstanceState.Completed.toString(),
  //     canceled: FilteredSetup.InstanceState.Canceled.toString(),
  //   };
  
  //   const filteredParams = Object.fromEntries(
  //     Object.entries(params).filter(
  //       ([_, value]) => value !== null && value !== "" && value !== "false" && value !== "0"
  //     )
  //   );
  
  //   const queryString = new URLSearchParams(filteredParams).toString();
    
  //   if (queryString !== oldqueryString ) {
  //     navigate(`/processes?${queryString}`);
  //     console.log("eiei navigate", queryString);
  //     setOldqueryString(queryString);
  //   }
  // };

  // useEffect(() => {
  //   handleNavigate();
  // }, [FilteredSetup]);
  // style={{ height: `${height-statset}px`, position: 'relative' }}
  return (
    <div className='flex flex-1'>
      {/* {ProcessComponentControl.Filter ? <Filter setFilteredSetup={setFilteredSetup} FilteredSetup={FilteredSetup} FilterOpened={FilterOpened} setFilterOpened={setFilterOpened} /> : null} */}
      {/* ไม่เห็นต้องกำหนดความสูงตรงนี้เลย */}
      <div className="flex-grow" id="resizable-box" >
        <div >
        <CanvasBar />
        <Canvas height={height} windowSize={windowSize}/>
        </div>
        <div
                style={{
                    height: '0px',
                    background: 'blue',
                    cursor: 'ns-resize',
                    position: 'relative',
                    justifyContent: 'center',
                    // bottom: `${900-height}px`,
                    // width: '100%',
                    // zIndex: 1000,
                }}
                onMouseDown={() => setIsResizing(true)}
                // className={isResizing ?`p-1 border-t border-state-700 bg-blue-500` : `p-1 border-t border-state-700 bg-neutral-800`}
            >
              <div className={isResizing ? `border-2 border-blue-500` : `border-2 border-state-700`}></div>
            </div>
            <div className='flex bg-neutral-800 ' style={{ height: `calc(${windowSize.height-height-53}px)` }}>
              <BottomBar/>
            </div>
            
                
        {/* <ListInstance FilterOpened={FilterOpened} height={height} isResizing={isResizing} className=" bg-neutral-800 overflow-auto " style={{ height: `calc(${windowSize.height-height-103}px)` }}/> */}
      </div>
      
      {/* <Operations /> */}
      
    </div>
    
  );
};

export default Procesinstance;