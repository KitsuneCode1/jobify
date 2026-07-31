import React, { useState, useRef, useEffect } from "react";
import bookmark from "../assets/bookmark.svg";
import eye from "../assets/eye.svg";
import userIcon from "../assets/usericon.svg";
import write from "../assets/write.svg";
import graph from "../assets/main-graph.png";

import postJob1 from "../assets/postedjob-icon-01.webp";
import postJob2 from "../assets/postedjob-icon-02.webp";
import postJob3 from "../assets/postedjob-icon-03.webp";
import postJob4 from "../assets/postedjob-icon-04.webp";
import postJob5 from "../assets/postedjob-icon-05.webp";
import postJob6 from "../assets/postedjob-icon-06.webp";

const MainContent = () => {
  const [activeActionIndex, setActiveIndex] = useState(null);
  const dropDownRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !dropDownRefs.current.some((ref) => ref && ref.contains(event.target))
      ) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const jobs = [
    "Web & Mobile Prototype Designer...",
    "Document Writer",
    "Outbound Call Service",
    "Product Designer",
  ];

  const postedJob = [
    { icon: postJob1, title: "Fixed-price", location: "USA, Palo Alto" },
    { icon: postJob2, title: "Fulltime", location: "USA, New York" },
    { icon: postJob3, title: "Part time", location: "USA, San Jose" },
    { icon: postJob4, title: "Freelance", location: "USA, Cupertion" },
    { icon: postJob5, title: "Part time", location: "USA, Redmond" },
    { icon: postJob6, title: "Fulltime", location: "USA, Menlo Park" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  const handleSelect = (job) => {
    setSelectedJob(job);
    setIsOpen(false);
  };
  
  return (
    <>
      <div>
        <h2 className="text-4xl font-[500] text-[#244034] pb-4">Dashboard!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-6 gap-10 py-5">
          {[
            { value: "1.1k", label: "Total Visitor", icon: userIcon },
            { value: "05", label: "Shortlisted", icon: bookmark },
            { value: "2.1k", label: "Views", icon: eye },
            { value: "10", label: "Applied Jobs", icon: write },
          ].map((item, idx) => (
            <div
              key={idx}
              className="dashboard-item shadow-[0_6px_6px_rgba(0,0,0,0.2)] bg-white rounded-[12px] total-visior flex items-start justify-between relative"
            >
              <div className="flex-col items-start z-[9]">
                <div className="text-5xl mb-1 font-semibold text-[#244034]">
                  {item.value}
                </div>
                <span className="text-lg font-[300] text-[rgba(0,0,0,.5)]">
                  {item.label}
                </span>
              </div>
              <div className="bg-[#d2f34c] rounded-full w-10 h-10 flex items-center justify-center z-[9]">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-5 h-5 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-6 gap-10 pt-14">
          <div className="bg-white rounded-md shadow-sm card-item">
            <h2
              className="font-semibold header-text"
              style={{ borderBottom: "1px solid #e3f0eb" }}
            >
              Job Views
            </h2>
            <div className="header-body-content">
              <div className="relative w-full flex items-center flex-col gap-3">
                <div className="w-full flex items-center gap-3 mb-10">
                  <label className="flex items-center font-semibold text-[#183b56] mb-1">
                    Jobs:
                  </label>
                  <div
                    className="relative border-2 border-[#3f634d] px-3 py-2 rounded-md cursor-pointer flex w-full justify-between items-center"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="text-sm text-[#183b56] font-[300]">
                      {selectedJob}
                    </span>
                    <svg
                      className={`w-4 h-4 ml-2 transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 9l-7-7-7-7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>

                  {isOpen && (
                    <ul className="absolute z-10 w-full mt-2 top-[40px] font-[300] bg-white border border-[#d1d5db] rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {jobs.map((job, index) => (
                        <li
                          key={index}
                          className={`px-4 py-3 text-sm font-[300] cursor-pointer hover:bg-[#f4f4f4] ${selectedJob === job ? "text-green-500 bg-[rgba(36,64,52,.05)]" : "text-[#183b56]"}`}
                          onClick={() => handleSelect(job)}
                        >
                          {job}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="graph-image h-[350px] w-full">
                  <img
                    src={graph}
                    alt="graph-image"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-sm h-full card-item">
            <h2
              className="font-semibold header-text"
              style={{ borderBottom: "1px solid #e3f0eb" }}
            >
              Posted Jobs
            </h2>
            <ul className="w-full header-body-content space-y-7">
              {postedJob.map((job, index) => (
                <li
                  key={index}
                  className="flex justify-between items-start w-full"
                >
                  <div className="job-title flex items-center">
                    <img
                      src={job.icon}
                      alt="post-job-icon"
                      className="w-10 h-10"
                    />
                    <div className="ps-2">
                      <h6 className="font-[400] text-md">
                        <a
                          href="#"
                          className="hover:text-[#31795a] hover:underline transition-colors duration-300"
                        >
                          {job.title}
                        </a>
                      </h6>
                      <span className="text-[rgba(36,64,52,.5)] font-[300] text-md">
                        {job.title}. {job.location}
                      </span>
                    </div>
                  </div>
                  <div
                    className="relative"
                    ref={(el) => (dropDownRefs.current[index] = el)}
                  >
                    <div
                      className="job-action cursor-pointer"
                      onClick={() =>
                        setActiveIndex((prev) =>
                          prev === index ? null : index,
                        )
                      }
                    >
                      <i className="fa-solid fa-ellipsis text-xl text-[rgba(36,64,52,.5)]"></i>
                    </div>
                    <ul
                      className={`absolute left-[-180px] top-[20px] text-start text-sm mt-2 w-[200px] bg-white rounded-md shadow-md p-2 space-y-2 z-10 transition-all duration-300 ease-in-out ${activeActionIndex === index ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                    >
                      <li className="py-2 px-3 hover:bg-gray-100 cursor-pointer hover:rounded-md text-[#244034]">
                        View Job
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer hover:rounded-md text-[#244034]">
                        Archive
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer hover:rounded-md text-[#244034]">
                        Delete
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
