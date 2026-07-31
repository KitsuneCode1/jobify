import React, { useState, useRef } from "react";
import user from "../../assets/user.jpg";

const MyProfile = () => {
  const [members, setMembers] = useState([
    { name: "", designation: "", email: "", isOpen: true },
  ]);

  const handleAddMember = () => {
    setMembers([
      ...members,
      { name: "", designation: "", email: "", isOpen: true },
    ]);
  };

  const handleRemove = (index) => {
    const updated = [...members];
    updated.splice(index, 1);
    setMembers(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  const toggleOpen = (index) => {
    const updated = [...members];
    updated[index].isOpen = !updated[index].isOpen;
    setMembers(updated);
  };

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected File", file.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleDelete = () => {
    alert("Photo Deleted");
  };

  return (
    <>
      <div className="w-full profile-container">
        <h2 className="text-4xl font-[500] text-black py-2">Profile</h2>
        <div className="w-full bg-white p-10 rounded-xl shadow-md mt-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center sm:items-center space-x-4 mb-6">
            <img
              src={user}
              alt="user-image"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex items-center gap-4">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onClick={handleFileChange}
              />
              <button
                onClick={handleUploadClick}
                className="bg-[#d9f04f] hover:bg-[#3c8968] hover:text-white transition-colors duration-300 text-[#244034] font-[600] text-base px-5 py-2"
              >
                Upload New Photo
              </button>
              <button
                onClick={handleDelete}
                className="text-[#244034] hover:text-red-500 font-semibold transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Employer Name*
              </label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Website*
              </label>
              <input type="text" placeholder="https://username.com" />
            </div>
            <div className="mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Email*
              </label>
              <input type="text" placeholder="company@gmail.com" />
            </div>
            <div className="mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Company Size*
              </label>
              <input type="number" min="0" max="100" placeholder="90" />
            </div>
            <div className="mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Founded Date*
              </label>
              <input type="date" />
            </div>
            <div className="mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Company Size*
              </label>
              <input type="number" placeholder="Marketing finace" />
            </div>
            <div className="mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Phone Number*
              </label>
              <input type="text" placeholder="+234 xxx xxx xxxx" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                About Company*
              </label>
              <textarea
                rows="8"
                placeholder="Write Something About Your Company..."
              ></textarea>
              <p
                className="text-base text-[#00000080] mt-1"
                style={{ letterSpacing: ".-14px" }}
              >
                Brief description. URLs will be clickable.
              </p>
            </div>
          </form>
        </div>

        <div className="w-full bg-white p-10 rounded-xl shadow-md mt-10">
          <h4 className="text-2xl pb-4 text-[#3c8968]">Social Media</h4>

          <div className="md:col-span-2">
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Network 1
            </label>
            <input
              type="text"
              className="w-full border rounded p-4"
              placeholder="https://facebook.com/"
            />
          </div>
          <div className="md:col-span-2 mt-4">
            <label className="block text-lg mb-1 leading-[28px] font-[400]">
              Network 2
            </label>
            <input
              type="text"
              className="w-full border rounded p-4"
              placeholder="https://twitter.com/"
            />
          </div>

          <button className="mt-4 p-3 py-2 bg-[#e9e9e9] text-[#3c8968] rounded-md hover:bg-[#3c8968] hover:text-white transition duration-300 text-md">
            + Add more links
          </button>
        </div>

        <div className="w-full bg-white p-10 rounded-xl shadow-md mt-10">
          <h4 className="text-2xl pb-4 text-[#3c8968]">Address & Location</h4>

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

        <div className="w-full bg-white p-10 rounded-xl shadow-md mt-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-5">
            Members
          </h2>
          <label className="block text-lg mb-1 leading-[28px] font-[400]">
            Add & Remove Member*
          </label>
          {members.map((member, index) => (
            <div
              key={index}
              className="mb-4 border rounded-md p-3 bg-white shadow-sm transition-all duration-300 ease-in-out"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleOpen(index)}
              >
                <p className="text-md font-[500] text-[#244034]">
                  Add Member {index + 1}
                </p>
                <span className="text-gray-500 text-xl">
                  <i
                    className={`fa-solid ${member.isOpen ? "fa-angle-down" : "fa-angle-up"}`}
                  ></i>
                </span>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${member.isOpen ? "max-h-[1000px] mt-4" : "max-h-0 opacity-0"}`}
              >
                <div className="space-y-4">
                  <div className="w-full">
                    <label className="block text-lg mb-1 leading-[28px] font-[400]">
                      Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Product Designer (Google)"
                      className="w-full border rounded-md p-3"
                      value={member.name}
                      onChange={(e) =>
                        handleChange(index, "name", e.target.value)
                      }
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-lg mb-1 leading-[28px] font-[400]">
                      Designation*
                    </label>
                    <input
                      type="text"
                      placeholder="Account Manager"
                      className="w-full p-3 border rounded-md"
                      value={member.designation}
                      onChange={(e) =>
                        handleChange(index, "designation", e.target.value)
                      }
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-lg mb-1 leading-[28px] font-[400]">
                      Email*
                    </label>
                    <input
                      type="text"
                      placeholder="newmember@gmail.com "
                      className="w-full p-3 border rounded-md"
                      value={member.email}
                      onChange={(e) =>
                        handleChange(index, "email", e.target.value)
                      }
                    />
                  </div>

                  <button
                    onClick={() => handleRemove(index)}
                    className="mt-4 px-3 py-2 bg-gray-100 text-green-700 rounded hover:bg-red-100 hover:text-red-600 transition-all"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div>
            <button
              onClick={handleAddMember}
              className="mt-4 px-3 py-2 text-md flex items-center gap-2 bg-[rgba(66,99,77,.2)] text-[#31795a] rounded-md hover:bg-[#3f634d] hover:text-white transition duration-300 font-[500]"
            >
              <span className="text-xl">+</span> Add Another Member
            </button>
          </div>

          <div className="w-full flex justify-start items-center mt-5">
            <button className="rounded-full px-6 py-2 text-base bg-[#244034] font-[500] text-white hover:bg-[#d2f34d] hover:text-[#31795a]">
              Save
            </button>
            <button className="rounded-full px-4 py-2 text-base font-[500] text-[#31795a]">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
