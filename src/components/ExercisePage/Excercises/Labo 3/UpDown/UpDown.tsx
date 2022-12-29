import React from "react";

import { useState } from "react";

const InputView = () => {
  const [Number1, setNumber1] = useState(0);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            setNumber1((prevNumber) => prevNumber + 1);
          }}
        >
          Omhoog
        </button>
        <p
          style={
            Number1 > 0
              ? { color: "green" }
              : Number1 < 0
              ? { color: "Red" }
              : { color: "black" }
          }
        >
          Number is: {Number1}
        </p>
        <button
          onClick={() => {
            setNumber1((prevNumber) => prevNumber - 1);
          }}
        >
          Omlaag
        </button>
      </div>
    </>
  );
};
//hide-start
const App = () => {
  return (
    <>
      <InputView />
      <InputView />
      <InputView />
    </>
  );
};

export default App;
