import React, { useContext } from "react";
import Tasks from "./tasks";
import { useNavigate } from "react-router-dom";

import "../../Styles/detail.css";
import { useParams } from "react-router-dom";
import { Projects } from "../../contexts/Projects";
export default function Detail() {
  const navigate = useNavigate();
  function redirectToNewTask() {
    navigate(`/addTask/${i}`);
  }

  const { proname } = useParams();

  const { data } = useContext(Projects);

  let pr = data.filter((d) => d.name === proname);
  let i = pr[0].index;
  console.log(i);

  return (
    <div className="detail">
      <h1 class="text-2xl font-bold m-2">{pr[0].name}</h1>
      <div className="list">
        <Tasks i={i} />
        <button
          onClick={redirectToNewTask}
          class="border border-black m-2 px-2 py-1 rounded"
        >
          + ADD TASK
        </button>
      </div>
    </div>
  );
}
