import React, { useEffect, useState } from 'react';
import './cloock.css';

const CustomClock = ({ text, timeZone }) => {
  const [hourRotate, setHourRotate] = useState(0);
  const [minutsRotate, setMinutsRotate] = useState(0);
  const [secRotate, setSecondRotate] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updatetime = () => {
      // Get current time and calculate degree for clock hands
      const date = new Date().toLocaleString('en-US', { timeZone: timeZone });
      const time = date.split(', ')[1];
      setCurrentTime(time);

      const timeParts = time.split(':');
      const hours = parseInt(timeParts[0]);
      const minutes = parseInt(timeParts[1]);
      const seconds = parseInt(timeParts[2]);

      const secToDeg = (seconds / 60) * 360;
      const minToDeg = (minutes / 60) * 360;
      const hrToDeg = ((hours % 12 + minutes / 60) / 12) * 360;

      setHourRotate(hrToDeg);
      setMinutsRotate(minToDeg);
      setSecondRotate(secToDeg);
    };

    const intervalId = setInterval(updatetime, 1000);
    updatetime();

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <div className="container mb-20 mt-10">
      <div className="clock">
        <label className="--i-1"><span>I</span></label>
        <label className="--i-2"><span>II</span></label>
        <label className="--i-3"><span>III</span></label>
        <label className="--i-4"><span>IIII</span></label>
        <label className="--i-5"><span>V</span></label>
        <label className="--i-6"><span>VI</span></label>
        <label className="--i-7"><span>VII</span></label>
        <label className="--i-8"><span>VIII</span></label>
        <label className="--i-9"><span>IX</span></label>
        <label className="--i-10"><span>X</span></label>
        <label className="--i-11"><span>XI</span></label>
        <label className="--i-12"><span>XII</span></label>
        <div className="indecator">
          <span className="hand hour" style={{ transform: `rotate(${hourRotate}deg)` }}></span>
          <span className="hand minuts" style={{ transform: `rotate(${minutsRotate}deg)` }}></span>
          <span className="hand second" style={{ transform: `rotate(${secRotate}deg)` }}></span>
        </div>
      </div>
      <div className="">
        <div className="my-1  w-full text-sm text-white">
          {currentTime}
        </div>
        <div className="text-lg text-white">
          {text}
        </div>
      </div>
    </div>
  );
};

export default CustomClock;
