import React from "react";

const Membership = () => {
  return (
    <>
      <h2 className="px-2 text-4xl font-[500] text-black py-2">Membership</h2>

      <div className="px-2">
        <div className="flex flex-wrap justify-between min-h-[150px] items-center bg-[#edf3f0] border border-[#254035] rounded-[10px] mb-10">
          <div className="text-[#0e4d32] w-full md:w-3/5 h-full md:border-r md:border-b-0 border-b border-[#254035] p-5 flex flex-col items-start justify-center">
            <h2 className="font-semibold text-2xl mb-2">Current Plan(Gold)</h2>
            <p className="text-lg text-[#000000b3] font-[300] w-full lg:w-[70%]">
              Unlimited access to our legal document library and online rental
              application tool, billed monthly.
            </p>
          </div>
          <div className="w-full md:w-2/5 md:mt-0 flex flex-col xl:flex-row items-start justify-start p-10 gap-3">
            <div className="text-6xl font-semibold text-[#0e4d32]">$29</div>
            <div>
              <div className="text-xl font-[500] text-[#0e4d32]">
                Monthly Plan
              </div>
              <div className="text-md font-semibold text-[#000000b3]">
                Your subscription renews{" "}
                <span className="text-black font-[500]">July 12th, 2026</span>
              </div>
              <button className="mt-2 text-[#31795a] underline text-md">
                Cancel Current Plan
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-white rounded-xl text-center"
            style={{ padding: "38px 15px" }}
          >
            <h3 className="text-[rgba(0,0,0,.35)] font-[200] text-xl mb-5">
              Standard
            </h3>
            <div className="text-[60px] font-semibold text-[#2c6c50] mb-5">
              0
            </div>
            <ul className="space-y-1 mb-8">
              <li className="text-lg text-[#31795a]">15 job posting</li>
              <li className="text-lg text-[#31795a]">7 featured job</li>
              <li className="text-lg text-[#31795a]">
                Job post live for 30 days
              </li>
            </ul>

            <button className="bg-[#2c6c50] text-white py-2 px-10 rounded-full text-md font-[500]">
              Choose Plan
            </button>
          </div>

          <div
            className="relative bg-white rounded-xl text-center"
            style={{ padding: "38px 20px" }}
          >
            <div className="popular-badge">popular</div>
            <h3 className="text-[rgba(0,0,0,.35)] font-[200] text-xl mb-5">
              Gold
            </h3>
            <div className="flex items-start justify-center text-[#2c6c50] my-8">
              <span className="text-lg mt-1 font-medium">$</span>
              <span className="text-[64px] leading-none font-[600] mx-1">
                27
              </span>
              <span className="text-lg font-medium mt-2">.99</span>
            </div>
            <ul className="space-y-1 mb-8">
              <li className="text-lg text-[#31795a]">15 job posting</li>
              <li className="text-lg text-[#31795a]">7 featured job</li>
              <li className="text-lg text-[#31795a]">
                Job post live for 60 days
              </li>
            </ul>

            <button className="bg-[#2c6c50] text-white py-2 px-10 rounded-full text-md font-[500]">
              Choose Plan
            </button>
          </div>

          <div
            className="relative bg-white rounded-xl text-center"
            style={{ padding: "38px 20px" }}
          >
            <h3 className="text-[rgba(0,0,0,.35)] font-[200] text-xl mb-5">
              Gold
            </h3>
            <div className="flex items-start justify-center text-[#2c6c50] my-8">
              <span className="text-lg mt-1 font-medium">$</span>
              <span className="text-[64px] leading-none font-[600] mx-1">
                39
              </span>
              <span className="text-lg font-medium mt-2">.99</span>
            </div>
            <ul className="space-y-1 mb-8">
              <li className="text-lg text-[#31795a]">15 job posting</li>
              <li className="text-lg text-[#31795a]">7 featured job</li>
              <li className="text-lg text-[#31795a]">
                Job post live for 130 days
              </li>
            </ul>

            <button className="bg-[#2c6c50] text-white py-2 px-10 rounded-full text-md font-[500]">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
