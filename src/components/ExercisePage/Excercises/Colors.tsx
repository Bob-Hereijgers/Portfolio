import { useState } from "react";

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [Color, SetColor] = useState<string[]>([]);

  const ColorChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSelectedColor(
      [...Array.from(event.target.selectedOptions)].map(
        (option) => option.value
      )
    );
  };

  return (
    <>
      <label htmlFor="colors">Choose a color:</label>
      <select
        id="colors"
        name="colors"
        onChange={ColorChange}
        value={selectedColor}
        style={{ display: "flex" }}
        multiple
      >
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
        <option value="purple">purple</option>
        <option value="orange">orange</option>
        <option value="black">black</option>
        <option value="white">white</option>
      </select>
      <p>You selected: {selectedColor}</p>

      <button
      onClick={() => {SetColor([...selectedColor]);
      }} >
        Show Color
      </button>
      {
        Color.map((color) => (
          <div style={{backgroundColor: color, height: 200, width: "1r"}} />
        ))
      }
    </>
  );
};

export default Colors;
