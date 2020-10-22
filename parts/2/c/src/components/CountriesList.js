import React, {useState} from 'react'
import {CountryDisplay} from "./CountryDisplay";

const CountryListItem = ({country}) => {
    const [showCountryInfo, setShowCountryInfo] = useState(false);
    const showButtonText = showCountryInfo ? "Hide" : "Show";
    const handleShowButtonClick = () => {
      setShowCountryInfo(!showCountryInfo);
    };
    return <div>
        <section id="top">
            {country.name}<button onClick={handleShowButtonClick}>{showButtonText}</button>
        </section>
        {showCountryInfo &&
            <section id="countryInfo">
                <CountryDisplay country={country}/>
            </section>
        }

    </div>;
};

export const CountryList = ({countries}) => {
    return <ul>
        {countries.map(country => <CountryListItem key={country.alpha2Code} country={country}></CountryListItem>)}
    </ul>
};