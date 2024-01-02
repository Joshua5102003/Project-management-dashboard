import React from "react";
// import { ModalAdd } from "../../contexts/ModalAdd";
import { useNavigate } from "react-router-dom";

export default function ProjectAdd() {
  // const { isOpen, setIsOpen } = useContext(ModalAdd);
  const navigate = useNavigate(); // Using the useNavigate hook

  const handleAddClick = () => {
    // You can also include other logic here if needed
    navigate("/add");
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-5xl font-bold p-2">Projects</h1>
          <svg
            onClick={handleAddClick} // Updated to use the handleAddClick function
            width="35"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
