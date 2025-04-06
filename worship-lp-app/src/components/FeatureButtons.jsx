import React, { useState } from "react";

function FeatureButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModel = () => {
    setIsModalOpen(true);
  };

  const closeModel = () => {
    setIsModalOpen(false);
  };

  const handleDone = () => {
    console.log("Plan data submitted!");
    closeModel();
  };

  const handleAddPlanClick = () => {
    console.log("Add Plan clicked");
    openModel();
  };
  const handleAddPlaylistClick = () => {
    console.log("Add Playlist clicked");
    openModel();
  };
  const handleAddMusicTeamClick = () => {
    console.log("Add Music Team clicked");
    openModel();
  };
  const handlePlannedClick = () => {
    console.log("Planned clicked");
    openModel();
  };

  return (
    <section>
      <div className="flex justify-around text-white p-10">
        <div>
          <button
            onClick={handleAddPlanClick}
            className="cursor-pointer hover:bg-green-600 focus:outline-none"
          >
            <img
              src="/src/assets/newImage.png"
              alt="Plus icon"
              className="w-10"
            />
            <div>
              <p>Add Plan</p>
            </div>
          </button>
        </div>

        <div>
          <button
            onClick={handleAddPlaylistClick}
            className="cursor-pointer hover:bg-green-600 focus:outline-none"
          >
            <img
              src="/src/assets/newImage.png"
              alt="Plus icon"
              className="w-10"
            />
            <p>Add Playlist</p>
          </button>
        </div>

        <div className="">
          <button
            onClick={handleAddMusicTeamClick}
            className="cursor-pointer hover:bg-green-600 focus:outline-none"
          >
            <img src="/src/assets/band.png" alt="Plus icon" className="w-10" />
            <p>Add Music Team</p>
          </button>
        </div>
      </div>

      <div className="bg-green-800 text-white text-center flex justify-center p-10">
        <button
          onClick={handlePlannedClick}
          className="cursor-pointer hover:bg-green-600 focus:outline-none"
        >
          <img
            src="/src/assets/folder.png"
            alt="a folder"
            className="w-10 h-auto pl-4"
          />
          <p>Planned</p>
        </button>
      </div>

        {isModalOpen && (
            <div className="bg-green-800 text-white p-8 rounded-lg w-96">
                <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">ADD NEW PLAN</h2>
                <button onClick={closeModel} className="text-gray-400 hover:text-white">
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
                    onClick={handleDone}
                    className="bg-white text-green-800 font-semibold py-2 px-4 rounded hover:bg-grey-100 focus:outline-none focus:shadow-outline"
                >
                    Done
                </button>
                </div>
            </div>
            )}
    </section>
  );
}

export default FeatureButtons;
