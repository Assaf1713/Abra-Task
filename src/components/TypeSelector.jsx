
import DATA from "../data/Button_Data.js"
import Button from "./UI/Button.jsx";

export default function TypeSelector({options,selected,setTypeSelect}) {
  
  

  return (
    <>
    <div className="button-selector">
      {options.map((option, index) => (
        <Button
          className={`btn ${selected === index ? "active" : "inactive"}`}
          key={option}
          onClick={() => setTypeSelect(index)}
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
