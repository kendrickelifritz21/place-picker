import { useEffect, useState } from 'react';

export default function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('test');
      setRemainingTime(prevTime => prevTime - 20)
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress value={remainingTime} max={timer}/>
  );
}