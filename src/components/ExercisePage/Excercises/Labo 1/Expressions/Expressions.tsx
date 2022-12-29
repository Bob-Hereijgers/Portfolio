const App = () => {
  let random = Math.random();
  let getal1 = 6;
  let getal2 = 4;
  let result;
  if (random > 0.5) {
     result = <p>{getal1} * {getal2} = {getal1 * getal2}</p>
  } else {
     result = <p>{getal1} + {getal2} = {getal1 + getal2}</p>
  }
  return (
      <div>
          <h1>Labo 1</h1>
          <p>Random getal is: {random}</p>
          <p> getal 1 is: {getal1}</p>
          <p> getal 2 is: {getal2}</p>
          {result}
      </div>
  );
}

export default App;