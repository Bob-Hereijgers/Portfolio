import { useState } from "react";


const InputFields = () => {

  const [InputValue, setInputValue] = useState<string>('');

  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  }
  return (
    <>
    <input type="text" id="name" onChange={handleChange} value={InputValue}/>
    <input type="text" id="name" onChange={handleChange} value={InputValue}/>
    <input type="text" id="name" onChange={handleChange} value={InputValue}/>
    <input type="text" id="name" onChange={handleChange} value={InputValue}/>
    <input type="text" id="name" onChange={handleChange} value={InputValue}/>
    </>
  );
}


const App = () => {
  return (
    <>
    <InputFields/>
    </>
  );
}

export default App;