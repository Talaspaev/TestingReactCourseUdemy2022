import { useState } from "react";

export function replaceCamelWithSpaces(color) {
  return color.replace("/B([A-Z])B/g");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  // const [buttonColorGray, setButtonColorGray] = useState("gray");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disableButtonCheckbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onClick={event => {
          setDisabled(event.target.checked);
        }}
      />
      <label htmlFor="disableButtonCheckbox">Disable button</label>
    </div>
  );
}

export default App;
