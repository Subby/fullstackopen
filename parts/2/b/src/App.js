import React, {useState} from 'react'
import ReactDOM from 'react-dom';

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
    ]);
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

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter person shown <input value={filterText} onChange={handleFilterChange}/>
            </div>
            <h2>add a new</h2>
            <form>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit" onClick={handleSubmitButton}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {personsToShow.map((person =>
                    <li key={person.name}>{person.name} {person.number}</li>))
                }
            </ul>
        </div>
    )
}

export default App