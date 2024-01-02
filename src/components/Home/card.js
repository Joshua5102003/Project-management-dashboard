import React, { useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Projects } from "../../contexts/Projects";
import { useNavigate } from "react-router-dom";

export default function Card({ client, color, completed, index, favorite }) {
  const navigate = useNavigate();
  const { data, setData } = useContext(Projects);

  function ManageFav(index, val) {
    let data1 = [...data];
    data1[index].favorite = val;
    setData(data1);
  }

  function redirectToDetail() {
    navigate(`/${client}`);
  }

  function handleDelete(index) {
    console.log("index" + index);
    let data2 = data.filter((e) => e.index !== index);
    setData(data2);
  }

  return (
    <div class={`flex flex-cols bg-${color}-400 rounded-xl`}>
      <div class="h-[100px] w-[300px]">
        <div class="flex items-center justify-between m-2">
          {favorite ? (
            <svg
              onClick={() => {
                ManageFav(index, false);
              }}
              class="mr-1"
              viewBox="0 0 1024 1024"
              fill="currentColor"
              width="1.25em"
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
            </svg>
          ) : (
            <svg
              onClick={() => {
                ManageFav(index, true);
              }}
              class="mr-1"
              viewBox="0 0 1024 1024"
              fill="currentColor"
              width="1.25em"
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" />
            </svg>
          )}
          <svg
            onClick={() => handleDelete(index)}
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </div>
        <h1 class="ml-2 font-semibold" onClick={redirectToDetail}>
          {client}
        </h1>

        <div class="m-2" onClick={redirectToDetail}>
          <ProgressBar
            completed={completed}
            bgColor="	black"
            labelSize="0.75em"
            height="15px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
}
