import React, { useState } from "react";
import SheetHeader from "./SheetHeader";
import SheetSidebar from "./SheetSidebar";
import searchIcon from "../assets/images/search-sm.svg";
import rows from "../assets/images/rows-03.svg";
import columns from "../assets/images/columns-03.svg";
import filter from "../assets/images/filter-funnel-02.svg";
import sort from "../assets/images/switch-vertical-01.svg";
import star from "../assets/images/star-06.svg";
import share from "../assets/images/share.svg";
import download from "../assets/images/download.svg";
import deleteIcon from "../assets/images/deleteIcon.svg";
import inputColumn from "../assets/images/inputColumn.svg";
import actionColumn from "../assets/images/actionColumn.svg";
import company from "../assets/images/company.svg";
import play from "../assets/images/play_circle.svg";
import plus from "../assets/images/plus.svg";
import linkIcon from "../assets/images/linkIcon.svg";
import sizeIcon from "../assets/images/sizeAlert.svg";
import loadingIcon from "../assets/images/loadingIcon.svg";
import company1 from "../assets/images/company1.svg";
import company2 from "../assets/images/company2.svg";

const Sheet = () => {
  const tableData = [
    {
      dateTime: "Oct 12,2024 at 14:08 Pm",
      dataType: "Bitscale Evaulation - Account relevance",
      company: "Bitscale Evaulation - Account relevance",
      companyIcon: company1,
    },
    {
      dateTime: "Oct 12,2024 at 14:08 Pm",
      dataType: "Cell data size exceeds limit",
      company: "BMW Evaluation- Relevancy",
      companyIcon: company2,
    },
    {
      dateTime: "Oct 12,2024 at 14:08 Pm",
      dataType: "https://www.linkedin.com",
      company: "Google Evaluation- Relevancy",
      companyIcon: company1,
    },
    {
      dateTime: "Oct 12,2024 at 14:08 Pm",
      dataType: "Loading data, Please wait",
      company: "Apple Evaluation- Relevancy",
      companyIcon: company2,
    },
    {
      dateTime: "Oct 12,2024 at 14:08 Pm",
      dataType: "Loading data, Please wait",
      company: "Figma Evaluation- Relevancy",
      companyIcon: company1,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter tableData based on search input
  const filteredData = tableData.filter(
    (item) =>
      item.dataType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen">
      <SheetHeader />
      <div className="flex">
        <SheetSidebar />
        <div className="w-full">
          <div className="px-[1rem] py-[1rem] ">
            <div className="md:flex justify-between items-center">
              <div className="md:flex gap-[1rem] items-center">
                <div className="md:mb-0 mb-[0.5rem] flex gap-1 items-center rounded border border-[#D9D9D9] px-2 py-[0.1rem]">
                  <img
                    src={searchIcon}
                    alt="search"
                    className="w-[1.1rem] h-[1.1rem]"
                  />
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search"
                    type="search"
                    className="w-[100%] focus:outline-none px-[0.7rem] py-[0.2rem] rounded text-[0.9rem]"
                  />
                </div>
                <h1 className="text-[0.8rem] text-darkGray flex items-center gap-[0.3rem]">
                  <img src={rows} alt="" />
                  1/1 Row
                </h1>
                <h1 className="text-[0.8rem] text-darkGray flex items-center gap-[0.3rem]">
                  <img src={columns} alt="" />
                  3/3 Column
                </h1>
                <h1 className="text-[0.8rem] text-darkGray flex items-center gap-[0.3rem]">
                  <img src={filter} alt="" />0 Filter
                </h1>
                <h1 className="text-[0.8rem] text-darkGray flex items-center gap-[0.3rem]">
                  <img src={sort} alt="" />
                  Sort
                </h1>
              </div>
              <div className="flex items-center gap-[0.2rem] md:mt-0 mt-[0.5rem]">
                <button className="text-[0.8rem] py-[0.2rem] px-[0.4rem] text-white flex gap-[0.3rem] items-center rounded-md bg-darkGray">
                  <img src={star} alt="" />
                  Enrich
                </button>
                <img src={share} alt="" />
                <img src={download} alt="" />
                <img src={deleteIcon} alt="" />
              </div>
            </div>
          </div>

          {/* table */}
          <div className="w-[100%] border ">
            <table className="w-full">
              <tr className="bg-[#F6F6F6]">
                <th className="w-[2%]"></th>
                <th className="border w-[2%]"></th>
                <th className="bg-[#FEF2C7] border text-lightBlack text-[0.8rem] font-[500] p-2 w-[10%]">
                  <div className="flex items-center justify-left gap-2">
                    <img
                      src={inputColumn}
                      alt="Input Column"
                      className="w-4 h-4"
                    />
                    <span>Input Column</span>
                  </div>
                </th>
                <th className="border text-lightBlack text-[0.8rem] font-[500] p-2 w-[10%]">
                  <div className="flex items-center justify-left gap-2">
                    <img
                      src={actionColumn}
                      alt="Input Column"
                      className="w-4 h-4"
                    />
                    <span>Action Column</span>
                  </div>
                </th>
                <th className="border text-lightBlack text-[0.8rem] font-[500] p-2 w-[10%]">
                  <div className="flex items-center justify-left gap-2">
                    <img src={company} alt="Input Column" className="w-4 h-4" />
                    <span>Enrich Company</span>
                  </div>
                </th>
                <th className="border text-lightBlack text-[0.8rem] font-[500] p-2 w-[15%]">
                  <div className="flex items-center justify-left gap-2">
                    <img src={plus} alt="Input Column" className="w-4 h-4" />
                    <span>Add Column</span>
                  </div>
                </th>
              </tr>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className="border">
                    <td className="border w-[2%]">{index + 1}</td>
                    <td className="">
                      <img src={play} alt="" className="ml-[0.4rem]" />
                    </td>
                    <td className="px-[0.4rem] text-left border text-mediumGray text-[0.9rem] p-0">
                      {item.dateTime}
                    </td>

                    <td className="border px-[0.4rem] text-left text-mediumGray text-[0.9rem] w-[15%]">
                      {item.dataType.includes("Loading") ? (
                        <div className="flex gap-[0.4rem]">
                          <img src={loadingIcon} alt="" />
                          <i>{item.dataType} </i>{" "}
                        </div>
                      ) : item.dataType.includes("size") ? (
                        <div className="flex gap-[0.4rem]">
                          <img src={sizeIcon} alt="" />
                          <i>{item.dataType} </i>{" "}
                        </div>
                      ) : item.dataType.includes(".com") ? (
                        <a
                          href={`http://${item.dataType}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex gap-[0.4rem] text-blue-500"
                        >
                          <img src={linkIcon} alt="" /> {item.dataType}
                        </a>
                      ) : (
                        item.dataType
                      )}
                    </td>

                    <td className="px-[0.4rem] text-left border text-mediumGray text-[0.9rem]">
                      <div className="flex gap-[0.4rem]">
                        <img src={item.companyIcon} alt="" />
                        <span className="truncate" title={item.company}>
                          {item.company}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan="5"
                    className="text-left text-darkGray text-[0.9rem] px-[0.4rem]"
                  >
                    <div className="flex items-center gap-[0.5rem]">
                      <img src={plus} alt="w-4 h-4" />
                      <span>Add row</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheet;
