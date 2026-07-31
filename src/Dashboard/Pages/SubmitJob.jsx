import React from "react";

const SubmitJob = () => {
  return (
    <>
      <h2 className="text-4xl font-[500] text-black py-2">Post a New Job</h2>
      <div className="w-full bg-white p-10 px-6 rounded-xl shadow-md mt-10 profile-container">
        <h3 className="text-3xl pb-4 text-[#3c8968]">Job Details</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2 mb-2">
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Employer Name*
            </label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="mb-2 md:col-span-2">
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Job Description*
            </label>
            <textarea
              rows="8"
              placeholder="Write Something About Your Company..."
            ></textarea>
            Brief description. URLs will be clickable.
          </div>
          <div>
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Job Category*
            </label>
            <div className="relative w-full">
              <select
                className="w-full p-2 tracking-[-0.16px] border-[#e5e5e5] border rounded-[7px] text-[1rem] text-[#3f634d] font-[200] px-4 pr-10 appearance-none focus:outline-none cursor-pointer"
                defaultValue="Designer"
              >
                <option>Designer</option>
                <option>It & Development</option>
                <option>Web & Mobile Dev</option>
                <option>Writing</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#3f634d]">
                <svg
                  xmlns="http://ww.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Job Type*
            </label>
            <div className="relative w-full">
              <select
                className="w-full p-2 tracking-[-0.16px] border-[#e5e5e5] border rounded-[7px] text-[1rem] text-[#3f634d] font-[200] px-4 pr-10 appearance-none focus:outline-none cursor-pointer"
                defaultValue="Full Time"
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Hourly-Contract</option>
                <option>Fixed-Price</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#3f634d]">
                <svg
                  xmlns="http://ww.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Salary*
            </label>
            <div className="relative w-full">
              <select
                className="w-full p-2 tracking-[-0.16px] border-[#e5e5e5] border rounded-[7px] text-[1rem] text-[#3f634d] font-[200] px-4 pr-10 appearance-none focus:outline-none cursor-pointer"
                defaultValue="Full Time"
              >
                <option>Monthly</option>
                <option>Weekly</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#3f634d]">
                <svg
                  xmlns="http://ww.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              &nbsp;
            </label>
            <div className="flex gap-4">
              <input type="Number" placeholder="Max" />
              <input type="Number" placeholder="Min" />
            </div>
          </div>
        </form>

        <h3 className="mt-20 text-3xl pb-4 text-[#3c8968]">
          Skills & Experience
        </h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2 mb-2">
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Skills*
            </label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="mb-2">
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Experience*
            </label>
            <div className="relative w-full">
              <select
                className="w-full p-2 tracking-[-0.16px] border-[#e5e5e5] border rounded-[7px] text-[1rem] text-[#3f634d] font-[200] px-4 pr-10 appearance-none focus:outline-none cursor-pointer"
                defaultValue="Intermediate"
              >
                <option>Designer</option>
                <option>It & Development</option>
                <option>Web & Mobile Dev</option>
                <option>Writing</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#3f634d]">
                <svg
                  xmlns="http://ww.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Location*
            </label>
            <div className="relative w-full">
              <select
                className="w-full p-2 tracking-[-0.16px] border-[#e5e5e5] border rounded-[7px] text-[1rem] text-[#3f634d] font-[200] px-4 pr-10 appearance-none focus:outline-none cursor-pointer"
                defaultValue="Washington DC"
              >
                <option>Designer</option>
                <option>It & Development</option>
                <option>Web & Mobile Dev</option>
                <option>Writing</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#3f634d]">
                <svg
                  xmlns="http://ww.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Industry*
            </label>
            <div className="relative w-full">
              <select
                className="w-full p-2 tracking-[-0.16px] border-[#e5e5e5] border rounded-[7px] text-[1rem] text-[#3f634d] font-[200] px-4 pr-10 appearance-none focus:outline-none cursor-pointer"
                defaultValue="Select Industry"
              >
                <option>Designer</option>
                <option>It & Development</option>
                <option>Web & Mobile Dev</option>
                <option>Writing</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#3f634d]">
                <svg
                  xmlns="http://ww.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              English Fluency*
            </label>
            <div className="relative w-full">
              <select
                className="w-full p-2 tracking-[-0.16px] border-[#e5e5e5] border rounded-[7px] text-[1rem] text-[#3f634d] font-[200] px-4 pr-10 appearance-none focus:outline-none cursor-pointer"
                defaultValue="Basic"
              >
                <option>Designer</option>
                <option>It & Development</option>
                <option>Web & Mobile Dev</option>
                <option>Writing</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#3f634d]">
                <svg
                  xmlns="http://ww.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </form>

        <h4 className="mt-20 text-3xl pb-4 text-[#3c8968]">File Attachment</h4>
        <div className="mb-3">
          <label className="block text-lg mb-1 leading-[28px] font-[400]">
            File Attachment*
          </label>
          <div className="bg-[#edf2f7] rounded-[10px] h-[48px] px-[16px] flex justify-between py-3">
            <span className="font-[300] text-[#000000b3] text-sm text-center">
              guideline&requirements.doc
            </span>
            <i className="fa-solid fa-xmark hover:red-500 transition-colors duration-300"></i>
          </div>
          <button className="mt-4 p-3 py-2 bg-[#e9e9e9] text-[#3c8968] rounded-md hover:bg-[#3c8968] hover:text-white transition duration-300 text-md">
            + Upload File
          </button>
          <span className="text-[#525252b3] pl-4 text-sm md:text-base">
            Upload file pdf,doc,docx
          </span>
        </div>

        <h4 className="text-3xl mt-20 pb-4 text-[#3c8968]">
          Address & Location
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
          <div className="col-span-full lg:col-span-4 md:col-span-2">
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Address*
            </label>
            <input
              type="text"
              className="w-full border rounded p-4"
              placeholder="Cowrasta, Chandana, Gaziapur Sadar"
            />
          </div>

          <div>
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Country*
            </label>
            <div className="relative w-full">
              <select
                className="w-full p-2 tracking-[-0.16px] border-[#e5e5e5] border rounded-[7px] text-[1rem] text-[#3f634d] font-[200] px-4 pr-10 appearance-none focus:outline-none cursor-pointer"
                defaultValue="America"
              >
                <option>India</option>
                <option>America</option>
                <option>China</option>
                <option>Japan</option>
                <option>France</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#3f634d]">
                <svg
                  xmlns="http://ww.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              City*
            </label>
            <div className="relative w-full">
              <select
                className="w-full p-2 tracking-[-0.16px] border-[#e5e5e5] border rounded-[7px] text-[1rem] text-[#3f634d] font-[200] px-4 pr-10 appearance-none focus:outline-none cursor-pointer"
                defaultValue="Mumbai"
              >
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Patna</option>
                <option>Surat</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#3f634d]">
                <svg
                  xmlns="http://ww.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Zip Code*
            </label>
            <input
              type="text"
              className="w-full border rounded p-4"
              placeholder="1708"
            />
          </div>

          <div>
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              State*
            </label>
            <div className="relative w-full">
              <select
                className="w-full p-2 tracking-[-0.16px] border-[#e5e5e5] border rounded-[7px] text-[1rem] text-[#3f634d] font-[200] px-4 pr-10 appearance-none focus:outline-none cursor-pointer"
                defaultValue="Gujrat"
              >
                <option>Gujrat</option>
                <option>Kerala</option>
                <option>UP</option>
                <option>Bihar</option>
                <option>Punjab</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#3f634d]">
                <svg
                  xmlns="http://ww.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-4 md:col-span-2">
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Map Location*
            </label>
            <input
              type="text"
              className="w-full border rounded p-4"
              placeholder="XC23+6XC, Moiran, N105"
            />
          </div>

          <div className="col-span-full lg:col-span-4 md:col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46310521415!2d3.1191400350050253!3d6.5483693758253985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1784742508858!5m2!1sen!2sng"
              className="mt-4 w-full rounded-md"
              width="600"
              height="450"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-start items-center mt-5">
        <button className="rounded-full px-6 py-2 text-base bg-[#244034] font-[500] text-white hover:bg-[#d2f34d] hover:text-[#31795a]">
          Next
        </button>
        <button className="rounded-full px-4 py-2 text-base font-[500] text-[#31795a]">
          Cancel
        </button>
      </div>
    </>
  );
};

export default SubmitJob;
