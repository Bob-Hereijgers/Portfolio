
import {useState} from "react";

const CheckBoxField = () => {

  const [RickRoll, setRickroll] = useState(false);


  return (
    <div>
            <input
          type="checkbox"
          onChange={(event) => setRickroll(event.target.checked)}
          checked={RickRoll}
        />

        
          {RickRoll ? <div> <img src="https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif" style={{maxWidth:'100X', height:'auto'}} alt="rickroll"/> </div> : <div/> }
        

    </div>
    

  );
}

const App = () => {
    return (
      <div>
        <CheckBoxField/>
      </div>
    );
}
export default App;