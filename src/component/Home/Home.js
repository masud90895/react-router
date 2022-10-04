import React from "react";
import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";
import './Home.css'

const Home = () => {
  const countries = useLoaderData();
  return (
    <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca2} country={country}></Country>
        ))}
    </div>
  );
};

export default Home;
