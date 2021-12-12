import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  const handleButtonColor = () => {
    setButtonColor((prevState) => {
      return prevState === "red" ? "blue" : "red";
    });
  };

  return (
    <div className="App">
      <button className={buttonColor} onClick={handleButtonColor}>
        Change to {buttonColor === "red" ? "Blue" : "Red"}
      </button>
    </div>
  );
}

export default App;
