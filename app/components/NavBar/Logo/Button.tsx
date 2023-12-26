// Button.tsx
import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

interface ButtonProps {
  sendStateToParent: (change: boolean) => void;
}

const Button: React.FC<ButtonProps> = ({ sendStateToParent }) => {
  const [show, setShow] = useState<boolean>(false);

  const iconStyle = {
    color: "gray",
  };

  const handleClick = () => {
    setShow(!show);
    sendStateToParent(!show);
  };

  return (
    <div
      className={` w-[100%] h-[100%] duration-500 cursor-pointer ${
        show ? "translate-x-[500px] " : ""
      }`}
      onClick={handleClick}>
      {show ? (
        <MdArrowForwardIos style={iconStyle} />
      ) : (
        <MdArrowBackIosNew style={iconStyle} />
      )}
    </div>
  );
};

export default Button;
