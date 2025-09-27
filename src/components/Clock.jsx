import React, { useState } from "react";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";

const Clock = () => {
  const [pause, setPause] = useState();
  const handlePause = () => setPause(!pause);

  const date = new Date();

  return (
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center flex-col gap-[15px]">
      <div className="bg-gradient-to-r from-white/60 to-white/20 rounded-[15px] px-[40px] py-[15px] text-[65px] font-spacemono font-[700] tracking-[10px] text-[#22313f]">
        <span>{date.getHours()}</span>:<span>{date.getMinutes()}</span>:<span>{date.getSeconds()}</span>
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
