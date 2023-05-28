import React from "react";

function TextFormField({ label, type }) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        className="mt-1 p-2 w-80 rounded-xl caret-blue-500 focus:outline-blue-500"
      />
    </div>
  );
}

export default TextFormField;
