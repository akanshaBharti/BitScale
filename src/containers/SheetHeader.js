import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import profile from "../assets/images/profile.svg";

const SheetHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [isAutoSaveToggled, setisAutoSaveToggled] = useState(true);

  const handleAutoSaveToggle = () => {
    setisAutoSaveToggled(!isAutoSaveToggled);
  };
  return (
    <div className="py-[0.6rem] px-[1rem] bg-white border-1 border-b border-[#E5E5E5]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[1rem]">
          <FiArrowLeft />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Name of the file"
            className="focus:outline-none focus:border-transparent text-lightGray px-[0.2rem] py-[0.1rem]"
          />
        </div>
        <div className="flex gap-[1rem] items-center">
          {/* auto save toggle */}
          <div className="flex items-center gap-2">
            {/* create more toggle */}
            <div
              onClick={handleAutoSaveToggle}
              className={`w-[2rem] h-[1rem] flex items-center rounded-full p-[0.2rem] cursor-pointer ${
                isAutoSaveToggled
                  ? "border-1 border-black bg-[#0E9F6E]"
                  : "border-1 border-black bg-pink-100"
              }`}
            >
              <div
                className={`h-3 w-3 rounded-full  shadow-md transform ${
                  isAutoSaveToggled
                    ? "translate-x-3  bg-white border-[#0E9F6E]"
                    : "translate-x-0  bg-[#0E9F6E]"
                }`}
              ></div>
            </div>
            <button className="text-[#0E9F6E] text-[0.8rem] rounded-md font-[500]">
              Auto Save
            </button>
          </div>
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SheetHeader;
