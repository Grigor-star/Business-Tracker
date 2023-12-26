"use client";
import React, { useState } from "react";
import Button from "./Logo/Button";

const NavBar = () => {
  const [state, setState] = useState<boolean>(false);

  const handleChange = (change: boolean) => {
    setState(change);
  };

  return (
    <aside
      className={`duration-500 w-[17vw] h-[100vh] bg-gray-300 ${
        state ? "translate-x-[-500px]" : ""
      }`}>
      <div>
        <div
          className={`pt-[45vh] pl-[10px] ${
            state ? "duration-200" : " duration-[550ms] translate-x-[17vw]"
          }`}>
          <Button sendStateToParent={handleChange} />
        </div>
      </div>
    </aside>
  );
};

export default NavBar;
