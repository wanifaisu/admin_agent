"use client";
import { useState } from "react";

const CreateAdmin = ({ cancelModel, handleSubmit }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loginUrl, setLoginUrl] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [accessLevel, setAccessLevel] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md shadow-md w-150">
        <h2 className="text-lg text-center text-black font-semibold mb-4">
          Access
        </h2>

        <div className="space-y-4">
          <div className="flex  items-center border border-gray-200 rounded-lg">
            <div className="h-13 flex items-center bg-[#1D4ED8]  text-white px-3 py-2 w-1/3">
              Name
            </div>
            <input
              type="text"
              className="pl-3 border-none outline-none  w-3/4"
            />
          </div>

          <div className="flex items-center border border-gray-200 rounded-lg">
            <div className="h-13 flex items-center bg-[#1D4ED8] text-white px-3 py-2 w-1/3">
              Gmail
            </div>
            <input
              type="text"
              className="pl-3 border-none outline-none  w-3/4"
            />
          </div>
          <div className="flex items-center border border-gray-200 rounded-lg">
            <div className="h-13 flex items-center bg-[#1D4ED8] text-white px-3 py-2 w-1/3">
              Login Url
            </div>

            <div className="flex w-3/4">
              <input
                type="text"
                className="pl-3 border-none outline-none w-full py-2"
              />
              <button className=" bg-[#D9D9D9] text-black mr-5 px-1 text-[12px] rounded-sm self-center whitespace-nowrap">
                Url Generate
              </button>
            </div>
          </div>
          <div className="flex items-center border border-gray-200 rounded-lg">
            <div className="h-13 flex items-center bg-[#1D4ED8] text-white px-3 py-2 w-1/3">
              Password
            </div>
            <input
              type="text"
              className="pl-3 border-none outline-none  w-3/4"
            />
          </div>
          <div className="flex items-center border border-gray-200 rounded-lg">
            <div className="h-13 flex items-center bg-[#1D4ED8] text-white px-3 py-2 w-1/3">
              Re Password
            </div>
            <input
              type="text"
              className="pl-3 border-none outline-none  w-3/4"
            />
          </div>
          <div className="flex items-center border border-gray-200 rounded-lg">
            <div className="h-13 flex items-center bg-[#1D4ED8] text-white px-3 py-2 w-1/3">
              Access
            </div>
            <select className="border-none outline-none w-3/4 p-2">
              <option value="">Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={cancelModel}
            className="bg-white border-2 border-gradient-to-r from-[#3C44D3] to-[#56A0F7] text-gray-700 px-4 py-2 rounded-md mr-2 w-40"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-[#3C44D3] to-[#56A0F7] text-white px-4 py-2 rounded-md w-40"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
