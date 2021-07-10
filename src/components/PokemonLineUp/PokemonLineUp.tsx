import React, { useContext } from "react";
import { useGlobalContext } from "../Context/LineUpContext";
import LineUp from "./LineUpItem/LineUp";
import NullLineUp from "./LineUpItem/NullLineUp";

const PokemonLineUp = () => {
  const { lineUp } = useGlobalContext();
  const ar = [...Array(6)].map((e) => Array(6).fill(null));
  console.log("LLL: ", lineUp);
  var arr: Array<Object> = [];
  for (let i = 5; i >= 0; i--) {
    if (lineUp[i] != undefined && lineUp[i] != null) {
      arr.push(lineUp[i]);
    } else {
      arr.push(null);
    }
  }
  return (
    <div className="w-full h-full bg-white">
      <div className="flex flex-col">
        <div className="w-full h-14 bg-gray-900 text-pokeRed text-3xl tracking-tight font-semibold flex justify-center items-center text-center">
          Pokemon Line Up
        </div>
        <div className="w-full h-48 bg-white flex-grow grid grid-cols-3 gap-4 justify-center justify-items-center place-content-center">
          {arr.map((ar, index: Number) =>
            ar != null ? <LineUp details={ar} /> : <NullLineUp />
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonLineUp;
