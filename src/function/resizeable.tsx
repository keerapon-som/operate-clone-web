import { Resizable } from 'react-resizable';

const Resizeable = ({ children }) => {
  return (
    <Resizable width={200} height={200}>
      <div style={{ width: '100%', height: '100%' }}>
        {children}
      </div>
    </Resizable>
  );
};

export default Resizeable;