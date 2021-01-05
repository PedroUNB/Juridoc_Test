import React, { useState } from "react";

import "./dropdown-style.css";

interface DropDownOptions {
  label: string;
  value: number;
}

interface Options {
  options: DropDownOptions[];
  label: string;
}

export function DropDown({ options, label }: Options) {
  let [isVisible, setIsVisible] = useState(false);
  return (
    <div className="dropdown">
      <div
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        className="dropdown-select"
      >
        <span className="select">{label}</span>
        <i className="fa fa-caret-down icon" />
      </div>

      {isVisible && (
        <div className="dropdown-list">
          {options.map((option) => (
            <div
              onClick={() => {
                setIsVisible(!isVisible);
              }}
              key={option.value}
              className="dropdown-list_item"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
