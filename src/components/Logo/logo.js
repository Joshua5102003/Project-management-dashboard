import React from "react";
import logo from "../../logo1.png";

export default function Logo() {
  return (
    <div class="flex items-center">
      <img class="h-5 md:h-10" src={logo} alt="logo" />

      <span>
        <h1 class="md:text-3xl  sm:text-lg font-bold mr-4"> Beebox Studios</h1>
      </span>
    </div>
  );
}
