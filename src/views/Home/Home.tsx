import React, { useState, useEffect, useContext } from "react";
import { Pokedex, PokemonLineUp, PokemonData } from "../../components";
import { MyGlobalContext } from "../../components/Context/LineUpContext";
import {
  PokemonData as PokemonDataStructure,
  Info,
} from "../../interfaces/interfaces";

const Home = () => {
  const [lineUp, setLineUp] = useState<PokemonDataStructure>();

  return (
    <React.Fragment>
      <main className="bg-gray-800 h-screen">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-gray-800 h-full">
          <div className="px-4 py-1 sm:px-0 flex w-full h-full">
            <MyGlobalContext.Provider value={{ lineUp, setLineUp }}>
              <div className="bg-gray-800 w-full h-full flex flex-col">
                <PokemonLineUp />
                <PokemonData />
              </div>
              <Pokedex />
            </MyGlobalContext.Provider>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
