import React from "react";
import logo from "../../logo1.png";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  function redirectToHome() {
    navigate("/");
  }

  return (
    <div class="flex items-center">
      <img class="h-5 md:h-10" onClick={redirectToHome} src={logo} alt="logo" />

      <span>
        <h1
          class="md:text-xl  sm:text-lg font-bold mr-4"
          onClick={redirectToHome}
        >
          Beebox Studios
        </h1>
      </span>
    </div>
  );
}
