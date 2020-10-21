import React, {useState, useEffect } from 'react'
import axios from 'axios'
import {Filter} from "./components/Filter";
import {PersonForm} from "./components/PersonForm";
import {Persons} from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    };

    const handleSubmitButton = (event) => {
        event.preventDefault();
        if (persons.some(p => p.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat({name: newName, number: newNumber}));
        }
        setNewName("");
    }

    const handleFilterChange = (event) => {
      event.preventDefault();
      setFilterText(event.target.value);
    };

    const personsToShow = filterText.length < 1
        ? persons
        : persons.filter((person => person.name.toLowerCase().includes(filterText.toLowerCase())))

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filterText={filterText} handleFilterChange={handleFilterChange} />
            <h2>add a new</h2>
            <PersonForm newName={newName} handleNameChange={handleNameChange}
                        newNumber={newNumber} handleNumberChange={handleNumberChange}
                        handleSubmitButton={handleSubmitButton}/>
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow}/>
        </div>
    )
}

export default App