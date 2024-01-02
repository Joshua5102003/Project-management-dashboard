import React from "react";
import ProjectCards from "./project_cards.js";
import "../../Styles/home.css";
import { Route, Routes } from "react-router-dom";
import Detail from "./detail.js";
import AddcourseForm from "./addForm.js";
import AddTaskForm from "./addTask.js";

export default function Home({ searchResults }) {
  return (
    <div className="home">
      <Routes>
        <Route
          path="/"
          element={<ProjectCards searchResults={searchResults} />}
        />
        <Route path="/add" element={<AddcourseForm />} />
        <Route path="/:proname" element={<Detail />} />
        <Route path="/addTask/:projectId" element={<AddTaskForm />} />
      </Routes>
    </div>
  );
}
