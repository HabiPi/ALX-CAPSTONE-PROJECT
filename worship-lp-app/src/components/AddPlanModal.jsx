import React from "react";

function AddPlanModal({ onClose, onDone }) {
  return (
    <div className="bg-green-800 text-white p-8 rounded-lg w-96">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">ADD NEW PLAN</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          &#10006;
        </button>
      </div>

      <div className="mb-4">
        <select className="w-full p-2 rounded bg-white text-black">
          <option>Choose the date</option>
        </select>
      </div>

      <div className="mb-4">
        <select className="w-full p-2 rounded bg-white text-black">
          <option>Select the Leader</option>
        </select>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onDone}
          className="bg-white text-green-800 font-semibold py-2 px-4 rounded hover:bg-grey-100 focus:outline-none focus:shadow-outline"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default AddPlanModal;
