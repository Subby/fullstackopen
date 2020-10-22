import React from 'react'

const CountryListItem = ({country}) => {
    return <li>{country.name}</li>;
};

export const CountryList = ({countries}) => {
    return <ul>
        {countries.map(country => <CountryListItem key={country.alpha2Code} country={country}></CountryListItem>)}
    </ul>
};