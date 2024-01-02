import React, { useState, useContext } from "react";
import { Projects } from "../../contexts/Projects";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const AddTaskForm = () => {
  const { projectId } = useParams();

  const navigate = useNavigate();
  const { data, setData } = useContext(Projects);
  console.log(data[projectId].tasks.length);
  const defaultValue = {
    taskname: "",
    status: "",
    description: "",
  };

  const [form_input, setForm_input] = useState(defaultValue);

  function eventHandle(event) {
    let [name2, value2] = [event.target.name, event.target.value];

    let val = { ...form_input, [name2]: value2 };
    console.log(val);
    setForm_input(val);
  }

  const redirectToProject = () => {
    navigate(`/${data[projectId].name}`);
  };

  const resetForm = () => {
    setForm_input(defaultValue);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const projectIndex = parseInt(projectId, 10);

    if (data[projectIndex]) {
      let index = data[projectIndex].tasks.length + 1;
      let newTask = { ...form_input, index };

      let updatedProject = {
        ...data[projectIndex],
        tasks: [...data[projectIndex].tasks, newTask],
      };

      let updatedData = [
        ...data.slice(0, projectIndex),
        updatedProject,
        ...data.slice(projectIndex + 1),
      ];

      setData(updatedData);
      setForm_input(defaultValue);
      redirectToProject();
    } else {
      console.error("Project not found");
    }
  }

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        Add Task
      </h2>
      <div id="form-con" class="flex justify-center">
        <form className="stu-form" id="addForm" onSubmit={handleSubmit}>
          <div class="mb-3">
            <div class="flex">
              <label className="form-label font-bold m-2">Task Name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={eventHandle}
                name="taskname"
                value={form_input.taskname}
              />
            </div>
          </div>

          <div class="mb-3">
            <div class="flex">
              <label className="form-label font-bold m-2">Status</label>
              <select
                type="text"
                className="form-control"
                required
                onChange={eventHandle}
                name="status"
                value={form_input.status}
              >
                <option value="NA">--</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Complete</option>
                <option value="Not Started">Not Started</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <div className="flex">
              <label className="form-label font-bold m-2">Description</label>
              <textarea
                className="form-control"
                onChange={eventHandle}
                name="description"
                value={form_input.description}
              />
            </div>
          </div>

          <div className="flex align-items-center">
            <button
              type="submit"
              className="bg-green-800 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700 focus:outline-none"
            >
              Submit
            </button>

            <button
              type="reset"
              className="border border-gray-800 text-gray-800 px-4 py-2 rounded ml-2 hover:bg-gray-800 hover:text-white focus:outline-none"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>
          <div className="flex">
            <button
              type="button"
              className="bg-red-500 border-gray-800 text-gray-800 px-4 py-2 rounded mt-2 hover:bg-gray-800 hover:text-white focus:outline-none"
              onClick={redirectToProject}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
