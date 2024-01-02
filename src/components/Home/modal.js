import React from "react";
import AddForm from "./addForm";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <div>
      <button class="bg-red-500 p-1 font-bold rounded-full" onClick={onClose}>
        X
      </button>
      <AddForm />
      {children}
    </div>
  );
}
