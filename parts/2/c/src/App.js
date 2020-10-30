import React, {useEffect, useState} from 'react';
import {CountrySearchDisplay} from "./components/CountrySearchDisplay";
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState([]);
  const [countryText, setCountryText] = useState('');

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(countryText));

  const handleCountryTextInput = (event) => {
    event.preventDefault();
    setCountryText(event.target.value);
  };

  useEffect(() => {
    axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          setCountries(response.data);
          console.log(response.data);
        })
  }, [])

  return (
      <div>
        <p>
        find countries
        <input type="text" onChange={handleCountryTextInput} value={countryText}/>
        </p>
        <CountrySearchDisplay countries={filteredCountries}/>
      </div>
  );
}

export default App;
