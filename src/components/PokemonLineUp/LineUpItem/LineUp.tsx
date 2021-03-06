import React from "react";
import { PokemonData } from "../../../interfaces/interfaces";

interface Props {
  details: PokemonData;
}

const LineUp = ({ details }: Props) => {
  return (
    // <button onClick={() => console.log("CLICKED")}>
    <div className="flex bg-gray-100 justify-center gap-1 items-center pr-3 rounded-xl">
      <img
        className="h-16 w-16"
        src={`${details.img}`}
        alt={`${details.name} Pokemon`}
      />
      <div>
        <p className="text-xl font-medium">{details.name}</p>
      </div>
    </div>
    // </button>
  );
};

export default LineUp;
