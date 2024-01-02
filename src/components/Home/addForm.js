import React, { useState, useContext } from "react";
import { Projects } from "../../contexts/Projects";

import { useNavigate } from "react-router-dom";

const AddcourseForm = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(Projects);

  const dvalue = {
    name: "",
    ProjectType: "",
    MembersInvolved: "",
    color: "",
    favorite: false,
    completed: 1,
    tasks: [],
  };

  const [form_input, setForm_input] = useState(dvalue);
  function eventHandle(event) {
    let [name2, value2] = [event.target.name, event.target.value];

    let val = { ...form_input, [name2]: value2 };
    console.log(val);
    setForm_input(val);
  }

  function redirectToHome() {
    navigate("/");
  }

  function formreset() {
    setForm_input(dvalue);
  }

  function formSubmit(event) {
    event.preventDefault();

    console.log(form_input);

    let index = data.length;

    let f1 = { ...form_input, index };
    let data1 = [...data];
    data1.push(f1);
    console.log(data1);
    setData(data1);

    setForm_input(dvalue);

    navigate("/");
  }

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        Add Project
      </h2>
      <div id="form-con" class="flex justify-content-center">
        <form className="stu-form " id="addForm" onSubmit={formSubmit}>
          <div class="mb-3">
            <div class="flex">
              <label className="form-label" class="font-bold m-2">
                Project Name
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={eventHandle}
                name="name"
                value={form_input.name}
              />
            </div>
          </div>

          <div class="mb-3">
            <div class="flex">
              <label className="form-label" class="font-bold m-2">
                Project type:
              </label>
              <select
                type="text"
                className="form-control"
                required
                onChange={eventHandle}
                name="ProjectType"
                value={form_input.ProjectType}
              >
                <option value="NA">--</option>
                <option value="Web">Web</option>
                <option value="App">App</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <div className="flex">
              <label className="form-label" class="font-bold m-2">
                Members Involved:
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={eventHandle}
                name="MembersInvolved"
                value={form_input.MembersInvolved}
              />
            </div>
          </div>

          <div className="mb-3">
            <div className="flex">
              <label className="form-label" class="font-bold m-2">
                Choose Color:
              </label>
              <select
                type="text"
                className="form-control"
                required
                onChange={eventHandle}
                name="color"
                value={form_input.color}
              >
                <option value="NA">--</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="lime">Lime</option>
                <option value="indigo">Indigo</option>
              </select>
            </div>
          </div>
          <div class="flex align-items-center">
            <button
              type="submit"
              class="flex items-center bg-green-800 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700 focus:outline-none"
            >
              Submit
            </button>

            <button
              type="reset"
              className="border border-gray-800 text-gray-800 px-4 py-2 rounded ml-2 hover:bg-gray-800 hover:text-white focus:outline-none"
              onClick={formreset}
            >
              Reset
            </button>
          </div>
          <div class="flex ">
            <button
              type="reset"
              className="border bg-red-500 border-gray-800 text-gray-800 px-4 py-2 rounded mt-2 hover:bg-gray-800 hover:text-white focus:outline-none"
              onClick={redirectToHome}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddcourseForm;
