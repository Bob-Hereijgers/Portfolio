import cherry from "../../assets/cherry.png";
import lemon from "../../assets/lemon.png";
import melon from "../../assets/melon.png";
import prune from "../../assets/prune.png";
import seven from "../../assets/seven.png";


const App = () => {
  let number1 = Math.floor(Math.random() * 5);
  let number2 = Math.floor(Math.random() * 5);
  let number3 = Math.floor(Math.random() * 5);

  let slots = [cherry,lemon,melon,prune,seven];

  let slot1 = slots[number1];
  let slot2 = slots[number2];
  let slot3 = slots[number3];

  let message;

if (slot1 === slot2 && slot1 === slot3) {
  message = <p>Je hebt gewonnen.</p>
}
else{
  message = <p>Je hebt verloren.</p>
}

  return (
      <>
          <h1>Labo 1: slotmachine</h1>
          <>
            <img src={cherry} style={{width: '100px'}} alt={"cherry"} />
            <img src={lemon} style={{width: '100px'}} alt={"lemon"} />
            <img src={melon} style={{width: '100px'}} alt={"melon"} />
            <img src={prune} style={{width: '100px'}} alt={"prune"} />
            <img src={seven} style={{width: '100px'}} alt={"seven"} />
          </>
          <br/>
          <>
            <img src={slot1} style={{width: '100px'}} alt={"slot 1"} />
            <img src={slot2} style={{width: '100px'}} alt={"slot 2"} />
            <img src={slot3} style={{width: '100px'}} alt={"slot 3"} />
          </>
          <p>
            {message}
          </p>
          <button onClick={() => window.location.reload()}>Speel opnieuw</button>
      </> 
  );
}

export default App;