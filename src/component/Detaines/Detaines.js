import React from "react";
import { useLoaderData } from "react-router-dom";

const Detaines = () => {
  const getDetail = useLoaderData();
  const { name, flags, capital,altSpellings,area,continents,population} = getDetail[0];
  return (
    <div
      style={{ marginTop: "20px" }}
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto"
    >
      
        <img
          style={{ width: "100%" }}
          className="rounded-t-lg"
          src={flags.png}
          alt=""
        />
      <div  className="p-5">
       
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name: {name.common}
          </h5>
        <h4 className="mb-3 text-xl text-gray-700 dark:text-gray-400">
          Capital : {capital}
        </h4>
        <h4 className="mb-3 text-xl text-gray-700 dark:text-gray-400">
        area : {area}
        </h4>
        <h4 className="mb-3 text-xl text-gray-700 dark:text-gray-400">
        continents : {continents[0]}
        </h4>
        <h4 className="mb-3 text-xl text-gray-700 dark:text-gray-400">
        Spellings : {altSpellings[1]}
        </h4>
        <h4 className="mb-3 text-xl text-gray-700 dark:text-gray-400">
        population : {population}
        </h4>

      </div>
    </div>
  );
};

export default Detaines;
