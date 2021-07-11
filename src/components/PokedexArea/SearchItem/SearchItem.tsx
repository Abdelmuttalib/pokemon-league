import React from "react";
import { PokemonData } from "../../../interfaces/interfaces";
import { useGlobalContext } from "../../Context/LineUpContext";
import InfoRow from "./InfoRow/InfoRow";
import { v4 as uuidv4 } from "uuid";

interface Props {
  pokemonData: PokemonData;
}

const SearchItem = ({ pokemonData }: Props) => {
  const { lineUp, setLineUp } = useGlobalContext();

  const updateLineUp = () => {
    lineUp != undefined
      ? setLineUp([...lineUp, pokemonData])
      : setLineUp([pokemonData]);
  };

  return (
    <div className="flex w-full h-80 bg-white justify-start items-center">
      {/* Pokemon Info */}
      <div className="w-full h-full bg-white pt-6 transition-all duration-500 ease-in-out">
        <div className="bg-white shadow m-2 overflow-hidden sm:rounded-lg">
          <div className="px-2 py-2 sm:px-6 flex flex-row justify-start items-center">
            <div className="flex flex-col justify-center items-center gap-3 w-1/3">
              <img
                className="h-28 w-28 border-gray-100 hidden md:hidden rounded-full lg:block bg-gray-200"
                src={pokemonData.img.toString()}
                alt={`The ${pokemonData.name} Pokemon`}
              />
              <p className="text-2xl leading-6 font-semibold text-gray-900">
                {pokemonData.name}
              </p>
            </div>
            <div className="w-full">
              <InfoRow
                key={uuidv4()}
                label="Abilities"
                data={pokemonData.abilities}
                color="g"
              />
              <InfoRow
                key={uuidv4()}
                label="Stats"
                data={pokemonData.stats}
                color="w"
              />
              {/* <InfoRow key={uuidv4()} label="Moves" data={pokemonData.moves} color="g" /> */}

              {/* <InfoRow key={uuidv4()}
                label="Held Items"
                data={}
                color="w"
              />
              <InfoRow key={uuidv4()} label="Type" data="{} color="g" /> */}
              {/* <InfoRow key={uuidv4()} label="Species" data={} color="w" /> */}
            </div>
          </div>
          <div className="border-t border-gray-100">
            <dl>
              <div className="bg-white px-3 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Actions</dt>
                <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex shadow-xl flex-grow text-pokeRed  w-full h-full font-black text-lg tracking-normal bold justify-center py-2 px-4 border border-transparent text-md rounded-md bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    onClick={() => updateLineUp()}
                  >
                    + ADD POKEMON TO LINE UP
                  </button>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
