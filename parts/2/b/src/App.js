import React, {useState, useEffect} from 'react'
import {Filter} from "./components/Filter";
import {PersonForm} from "./components/PersonForm";
import {Persons} from "./components/Persons";
import peopleService from "./services/peopleService";
import {Notification} from "./components/Notification";
import "./style.css"

const App = () => {
    const [persons, setPersons] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [notification, setNotification] = useState(null);

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    };

    const handleSubmitButton = (event) => {
        event.preventDefault();
        const newPerson = {name: newName, number: newNumber};
        const personSearchResult = persons.filter(p => p.name === newName);
        if (personSearchResult.length > 0) {
            if (window.confirm(`${newName} is already added to phonebook, replace the older number with a new one?`)) {
                const foundPerson = personSearchResult[0];
                peopleService
                    .updatePerson(foundPerson.id, newPerson)
                    .then(setPersons(persons.map(person =>
                        person.name !== newPerson.name ? person : newPerson)))
                    .catch(error => {createNotification(`Information for ${newName} has been deleted`, 'error')});
            }
        } else {
            peopleService
                .addPerson(newPerson)
                .then(setPersons(persons.concat(newPerson)))
                .then(createNotification(`Information for ${newName} has been added`, 'success'));
        }
        setNewName("");
        setNewNumber("");
    }

    const createNotification = (message, type) => {
        setNotification({message: message, type: type});
        setTimeout(() => {setNotification(null)}, 5000);
    }

    const handleDeleteButton = (id) => {
        const personName = persons.filter(person => person.id === id)[0].name;
        if (window.confirm(`Do you really want to delete ${personName}?`)) {
            peopleService
                .deletePerson(id)
                .then(setPersons(persons.filter(person => person.id !== id)));
        }
    }

    const handleFilterChange = (event) => {
        event.preventDefault();
        setFilterText(event.target.value);
    };

    const personsToShow = filterText.length < 1
        ? persons
        : persons.filter((person => person.name.toLowerCase().includes(filterText.toLowerCase())))

    useEffect(() => {
        peopleService
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
    }, []);

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification data={notification}/>
            <Filter filterText={filterText} handleFilterChange={handleFilterChange}/>
            <h2>add a new</h2>
            <PersonForm newName={newName} handleNameChange={handleNameChange}
                        newNumber={newNumber} handleNumberChange={handleNumberChange}
                        handleSubmitButton={handleSubmitButton}/>
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow} handleDeleteButton={handleDeleteButton}/>
        </div>
    )
}

export default App