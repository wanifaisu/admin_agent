"use client";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import DeleteConfirmation from "./_components/DeleteModel";
import EditTableRow from "./_components/EditTableRow";
export default function CustomTable({
  headingArr,
  bodyArr,
  handleDeleteItem,
  setDeletedItem,
  showModal,
  setShowModal,
  setShowEditModel,
  showEditModel,
}: any) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  const handleDeleteClick = (item: any) => {
    setShowModal(true);
    setDeletedItem(item);
  };
  const handleDelete = () => {
    handleDeleteItem();
  };
  const cancelDelete = () => {
    setShowModal(false);
  };
  const handleEdit = (item: any) => {
    setShowEditModel({ open: true, rowData: item });
  };
  const handleClose = () => {
    setShowEditModel({ open: false });
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full   border-gray-300">
        {/* Table Head */}

        <thead>
          <tr className="bg-green-600 text-white text-left h-[90px]">
            {headingArr?.map((head: any, index: any) => (
              <th
                key={index}
                className={`p-3 text-center ${head.className || ""}`}
              >
                {head.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {bodyArr.map((item: any, index: any) => (
            <tr
              key={index}
              className={` ${index % 2 === 0 ? "bg-[#fdf6e3]" : "bg-[white]"}`}
            >
              <td
                className={`p-3 text-center font-bold text-black rounded-md w-12 text-center`}
              >
                <div className="w-8 h-8 bg-green-500 flex items-center justify-center text-center ">
                  <p className="text-bold">{index}</p>
                </div>
              </td>
              <td className="p-3 border-l border-green-300 w-[110px] text-center">
                {item?.orderId}
              </td>
              <td className="p-3 border-l border-green-300 w-[150px] text-center">
                {item?.project}
              </td>
              <td className="p-3 border-l border-green-300 text-center">
                {item.uploadDate}
              </td>
              <td className="p-3 border-l border-green-300 text-center">
                {item?.url}
              </td>
              <td className="p-3 border-l border-green-300 text-center">
                {item?.deleteDate}
              </td>
              <td className="p-3 border-l border-green-300 text-center">
                {item?.storage}
              </td>
              <td className="p-3 border-l border-green-300 flex items-center justify-center text-center">
                <div className="bg-[#F0E9D6] gap-2 p-1 flex items-center justify-center rounded-full">
                  <div className="flex justify-center items-center ">
                    {/* Hidden Radio Button */}
                    <input
                      type="radio"
                      id="switch"
                      name="switch"
                      checked={isChecked}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {/* Custom Switch */}
                    <label
                      htmlFor="switch"
                      className={`w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer transition-all duration-300 ease-in-out ${
                        isChecked ? "bg-[#9C96C580]" : "bg-green-500"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-all duration-300 ease-in-out transform ${
                          isChecked ? "translate-x-6" : ""
                        }`}
                      ></span>
                    </label>
                  </div>

                  {/* Edit & Delete Icons */}
                  <div className="flex gap-3 cursor-pointer">
                    <button
                      className="cursor-pointer"
                      onClick={() => handleEdit(item)}
                    >
                      <AiOutlineEdit size={20} />
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={() => handleDeleteClick(item)}
                    >
                      <BsTrash3 color="red" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <DeleteConfirmation
          handleDelete={handleDelete}
          cancelDelete={cancelDelete}
        />
      )}
      {showEditModel?.open && <EditTableRow handleClose={handleClose} />}
    </div>
  );
}
