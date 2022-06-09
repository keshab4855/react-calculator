import React from "react";

const Display = ({ str }) => {
  return (
    <div>
      {" "}
      <input
        class="display-box"
        type="text"
        id="inputext"
        placeholder="0.00"
        value={str || "0.00"}
      />
    </div>
  );
};

export default Display;
