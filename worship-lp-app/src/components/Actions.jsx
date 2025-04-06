import React, { useState } from "react";
import AddPlanModal from "./AddPlanModal";

function Actions() {
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

    return (
        src/components/MyButtons.jsx
  );
}

export default Actions;
