import React from 'react'

const Person = ({person}) => {
    return <li key={person.name}>{person.name} {person.number}</li>;
};

export const Persons = ({personsToShow}) => {
    return <ul>
        {personsToShow.map(person => <Person person={person}/>)}
    </ul>;
};