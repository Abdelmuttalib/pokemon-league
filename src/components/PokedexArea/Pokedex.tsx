import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SearchItem from "./SearchItem/SearchItem";
import axios from "axios";

import { PokemonData, FormData, Info } from "../../interfaces/interfaces";

const Pokedex = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [pokemonName, setPokemonName] = useState<String>("ditto");
  const [chosen, setChosen] = useState<Boolean>(false);
  const [pokemonData, setPokemonData] = useState<PokemonData>();
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    console.log("DATA: ", pokemonData);
  }, [pokemonData]);

  const searchPokemon = (pokemonN: String): void => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonN}`)
      .then((res) => res.data)
      .then((response) => {
        const allstats = response.stats;
        const allability = response.abilities;
        const allmoves = response.moves;

        function setvalues(property: String): Info | void {
          var arr = eval(`all${property}`);
          var final = arr.map((element: any, index: Number) => {
            if (index < 6 && element != null && element != undefined) {
              var newInstance: Info;
              if (property === "stats") {
                newInstance = {
                  label: eval(`element.${property.slice(0, -1)}.name`),
                  value: element.base_stat,
                };
              } else {
                if (property === "ability") {
                  newInstance = {
                    label: eval(`element.${property}.name`),
                  };
                } else {
                  newInstance = {
                    label: eval(`element.${property.slice(0, -1)}.name`),
                  };
                }
              }
              return newInstance;
            }
            return;
          });

          var output = final;
          output.length >= 6 ? (output = final.slice(0, 5)) : "";

          return output;
        }
        const allStats = setvalues("stats");
        var allAbilities = setvalues("ability");
        var allMoves = setvalues("moves");
        setLoading(false);
        setPokemonData({
          name: pokemonName,
          species: response.species.name,
          img: response.sprites.front_default,
          stats: allStats,
          type: response.types[0].type.name,
          abilities: allAbilities,
          moves: allMoves,
        });
        setChosen(true);
      })
      .catch((error) => {
        if (error instanceof Error) {
          throw Error(error.message);
        }
      });
  };

  const onSubmit = (data: FormData): void => {
    const pokemonN: String = data["pokemon-name"];
    searchPokemon(pokemonN);
    setLoading(true);
  };

  {
    watch("pokemon-name") != undefined && console.log(watch("pokemon-name"));
  }

  return (
    <div className="bg-white w-full h-full flex flex-col">
      <div className="w-full h-14 bg-gray-900 text-pokeYellow text-2xl tracking-tight font-semibold rounded-none flex justify-center text-center items-center">
        Pokedex Area
      </div>
      <div className="shadow overflow-hidden sm:rounded-md bg-gray-50 rounded-none">
        <div className="px-4 py-5 bg-gray-100 sm:p-6 rounded-none">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-start items-end align-center"
          >
            <div className="flex-grow">
              <label
                htmlFor={"pokemon-name"}
                className="block text-sm font-medium text-gray-700"
              >
                Search Pokemons
              </label>
              <input
                type="text"
                defaultValue="bulbasaur"
                placeholder="search for pokemons"
                {...register("pokemon-name", { required: true })}
                id="first-name"
                className="mt-1 border border-transparent focus:outline-none focus:ring-2 w-full focus:ring-gray-600 focus:border-transparent rounded-md shadow-lg"
              />
            </div>
            <div className="px-4 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex flex-grow w-full h-full justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Search
              </button>
            </div>
          </form>
          {errors["pokemon-name"] && (
            <span className="text-sm text-red-600 inline m-0 p-0">
              * please input a pokemon name to search
            </span>
          )}
        </div>
      </div>
      {/* Search Result */}
      {loading == true && (
        <h2 className="mx-auto text-2xl font-semibold text-opacity-70">
          Loading...
        </h2>
      )}
      {pokemonData != undefined && <SearchItem pokemonData={pokemonData} />}
    </div>
  );
};

export default Pokedex;
