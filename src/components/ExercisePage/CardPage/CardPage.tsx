import { useState } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import data from "./MOCK_DATA.json";

const CardPage = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e: any) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>
      <div className="Search">
        <input
          value={inputText}
          placeholder="search"
          type="text"
          onChange={(event) => setInputText(event.target.value.toLowerCase())}
          className="SearchBar"
        />
      </div>
      <div className="CardPage">
        {}
        {data
          .filter((Exercise) => Exercise.Name.toLowerCase().includes(inputText))
          .map((Exercise) => (
            <Card className="Card">
              <Card.Body>
                <Card.Title>{Exercise.Name}</Card.Title>
                <Card.Text>
                  Exercise Number: {Exercise.id} <br/>
                  {Exercise.Description}
                </Card.Text>
                <NavLink to={"/Exercise/" + Exercise.Name}>To Exercise</NavLink>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
};

export default CardPage;
