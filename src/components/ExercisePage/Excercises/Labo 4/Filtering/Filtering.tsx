import { useState } from "react";
import data from "../../assets/data.json"

interface Student {
  name: string;
  age: number;
  year: number;
}

const Filtering = () => {
  const [students] = useState<Student[]>(data);
  const [inputText, setInputText] = useState("");

  return (
    <>
      <div>
        <input
          value={inputText}
          placeholder="search"
          type="text"
          onChange={(event) => setInputText(event.target.value.toLowerCase())}
          className="SearchBar"
        />
      </div>
      <ul>
        {students.filter((student) => student.name.toLowerCase().includes(inputText)).map((student: Student) => <li>Name: {student.name}, Age: {student.age}, Year: {student.year}</li>)}
      </ul>
    </>
  );
};

export default Filtering;
