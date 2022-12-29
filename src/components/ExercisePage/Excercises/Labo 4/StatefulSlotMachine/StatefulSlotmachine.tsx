import { useState } from "react";
import cherry from "../../assets/cherry.png";
import lemon from "../../assets/lemon.png";
import melon from "../../assets/melon.png";
import prune from "../../assets/prune.png";
import seven from "../../assets/seven.png";

const StatefulSlotmachine = () => {
const [cash, setCash] = useState<number>(100);
const [bankrupt, setBankrupt] = useState(false);
  const [slots, setSlots] = useState<number[]>([
    Math.floor(Math.random() * 5),
    Math.floor(Math.random() * 5),
    Math.floor(Math.random() * 5),
  ]);


  let slotSymbols = [cherry, lemon, melon, prune, seven];

  let number1 = slotSymbols[slots[0]];
  let number2 = slotSymbols[slots[1]];
  let number3 = slotSymbols[slots[2]];


const Transaction = () => {
    slots[0] === slots[1] && slots[0] === slots[2] ? setCash(cash + 20) : setCash(cash - 1);
    cash <= 1 ? setBankrupt(true) : setBankrupt(false);
}
  
  return (
    <>
      <p>{bankrupt ? "I'm sorry but you do not have enough money left." : "€"+cash}</p>
      <>
        <img src={number1} style={{ width: "100px" }} alt={"slot 1"} />
        <img src={number2} style={{ width: "100px" }} alt={"slot 2"} />
        <img src={number3} style={{ width: "100px" }} alt={"slot 3"} />
      </>
      <br />
      <button
        onClick={() => {
          setSlots([
            Math.floor(Math.random() * 5),
            Math.floor(Math.random() * 5),
            Math.floor(Math.random() * 5),
          ]); Transaction()
        }} disabled={bankrupt}
      >
        Speel opnieuw
      </button>
    </>
  );
};

export default StatefulSlotmachine;
