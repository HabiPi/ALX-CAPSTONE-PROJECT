import React from "react";

function AddPlaylistModal({ onClose, onDone }) {
  return (
    <div className="fixed top-0 left-0 w-full inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-green-800 text-white p-8 rounded-lg w-96">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">ADD PLAYLIST</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            &#10006;
          </button>
        </div>

        <div className="mb-4">
          <select className="w-full p-2 rounded bg-white text-black">
            <option>Select first song</option>
          </select>
        </div>

        <div className="mb-4">
          <select className="w-full p-2 rounded bg-white text-black">
            <option>Select second song</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onDone}
            className="bg-white text-green-800 font-semibold py-2 px-4 rounded hover:bg-grey-100 focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPlaylistModal;
