import React, { useEffect, useState } from 'react';

const PlayerFooter = () => {
  const [time, setTime] = useState<any>();

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div></div>;
};

export default PlayerFooter;
