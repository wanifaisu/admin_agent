import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
export default function EditTableRow({ handleClose }: any) {
  const [orderId, setOrderId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [fileDeleteDate, setFileDeleteDate] = useState("");
  const [storage, setStorage] = useState("");
  const [image, setImage] = useState<any>(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  const handleSubmit = () => {
    handleClose();
    // Handle form submission here (e.g., send data to server)
    console.log({ orderId, projectName, fileDeleteDate, storage });
    // Reset form fields
    setOrderId("");
    setProjectName("");
    setFileDeleteDate("");
    setStorage("");
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md shadow-md w-96">
        <div className="flex justify-end items-center mb-4">
          {/* <h3 className="text-lg font-semibold">Add New Order</h3> */}
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="orderId"
              className="block text-sm font-medium text-gray-700"
            >
              Orders ID
            </label>
            <input
              type="text"
              id="orderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700"
            >
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="fileDeleteDate"
            className="block text-sm font-medium text-gray-700"
          >
            File Delete Date
          </label>
          <div className="flex items-center">
            <input
              type="date"
              id="fileDeleteDate"
              value={fileDeleteDate}
              onChange={(e) => setFileDeleteDate(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mt-4 ">
          <div className="flex  items-center gap-4">
            <div className="flex  items-center gap-4">
              <label
                htmlFor="storage"
                className="block text-sm font-medium text-gray-700"
              >
                Storage
              </label>
              <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                <MdCloudUpload size={30} color="gray" />{" "}
                {/* Using React Icon */}
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>

            {/* Display Uploaded Image */}
            {image && (
              <img src={image} alt="Uploaded" className="h-[70px] w-[70px]" />
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
