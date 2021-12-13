import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonColor = () => {
    setButtonColor((prevState) => {
      return prevState === "red" ? "blue" : "red";
    });
  };

  return (
    <div className="App">
      <button
        className={buttonColor}
        onClick={handleButtonColor}
        disabled={isChecked}
      >
        Change to {buttonColor === "red" ? "Blue" : "Red"}
      </button>
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        value="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prevValue) => !prevValue)}
      />
      <label htmlFor="checkbox"> Disable Button</label>
    </div>
  );
}

export default App;
