import React from 'react';
import './App.css';
import countries from 'world-countries';
import CountryInfo from './CountryInfo';

function App() {
  // Sorting counters by Area
  let holder = countries.sort((a,b) => b.area - a.area)

  // Removing Antarctica and taking the biggest 15 countries
  holder = holder.filter((arg) => arg.name.common !== "Antarctica").slice(0, 15);

  // Creating a countrylist
  const CountryList = holder.map((holder, index) => {


  // Returning the countryInfo asked with conditions
    return (
  <CountryInfo
  key ={holder.cca3}
  data = {holder}
  fatArea = {countries[0].area}
  detailed = {index < 5}
  />
  );
  }); 

  return (
    // Calling the funciton
    <div>{CountryList}</div>
   )}

export default App;
