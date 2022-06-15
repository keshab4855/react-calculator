import React from "react";

const Display = ({ str, isPrank }) => {
  const clsNm = isPrank ? "display prank" : "display";
  return (
    <div>
      {" "}
      <input
        className={`display-box ${clsNm}`}
        type="text"
        id="inputext"
        placeholder="0.00"
        value={str || "0.00"}
      />
    </div>
  );
};

export default Display;
