import React, { useContext } from "react";
import { Projects } from "../../contexts/Projects.js";

export default function Tasks({ i }) {
  const { data } = useContext(Projects);
  const tasks = data[i].tasks;

  return (
    <div>
      <h1 class="text-center underline mb-2">To Do List</h1>

      <div>
        {tasks.length > 0
          ? tasks.map((task) => (
              <div
                class="bg-amber-200 rounded m-2 p-2 flex flex-col border-separate shadow-lg"
                key={task.id}
              >
                <div class="flex justify-between items-center">
                  <svg
                    width="1.2em"
                    style={{
                      border: "1px solid currentColor",
                      borderRadius: "8px",
                      padding: "2px",
                    }}
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    ></path>
                  </svg>

                  <svg
                    width="1.25em"
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    ></path>
                  </svg>
                </div>
                <h1 class="mt-2 text-center font-bold">{task.taskname}</h1>
                <h1 class="mb-2 text-center ">{task.description}</h1>
                <h1>
                  <span class="px-2 py-1 rounded-full bg-green-300">
                    {task.status}
                  </span>
                </h1>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
