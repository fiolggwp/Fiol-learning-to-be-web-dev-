import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); // useState to manage count state

  const formatCount = () => {
    return  count <= 0 ? 'empty' : count;
  };

  const getClasses = () => {
    let classes = 'badge m-2 ';
    classes += count <= 0 ? 'text-bg-warning ' : 'text-bg-primary';
    return classes;
  };

  const countIncrement = () => {
    setCount(prevCount => prevCount + 109); // Use setCount to update the state
  };

  const countDecrement = () => {
    setCount(prevCount => prevCount - 1); // Use setCount to update the state
  };
  
  return (
    <>

      <span className={getClasses()}>{formatCount()}</span>
      <button className='btn btn-primary btn-sm m-2' onClick={countIncrement}>
        +
      </button>

      <button className='btn btn-primary btn-sm m-2' onClick={countDecrement}>
        -
      </button>
    </>
  );
}

export default App;
