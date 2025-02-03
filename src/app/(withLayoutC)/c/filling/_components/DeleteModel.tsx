const DeleteConfirmation = ({ handleDelete, cancelDelete }: any) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <div>
          <div className="flex justify-center items-center mb-4">
            <svg
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24.5"
                cy="24"
                r="23.5"
                fill="white"
                stroke="#D9D9D9"
              />
              <path
                d="M17.8217 21.6829C20.2354 17.412 21.4422 15.2765 23.0983 14.7268C24.0093 14.4244 24.9907 14.4244 25.9017 14.7268C27.5578 15.2765 28.7646 17.412 31.1783 21.6829C33.592 25.9538 34.7988 28.0893 34.4368 29.8293C34.2376 30.7866 33.7469 31.6548 33.035 32.3097C31.741 33.5 29.3274 33.5 24.5 33.5C19.6727 33.5 17.259 33.5 15.965 32.3097C15.2531 31.6548 14.7624 30.7866 14.5632 29.8293C14.2012 28.0893 15.408 25.9538 17.8217 21.6829Z"
                stroke="#DE1D1D"
                stroke-width="1.5"
              />
              <path
                d="M24.4922 28H24.5012"
                stroke="#DE1D1D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.5 25V21"
                stroke="#DE1D1D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center mb-2">
            <h3 className="text-3xl font-semibold text-black text-center">
              Delete?
            </h3>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-4 text-center">
          You are going to delete this item.
        </p>
        <div className="flex ">
          <button
            onClick={cancelDelete}
            className="bg-[#F5F5F7] hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-md mr-2 w-50"
          >
            No,
          </button>
          <button
            onClick={handleDelete}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md w-50"
          >
            Yes, Delete!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
