import React from "react";
import { PokemonData, Info, RowProps } from "../../../interfaces/interfaces";
import { useGlobalContext } from "../../Context/LineUpContext";

interface Props {
  pokemonData: PokemonData;
}

const InfoRow = ({ label, data, color }: RowProps) => {
  interface PropertyProps {
    property: String;
    value?: String | Number;
  }

  const Property = ({ property, value }: PropertyProps) => {
    return (
      <span className="bg-gray-200 py-1 px-3 rounded-full text-base">
        <span className=" text-gray-500 font-semibold">{property}</span>
        <span className="ml-1 bg-gray-200 text-pokeRed font-semibold">
          {value}
        </span>
      </span>
    );
  };

  return (
    <div
      className={` ${
        color === "w" ? "bg-white" : "bg-gray-50"
      }px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-center items-start align-bottom`}
    >
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-wrap gap-1">
        {data.map((ability: Info, index: Number) =>
          ability.value == null ? (
            <Property property={ability.label} />
          ) : (
            <Property property={ability.label} value={ability.value} />
          )
        )}
      </dd>
    </div>
  );
};

const SearchItem = ({ pokemonData }: Props) => {
  const { lineUp, setLineUp } = useGlobalContext();
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
              <p className="text-xl leading-6 font-medium text-gray-900">
                {pokemonData.name}
              </p>
            </div>
            <div className="w-full">
              <InfoRow
                label="Abilities"
                data={pokemonData.abilities}
                color="g"
              />
              <InfoRow label="Stats" data={pokemonData.stats} color="w" />
              {/* <InfoRow label="Moves" data={pokemonData.moves} color="g" /> */}

              {/* <InfoRow
                label="Held Items"
                data={}
                color="w"
              />
              <InfoRow label="Type" data="{} color="g" /> */}
              {/* <InfoRow label="Species" data={} color="w" /> */}
            </div>
          </div>
          <div className="border-t border-gray-100">
            <dl>
              <div className="bg-white px-3 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Actions</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex shadow-xl flex-grow text-pokeYellow w-full h-full font-bold justify-center py-2 px-4 border border-transparent text-md rounded-md bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    onClick={() => setLineUp([...lineUp, pokemonData])}
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
