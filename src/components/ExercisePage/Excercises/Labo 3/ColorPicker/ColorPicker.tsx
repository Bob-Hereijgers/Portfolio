import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000000");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: `${color}`,
          width: "150px",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          borderStyle:'Solid',
          flexDirection:'column'
        }}
      >
        <input
          type="color"
          onChange={handleChange}
          style={{ alignSelf: "center" }}
        />

        <select id="colors" name="colors" onChange={(event) => setColor(event.target.value)} value={color} >
          <option disabled value="">Pick One</option>
          <option value={"#000000"}>#000000</option>
          <option value={"#FF0000"}>#FF0000</option>
          <option value={"#00FF00"}>#00FF00</option>
          <option value={"#0000FF"}>#0000FF</option>
          </select>

      </div>
    </>
  );
}

function App() {
  return (
    <div>
      <ColorPicker />
    </div>
  );
}

export default App;
