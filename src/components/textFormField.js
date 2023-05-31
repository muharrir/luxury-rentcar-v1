"use client";
import React, { useState } from "react";

function TextFormField({
  label,
  type,
  onChange,
  disabled = false,
  placeholder,
}) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        className="mt-1 px-4 py-2 rounded-xl caret-blue-500 focus:outline-blue-500 $ disabled:bg-slate-50 disabled:border-slate-200 disabled:text-slate-200 disabled:hover:cursor-not-allowed"
      />
    </div>
  );
}

export default TextFormField;
