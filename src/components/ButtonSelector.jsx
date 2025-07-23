import { useState } from "react";
import DATA from "../data/button_data.js";
import Button from "./Button.jsx";

export default function ButtonSelector() {
  const options = ["Optimization", "Speed", "Pricing"];
  const [selected, setSelected] = useState(0);

  return (
    <>
    <div className="button-selector">
      {options.map((option, index) => (
        <Button
          className={`btn ${selected === index ? "active" : "inactive"}`}
          key={index}
          onClick={() => setSelected(index)}
        >
          {option}
        </Button>
      ))}
    </div>
    <div className="button-text">
        {DATA[selected].text}
    </div>
    </>
  );
}
