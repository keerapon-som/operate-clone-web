import React, { useEffect } from 'react';
import Filter from './filter/mainFilter';
import CanvasBar from './canvas/canvasBar';
import Canvas from './canvas/canvas';
import ListInstance from './listinstance/mainListinstance';
import './filter/layoutFilter.css'
import Operations from './operation/mainOperation';

const Processes = () => {
  const [FilterOpened, setFilterOpened] = React.useState(true)

  useEffect(() => {
    // Disable scrolling on the entire page when the component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling on the entire page when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []); // This effect runs only once, similar to componentDidMount

  return (
    <div className='flex '>
      <Filter FilterOpened={FilterOpened} setFilterOpened={setFilterOpened} />
      <div className="flex-grow ">
        <CanvasBar />
        <Canvas />
        <ListInstance FilterOpened={FilterOpened} className=" bg-neutral-800"/>
      </div>
      <Operations />
    </div>
  );
};

export default Processes;