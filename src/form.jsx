import React, { useState } from "react";
import "./form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const FormField = () => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [displayedValue, setDisplayedValue] = useState("");

  const handleCancel = () => {
    setDisplayedValue(displayedValue);
    setActive(false);
  };

  const handleClick = () => {
    setDisplayedValue(inputValue);
    setActive(false);
  };

  return (
    <div className="container">
      <div className="name">
        <label>Name</label>
        <p
          className={active ? "text display" : "text"}
          onClick={() => {
            setDisplayedValue(inputValue);
            setActive(true);
          }}
        >
          {displayedValue || "empty"}
        </p>
        {active && (
          <div className="icon">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <FontAwesomeIcon
              className="x-mark"
              icon={faXmark}
              onClick={handleCancel}
            />
            <FontAwesomeIcon
              className="x-mark"
              icon={faCheck}
              onClick={handleClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FormField;
