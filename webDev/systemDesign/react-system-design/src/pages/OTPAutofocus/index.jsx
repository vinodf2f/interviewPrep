import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function OTPAutpfocus() {
  const [result, setResult] = useState("");
  return (
    <div className="App">
      <h1>OTP autofocus</h1>
      <h2>{result}</h2>
      <OTPAutoFocusInput
        size={4}
        onSumbmit={(value) => {
          setResult(value);
        }}
      />
    </div>
  );
}

const OTPAutoFocusInput = ({ size, onSumbmit, error }) => {
  const [input, setInput] = useState(Array(size).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current.length > 0) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (e) => {
    const index = parseInt(e.target.name);
    const value = e.target.value;

    const newInputValue = [...input];
    newInputValue[index] = value.length > 1 ? value.substr(1) : value;
    setInput(newInputValue);

    if (newInputValue.every((val) => !!val)) {
      onSumbmit(newInputValue.join(""));
    }
    const nextIndex = newInputValue.findIndex((inputVal) => inputVal === "");
    if (nextIndex !== -1) {
      inputRef.current[nextIndex].focus();
    }
  };

  return (
    <div>
      <div className="otpContainer">
        {input.map((item, index) => {
          return (
            <input
              key={index}
              ref={(eleREf) => (inputRef.current[index] = eleREf)}
              className="textInput"
              name={index.toString()}
              onChange={handleChange}
              value={input[index]}
              type="number"
              step="0.01"
            />
          );
        })}
      </div>
    </div>
  );
};
