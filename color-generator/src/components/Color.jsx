import React from "react";
import { toast } from "react-toastify";

function Color({ color, index }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(`#${color.hex}`);
    toast.success("hex value copied to clipboard!");
  };
  return (
    <div
      className={`w-full h-48 pt-5 px-8 ${
        index > 10 ? "text-white" : "text-black"
      }`}
      style={{ backgroundColor: "#" + color.hex }}
      onClick={handleCopy}
    >
      <p>{color.weight}%</p>
      <p>#{color.hex}</p>
    </div>
  );
}

export default Color;
