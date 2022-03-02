import { useEffect, useState } from 'react';

export const Counter = ({ min, max }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    initialize();
  }, []);

  const decrementCount = () => {
    if (count !== min) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    if (count !== max) {
      setCount(count + 1);
    }
  };

  function initialize() {
    if (min > 0) {
      setCount(min);
    }
    if (max < 0) {
      setCount(max);
    }
  }

  return (
    <div onLoad={initialize} className="bg-gray-300 p-4 rounded-md m-3 text-center">
      <div>
        <p className="inline-flex m-4">Min: {min}</p>
        <p className="inline-flex m-4">Max: {max}</p>
      </div>
      <div className="inline-flex m-2">
        <button onClick={decrementCount} className="m-4 rounded-md bg-red-500 p-4 text-white">
          Decrement
        </button>
        <div className="inline-flex p-6 rounded-md bg-white border-4 border-black">{count}</div>
        <button onClick={incrementCount} className="m-4 rounded-md bg-green-600 p-4 text-white">
          Increment
        </button>
      </div>
    </div>
  );
};
