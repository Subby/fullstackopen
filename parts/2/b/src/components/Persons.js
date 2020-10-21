import React from 'react'

const Person = ({person}) => {
    debugger
    return <li>{person.name} {person.number}</li>;
};

export const Persons = ({personsToShow}) => {
    return <ul>
        {personsToShow.map(person => <Person key={person.id} person={person}/>)}
    </ul>;
};