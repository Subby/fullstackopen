import React from "react";
import {Weather} from "./Weather";

export const CountryDisplay = ({country}) => {
    return <div>
        <section id="basicInfo">
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
        </section>
        <section id="languages">
            <h2>Languages</h2>
            {country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)}
            <p><img src={country.flag} width="100" height="100"/></p>
        </section>
        <Weather city={country.capital}/>
    </div>
};