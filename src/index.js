import { useState, useEffect } from 'react';
import moment from 'moment';

const useClock = (format = "DD/MM/YYYY HH:mm:ss", period = 1000) => {
  const [time, setTime] = useState(moment());
  
  useEffect(() => {
    setTimeout(() => {
      setTime(moment());
    }, period)
  }, [time]);

  return {
    time: time.format(format),
    raw: time
  }};

export default useClock;