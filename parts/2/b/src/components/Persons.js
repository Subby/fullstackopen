import React from 'react'

const Person = ({person, handleDeleteButton}) => {
    return <li>{person.name} {person.number} <button onClick={handleDeleteButton}>Delete</button></li>;
};

export const Persons = ({personsToShow, handleDeleteButton}) => {
    return <ul>
        {personsToShow.map(person =>
            <Person key={person.id} person={person} handleDeleteButton={() => handleDeleteButton(person.id)}/>)}
    </ul>;
};