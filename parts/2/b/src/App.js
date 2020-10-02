import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('');

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  };

  const handleSubmitButton = (event) => {
      event.preventDefault();
      debugger
      if(newName in persons) {
        alert("${newName} is already added to phonebook")
      } else {
          setPersons(persons.concat({name: newName}));
      }
      setNewName("");
  }

  return (
      <div>
        <h2>Phonebook</h2>
        <form>
          <div>
            name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            <button type="submit" onClick={handleSubmitButton}>add</button>
          </div>
        </form>
        <h2>Numbers</h2>
          <ul>
              {persons.map((person => <li key={person.name}>{person.name}</li>))}
          </ul>
      </div>
  )
}

export default App