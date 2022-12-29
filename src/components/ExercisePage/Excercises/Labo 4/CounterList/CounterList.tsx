import React from "react";

import { useState } from "react";

const InputView = () => {
  const [numbers, setNumbers] = useState<number[]>([0]);


const addCounter = () => {
    setNumbers([...numbers, 0]);
};

const increaseCounter = (index: number) =>  {
   setNumbers( numbers.map((number, i) => i === index ? number+1 : number))
}

const decreaseCounter = (index: number) =>  {
    setNumbers(numbers.map((number, i) => i === index ? number-1 : number))
}

  return (
    <>
      <div>
        {numbers.map((number, index) => (
          <div key={index} style={{ display: "flex" }}>
            <button onClick={() => increaseCounter(index)}>Omhoog</button>
            <p
              style={
                number > 0
                  ? { color: "green" }
                  : number < 0
                  ? { color: "Red" }
                  : { color: "black" }
              }
            >
              Number is: {number}
            </p>
            <button onClick={() => decreaseCounter(index)}>Omlaag</button>
          </div>
        ))}


        <button onClick={addCounter}>Add Counter</button>
      </div>
    </>
  );
};

const CounterList = () => {
  return (
    <>
      <InputView />
    </>
  );
};

export default CounterList;
