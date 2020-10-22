import React from "react";
import {CountryList} from "./CountriesList";

export const CountryDisplay = ({countries}) => {
    if(countries.length === 0) {
        return <p>Please enter a country name</p>;
    } else if(countries.length === 1) {
        return <p>country!!!!</p>;
    } else if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>;
    } else if((countries.length > 0) && (countries.length <= 10)) {
        return <CountryList countries={countries}/>;
    }
};