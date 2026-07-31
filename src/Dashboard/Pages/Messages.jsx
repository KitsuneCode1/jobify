import React, { useEffect, useState, useRef } from "react";
import messageLogo from "../../assets/message-logo.png";
import messageDelete from "../../assets/message-delete.svg";
import messageShare from "../../assets/message-share.svg";
import messageNote from "../../assets/message-note.svg";

const Messages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const rightMenuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        rightMenuRef.current &&
        !rightMenuRef.current.contains(event.target)
      ) {
        setIsRightMenuOpen(false);
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <h2 className="text-5xl font-[500] text-black px-2">Messages</h2>

      <div className="message-container bg-white flex flex-col xl:flex-row justify-between items-start rounded-xl min-h-full">
        <div
          className="message-left w-full xl:w-[40%]"
          style={{ borderRight: "1px solid #e3e1e1" }}
        >
          <div className="message-left-header px-4 py-5 flex justify-between items-center w-full pb-5">
            <h4 className="text-xl font-semibold text-[#244034]">Inbox</h4>
            <div className="relative" ref={dropDownRef}>
              <button
                className="cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <i className="fa-solid fa-ellipsis text-xl text-gray-600"></i>
              </button>

              <ul
                className={`absolute right-0 mt-1 w-[150px] bg-white border border-gray-200 rounded-lg shadow-md z-50 transition-all duration-200 ease-in-out ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
              >
                <li className="px-3 py-2 cursor-pointer text-sm">
                  <a href="#">Sent</a>
                </li>
                <li className="px-3 py-2 cursor-pointer text-sm">
                  <a href="#">Important</a>
                </li>
                <li className="px-3 py-2 cursor-pointer text-sm">
                  <a href="#">Draft</a>
                </li>
                <li className="px-3 py-2 cursor-pointer text-sm">
                  <a href="#" className="hover:text-red-500">
                    Trash
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form className="search-form w-full px-4 py-3 mr-6 relative border-none hidden lg:flex">
            <i className="fa-solid fa-magnifying-glass absolute top-[32px] right-10 text-black"></i>
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-10 rounded-full font-[300] bg-[rgba(0,0,0,0.05)] border-none shadow-none focus:outline-none pl-[20px] pr-[15px] h-[55px] text-base"
            />
          </form>

          <div className="py-6 space-y-6">
            <div className="justify-between gap-3 px-3 items-center mb-4 text-sm">
              <button className="bg-[#244034] text-sm text-white px-6 py-1 mb-3 rounded-full font-[500">
                All
              </button>
              <span className="text-black text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span> Read
              </span>
              <span className="text-black text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
                Unread
              </span>
              <span className="text-black text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                Primary
              </span>
            </div>

            <div style={{ borderTop: "1px solid #f3f3f3" }}>
              <div className="message-card relative px-8 py-5">
                <div className="message-card-header flex justify-between items-center pb-2">
                  <h3 className="text-md relative message-card-title message-card-title1 text-[rgba(63,99,77,0.8)] flex items-center gap-2">
                    Jenny Rio.
                  </h3>
                  <div className="date text-sm font-[300] text-[rgba(0,0,0,0.5)] uppercase">
                    Aug 22
                  </div>
                </div>
                <h2 className="text-lg text-[600] pb-2">
                  Work inquiry from google.
                </h2>
                <p className="text-sm text-[rgba(0,0,0,0.5)] font-[300] pb-3">
                  Hello, This is Jenny from google. We're the largest online
                  platform offer...
                </p>
                <span className="text-[rgba(0,0,0,0.5)] bg-[#f0f5f3] rounded-sm text-sm font-[300] py-1 px-3 b-3">
                  <i className="fa-regular fa-file-lines pr-2"></i>
                  Details.pdf
                </span>
              </div>

              <div
                className="message-card relative px-8 py-5 p-0 bg-[#f0f5f3]"
                style={{
                  borderLeft: "3px solid #779e86",
                  borderRight: "3px solid #779e86",
                }}
              >
                <div className="message-card-header flex justify-between items-center pb-2">
                  <h3 className="text-md relative message-card-title message-card-title1 text-[rgba(63,99,77,0.8)] flex items-center gap-2">
                    Hasan islam.
                  </h3>
                  <div className="date text-sm font-[300] text-[rgba(0,0,0,0.5)] uppercase">
                    May 22
                  </div>
                </div>
                <h2 className="text-lg text-[600] pb-2">Account Manager</h2>
                <p className="text-sm text-[rgba(0,0,0,0.5)] font-[300] pb-3">
                  Hello, Greeting from Uber, Hope you doing great. I am
                  approaching you.
                </p>
                <div className="flex gap-4">
                  <span className="text-[rgba(0,0,0,0.5)] bg-white rounded-sm text-sm font-[300] py-1 px-3 b-3">
                    <i className="fa-regular fa-file-lines pr-2"></i>
                    Details.pdf
                  </span>
                  <span className="text-[rgba(0,0,0,0.5)] bg-white rounded-sm text-sm font-[300] py-1 px-3 b-3">
                    <i className="fa-regular fa-file-lines pr-2"></i>
                    Form.pdf
                  </span>
                </div>
              </div>

              <div className="message-card relative px-8 py-3 p-0">
                <div className="message-card-header flex justify-between items-center pb-2">
                  <h3 className="text-md relative message-card-title message-card-title1 text-[rgba(63,99,77,0.8)] flex items-center gap-2">
                    Jannatul Ferdaus.
                  </h3>
                  <div className="date text-sm font-[300] text-[rgba(0,0,0,0.5)] uppercase">
                    Jun 22
                  </div>
                </div>
                <h2 className="text-lg text-[600] pb-2">
                  Product Designer Opportunities
                </h2>
                <p className="text-sm text-[rgba(0,0,0,0.5)] font-[300] pb-3">
                  Hello, this is Jannat from HuntX. We offer business solution
                  to our client.
                </p>
              </div>

              <div className="message-card relative px-8 py-3">
                <div className="message-card-header flex justify-between items-center pb-2">
                  <h3 className="text-md relative message-card-title message-card-title1 text-[rgba(63,99,77,0.8)] flex items-center gap-2">
                    Jackie Chan.
                  </h3>
                  <div className="date text-sm font-[300] text-[rgba(0,0,0,0.5)] uppercase">
                    Nov 22
                  </div>
                </div>
                <h2 className="text-lg text-[600] pb-2">
                  Hunting Marketing Specialist
                </h2>
                <p className="text-sm text-[rgba(0,0,0,0.5)] font-[300] pb-3">
                  Hunting Marketing Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="message-right w-full xl:w-[60%]">
          <div className="message-right-header p-10 flex justify-between items-center w-full pb-5">
            <div className="flex items-center">
              <img src={messageLogo} alt="" />
              <div className="pl-3">
                <div className="text-lg font-[600] text-[#254035]">
                  Payoneer
                </div>
                <p className="text-[rgba(0,0,0,0.4)] text-base font-[300]">
                  Payoneer@inquiry.com
                </p>
              </div>
            </div>
            <div className="email-info">
              <div className="time uppercase text-[rgba(0,0,0,0.4)] font-[300] text-base p-2">
                4:45 (3 hours ago)
              </div>
              <div className="flex justify-end items-center gap-5">
                <img src={messageDelete} alt="" className="w-5" />
                <img src={messageShare} alt="" className="w-6" />
                <div className="relative" ref={rightMenuRef}>
                  <button onClick={() => setIsRightMenuOpen((prev) => !prev)}>
                    <i className="fa-solid fa-ellipsis-vertical text-lg text-gray-400"></i>
                  </button>
                  {isRightMenuOpen && (
                    <ul
                      className="absolute right-0 mt-2 w-40 bg-white z-50 text-sm"
                      style={{
                        border: "1px solid #f1f1f1",
                        boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
                        borderRadius: "8px",
                      }}
                    >
                      <li className="px-4 py-2 cursor-pointer text-sm text-[#6a6a6a]">
                        Reply
                      </li>
                      <li className="px-4 py-2 cursor-pointer text-sm text-[#6a6a6a]">
                        Forward
                      </li>
                      <li className="px-4 py-2 cursor-pointer text-sm text-[#6a6a6a]">
                        Block
                      </li>
                      <li className="px-4 py-2 cursor-pointer text-sm hover:text-red-500 text-[#6a6a6a]">
                        Delete
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative p-10 flex flex-col items-start w-full"
            style={{
              borderTop: "1px solid rgba(243,243,243)",
              borderBottom: "1px solid rgba(243,243,243)",
            }}
          >
            <h2 className="text-lg font-[600] pb-5">Account Manager</h2>

            <p className="font text-sm text-[#000000b3] pb-4">
              After that we need to redesign our landing page because the
              current one does not carry any information. If you have any
              question don't hesitate to contact us.
            </p>
            <p className="font text-sm text-[#000000b3] pb-4">
              What we need from you to start:
            </p>
            <ul>
              <li className="font-[300] text-sm text-[#000000b3] pb-1">
                {" "}
                - Your CV
              </li>
              <li className="font-[300] text-sm text-[#000000b3] pb-5">
                {" "}
                - Verified GOV ID
              </li>
            </ul>
            <p className="font-[300] text-sm text-[#000000b3] pb-5">
              Hello, Greeting from Uber. Hope you're doing great. I am
              approaching you because our company needs a great & talented
              account manager.
            </p>
            <p className="font-[300] text-sm text-[#000000b3] pb-5">
              Our Telegram{" "}
              <a href="#" className="font-[500] text-[#3f634d]">
                @payoneer
              </a>
            </p>
          </div>

          <div className="flex justify-between items-center gap-3 px-10 py-5">
            <h6 className="text-lg font-[500]">2 Attachment</h6>
            <a href="#" className="text-sm text-[#31795a] font-[500]">
              Download All
            </a>
          </div>
          <div className="space-y-4 px-10 py-5">
            <div className="flex flex-col md:flex-row mb-10 gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-md text-sm border">
                <div className="w-[37px] h-[37px] flex justify-center items-center bg-[#f0f5f3] rounded-full object-contain p-2">
                  <img src={messageNote} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-[300] text-[#254035]">
                    Project-details.pdf
                  </span>
                  <span className="text-xs font-[300] text-[rgba(36,64,52,0.5)] text-[13px]">
                    2.3mb
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-md text-sm border">
                <div className="w-[37px] h-[37px] flex justify-center items-center bg-[#f0f5f3] rounded-full object-contain p-2">
                  <img src={messageNote} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-[300] text-[#254035]">Form.pdf</span>
                  <span className="text-xs font-[300] text-[rgba(36,64,52,0.5)] text-[13px]">
                    1.3mb
                  </span>
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div className="border border-gray-300 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 text-sm text-gray-600">
                <div>
                  <span className="text-base text-[#254035] font-[400]">
                    To
                  </span>
                  <span className="ml-2 text-gray-500 font-[300]">
                    payoneer@inquiry.com
                  </span>
                </div>
                <div className="space-x-4">
                  <span className="hover:underline text-base cursor-pointer">
                    Cc
                  </span>
                  <span className="hover:underline text-base cursor-pointer">
                    Bcc
                  </span>
                </div>
              </div>

              <textarea
                rows="5"
                className="w-full p-4 font-[300] text-sm focus:outline-none resize-none"
                placeholder="Write your message"
                defaultValue={`Hi, Mary Cooper!
Thanks for your invitation for the account manager position of your company. I will get back to you soon with all the required documents.`}
              ></textarea>

              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
                <div className="flex items-center gap-4 text-gray-500 text-lg">
                  <i className="fa-solid fa-paperclip cursor-pointer"></i>
                  <i className="fa-regular fa-face-smile cursor-pointer"></i>
                  <i className="fa-regular fa-image cursor-pointer"></i>
                </div>

                <div className="flex items-center gap-3">
                  <i className="fa-regular fa-trash-can text-lg 
                  text-gray-400 cursor-pointer"></i>
                  <button className="bg-[#244034] hover:bg-[#d2f34c] transition-color duration-300 text-white hover:text-[#244034] text-sm px-5 py-2 rounded-full">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
