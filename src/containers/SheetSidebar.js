import React from "react";
import table from "../assets/images/table.svg";
import puzzle from "../assets/images/puzzle-piece-01.svg";
import circle from "../assets/images/intersect-circle.svg";
import coin_stacked from "../assets/images/coins-stacked-01.svg";
import credit from "../assets/images/credit-card-02.svg";

const SheetSidebar = () => {
  return (
    <div className="w-[3.5%] px-[0.8rem] py-[0.5rem] border-1 border-r border-[#E5E5E5] h-screen">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-[1rem]">
          <img src={table} alt=""  />
          <img src={puzzle} alt="" />
          <img src={circle} alt="" />
        </div>
        <div className="flex flex-col gap-[1rem]">
            <img src={credit} alt=""/>
            <img src={coin_stacked} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default SheetSidebar;
