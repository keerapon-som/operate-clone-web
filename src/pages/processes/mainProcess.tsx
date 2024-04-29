import React from 'react';
import Filter from './filter/mainFilter';
import CanvasBar from './canvas/canvasBar';
import Canvas from './canvas/canvas';
import ListInstance from './listinstance/mainListinstance';
import './filter/layoutFilter.css'
import Operations from './operation/mainOperation';

const Processes = () => {
    const [FilterOpened, setFilterOpened] = React.useState(true)

  return (
    <div className='flex'>
      <Filter FilterOpened={FilterOpened} setFilterOpened={setFilterOpened}/>
      <div className="flex-grow ">
        <CanvasBar/>
        <Canvas/>
        <ListInstance FilterOpened={FilterOpened}/>
      </div>
      <Operations/>
    </div>
    
  )
}

export default Processes;