"use client";
import CustomTable from "@/app/(withLayoutC)/c/filling/_components";
import EditTableRow from "@/app/(withLayoutC)/c/filling/_components/EditTableRow";
import { useState } from "react";
export default function Filling() {
  const [search, setSearch] = useState("");
  const [deletedItem, setDeletedItem] = useState<any>({});
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModel, setShowEditModel] = useState({
    open: false,
    rowData: {},
  });
  const [data, setData] = useState([
    {
      no: 5,
      orderId: 46449,
      project: "Web des",
      uploadDate: "02-03-2025",
      url: "",
      deleteDate: "non",
      storage: "500 mb",
    },
    {
      no: 4,
      orderId: 46449,
      project: "App dev",
      uploadDate: "02-03-2025",
      url: "",
      deleteDate: "20-02-2025",
      storage: "1 kb",
    },
    {
      no: 3,
      orderId: 46449,
      project: "Web des",
      uploadDate: "02-03-2025",
      url: "",
      deleteDate: "20-02-2025",
      storage: "10 kb",
    },
    {
      no: 2,
      orderId: 46449,
      project: "Web des",
      uploadDate: "02-03-2025",
      url: "",
      deleteDate: "20-02-2025",
      storage: "1 gb",
    },
    {
      no: 1,
      orderId: 46449,
      project: "Web des",
      uploadDate: "02-03-2025",
      url: "",
      deleteDate: "non",
      storage: "500 mb",
    },
  ]);
  const tableHeaders = [
    { label: "No.", className: "rounded-tl-lg" },
    { label: "Orders ID" },
    { label: "Project Name" },
    { label: "Upload Date" },
    { label: "URL" },
    { label: "File Delete Date" },
    { label: "Storage" },
    { label: "Action", className: "rounded-tr-lg" },
  ];
  const handleDelete = () => {
    const filterDeleteData = data?.filter(
      (item: any) => item.no !== deletedItem.no
    );
    setData(filterDeleteData);
    setShowModal(false);
  };
  const handleClose = () => setShowAddModal(false);
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search & Filters */}
      <div className="flex gap-12 mb-4">
        <div className="relative w-1/4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 pr-16 py-2 border rounded-md focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="font-bold absolute right-0 top-0 h-full bg-green-600 text-black px-4 rounded-md">
            Search
          </button>
        </div>
        <div className="flex gap-5 ">
          <input type="date" className="border rounded-md px-3 py-2" />
          <span className="self-center">To</span>
          <input type="date" className="border rounded-md px-3 py-2" />
        </div>
        <div className="flex gap-5 ">
          <input type="date" className="border rounded-md px-3 py-2" />
          <span className="self-center">To</span>
          <input type="date" className="border rounded-md px-3 py-2" />
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Create
        </button>
      </div>

      {/* Table */}
      <CustomTable
        headingArr={tableHeaders}
        bodyArr={data}
        handleDeleteItem={handleDelete}
        setDeletedItem={setDeletedItem}
        showModal={showModal}
        setShowModal={setShowModal}
        setShowEditModel={setShowEditModel}
        showEditModel={showEditModel}
      />
      {showAddModal && <EditTableRow handleClose={handleClose} />}
    </div>
  );
}
