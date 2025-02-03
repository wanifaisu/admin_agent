"use client";
import { useState } from "react";
import CreateAdmin from "./_components/CreateAdmin";
import CustomTable from "./_components/CustomTable";

export default function Subadmin() {
  const [showModel, setShowModel] = useState(false);
  const tableHeaders = [
    { label: "No." },
    { label: "Name" },
    { label: "Email" },
    { label: "Login Url" },
    { label: "Password" },
    { label: "Access" },
    { label: "Action" },
  ];
  const tableData = [
    {
      "No.": 4,
      Name: "mr jack",
      Email: "jack4515@gmail.com",
      LoginUrl: "https://www.example.com/login1", // Replace with actual URLs
      Password: "67******890",
      Access: 5,
    },
    {
      "No.": 3,
      Name: "mr jack",
      Email: "maadmin@gmail.com",
      LoginUrl: "https://www.example.com/login2",
      Password: "789******890",
      Access: 4,
    },
    {
      "No.": 2,
      Name: "mr jack",
      Email: "payment@gmail.com",
      LoginUrl: "https://www.example.com/login3",
      Password: "78******90",
      Access: 10,
    },
    {
      "No.": 1,
      Name: "mr jack",
      Email: "oders@gmail.com",
      LoginUrl: "https://www.example.com/login4",
      Password: "90******89",
      Access: 12,
      Action: {
        Edit: true,
        Delete: true,
      },
    },
  ];
  const cancelModel = () => {
    setShowModel(false);
  };
  const handleSubmit = () => {
    setShowModel(false);
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-5 flex justify-between">
        <button className="bg-[#A5A5A5] text-black font-bold px-4 py-2 rounded-md">
          Web filling Api
        </button>
        <button
          onClick={() => setShowModel(true)}
          className="bg-[#FF7777] text-black  px-4 py-2 rounded-md"
        >
          Create admin
        </button>
      </div>
      <CustomTable headingArr={tableHeaders} bodyArr={tableData} />
      {showModel && (
        <CreateAdmin cancelModel={cancelModel} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
