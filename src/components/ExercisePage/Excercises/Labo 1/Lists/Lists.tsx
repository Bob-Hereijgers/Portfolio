import React from 'react';



const App = () => {

const numbers = [1,4,8,6,4,7,4,9]

interface Student {
  id: number
  naam: string,
  leeftijd: number
}

const students: Student[] = [
{
  id: 0,
  naam: "Jeff",
  leeftijd: 21
},
{
  id: 1,
  naam: "Jake",
  leeftijd: 25
},
{
  id: 2,
  naam: "Charles",
  leeftijd: 19
},
{
  id: 3,
  naam: "Noah",
  leeftijd: 30
},
{
  id: 4,
  naam: "John",
  leeftijd: 20
}

]

  return (
    <>
    <h1>Labo 1: Lijsten</h1>
    <h3>Nummer Lijst</h3>
    <ul>
      {numbers.map((number) => <li key={number}>{number}</li> )}
    </ul>

    <h3>Studenten lijst</h3>
    <ol>
    {
      students.map((student: Student) =>
      
        <React.Fragment key={student.id}>
          <li> {student.naam} </li>
        </React.Fragment>
        
      
      )
    }
    </ol>

<h3>Studenten lijst met J</h3>
<ol>
    {
      students.filter((student) => student.naam.includes('J')).map((student) =>
      
        <React.Fragment key={student.id}>
          <li> {student.naam} </li>
        </React.Fragment>
      )
    }
     </ol>


     <h3>Studenten lijst</h3>
    <select>
    {
      students.map((student: Student) =>
      
        <React.Fragment key={student.id}>
          <option> {student.naam} </option>
        </React.Fragment>
        
      
      )
    }
    </select>

    <h3>Studenten lijst</h3>
    <table>
      <tr>
        <th>Naam</th>
        <th>Leeftijd</th>
      </tr>
     
    {
   
      students.map((student: Student) =>
      
        <React.Fragment key={student.id}>
          <tr>
          <td> {student.naam} </td>
          <td> {student.leeftijd} </td>
          </tr>
        </React.Fragment>
      
      )

    }

    </table>



    </>
  );


  
}

export default App;