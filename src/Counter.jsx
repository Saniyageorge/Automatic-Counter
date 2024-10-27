import React, { useState, useEffect } from 'react';
import './App.css'; // Import external CSS for styling

function Counter() {
  const [count, setCount] = useState(0);  // State to hold the counter value
  const [isRunning, setIsRunning] = useState(true);  // State to track if the counter is running (starts automatically)

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [isRunning]);

  // Stop the counter
  const handleStop = () => {
    setIsRunning(false);
  };

  // Reset the counter
  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Automatic Counter</h1>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={handleStop} className="btn stop-btn">Stop</button>
        <button onClick={handleReset} className="btn reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default Counter;
