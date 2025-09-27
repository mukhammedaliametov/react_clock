import React, { useEffect, useState } from "react";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";

const Clock = () => {
  const [pause, setPause] = useState();
  const [date, setDate] = useState(new Date());

  const handlePause = () => setPause(!pause);

  useEffect(() => {
    pause
      ? ""
      : setTimeout(() => {
          setDate(new Date());
        }, 1000);
  });

  function padZero(num) {
    return (num < 10 ? "0" : "") + num;
  }

  let getMonth = date.getMonth() + 1;
  let monthName = '';

  switch(getMonth){
    case 1:
        monthName = 'Jan'
        break;
    case 2:
        monthName = 'Feb'
        break;
    case 3:
        monthName = 'Mar'
        break;
    case 4:
        monthName = 'Apr'
        break;
    case 5:
        monthName = 'May'
        break;
    case 6:
        monthName = 'Jun'
        break;
    case 7:
        monthName = 'Jul'
        break;
    case 8:
        monthName = 'Aug'
        break;
    case 9:
        monthName = 'Sep'
        break;
    case 10:
        monthName = 'Oct'
        break;
    case 11:
        monthName = 'Nov'
        break;
    case 12:
        monthName = 'Dec'
        break;
    default:
        monthName = 'Invalid Month';
  }

  return (
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center flex-col gap-[15px]">
      <p className="font-poppins tracking-[3.5px] text-[#22313f]">
       <span>{monthName}</span> <span>{date.getDate()}</span>, <span>{date.getFullYear()}</span>
      </p>
      <div className="bg-gradient-to-r from-white/60 to-white/20 rounded-[15px] flex items-center tracking-[3.5px] px-[25px] md:px-[35px] py-[15px] text-[40px] md:text-[65px] font-spacemono font-[700] text-[#22313f]">
        <span>{padZero(date.getHours() % 12)}</span>:
        <span>{padZero(date.getMinutes())}</span>:
        <span>{padZero(date.getSeconds())}</span>
        <span className="font-poppins font-[600] ml-[7px]">{date.getHours() % 12 ? 'PM' : 'AM'}</span>
      </div>
      <div onClick={handlePause}>
        <button className="flex items-center gap-[10px] text-[#22313f] font-poppins py-[10px] px-[20px] rounded-[10px] bg-[#ffffff8c] cursor-pointer">
          {pause ? (
            <FaRegCirclePlay className="text-[18px]" />
          ) : (
            <FaRegCirclePause className="text-[18px]" />
          )}{" "}
          {pause ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
};

export default Clock;
