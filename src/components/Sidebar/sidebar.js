import React, { useState, useContext } from "react";
import "../../Styles/sidebar.css";
import { Projects } from "../../contexts/Projects";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const { data } = useContext(Projects);
  const [show, setShow] = useState(true);
  const [showfav, setShowfav] = useState(true);
  const favoriteClients = data.filter((client) => client.favorite);
  function redirectToDetail(clientName) {
    navigate(`/${clientName}`);
  }

  return (
    <div className="block">
      <div className="flex h-full flex-col ">
        <div class="mb-5">
          <div className="flex justify-around">
            <h1 className="text-left text-lg font-bold">Favorites</h1>
            {showfav ? (
              <svg
                onClick={() => setShowfav(false)}
                className="w-5"
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
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                ></path>
              </svg>
            ) : (
              <svg
                onClick={() => setShowfav(true)}
                className="w-5"
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
            )}
          </div>
          <div className="favorites">
            {showfav && favoriteClients.length === 0 ? (
              <p>No clients available.</p>
            ) : showfav ? (
              favoriteClients.map((client, index) => (
                <h1
                  onClick={() => redirectToDetail(client.name)}
                  class="flex "
                  key={index}
                >
                  <svg
                    class="mr-2"
                    width="16"
                    data-slot="icon"
                    fill="currentColor"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    ></path>
                  </svg>
                  {client.name}
                </h1>
              ))
            ) : null}
          </div>
        </div>
        <div className="flex justify-around">
          <h1 className="text-left text-lg font-bold">Projects</h1>
          {show ? (
            <svg
              onClick={() => setShow(false)}
              className="w-5"
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
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          ) : (
            <svg
              onClick={() => setShow(true)}
              className="w-5"
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
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          )}
        </div>
        <div className="projects">
          {show && data.length === 0 ? (
            <p>No clients available.</p>
          ) : show ? (
            data.map((client, index) => (
              <h1 onClick={() => redirectToDetail(client.name)} key={index}>
                {client.name}
              </h1>
            ))
          ) : null}
        </div>
      </div>
    </div>
  );
}
