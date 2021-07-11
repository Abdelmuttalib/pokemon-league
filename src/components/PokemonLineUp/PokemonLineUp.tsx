import React, { useEffect, useState, useContext } from "react";
import { PokemonData } from "../../interfaces/interfaces";
import { useGlobalContext } from "../Context/LineUpContext";
import LineUp from "./LineUpItem/LineUp";
import NullLineUp from "./LineUpItem/NullLineUp";
import { v4 as uuidv4 } from "uuid";

const PokemonLineUp = () => {
  const { lineUp } = useGlobalContext();
  const [lineUpArray, setLineUpArray] = useState<Array<PokemonData | null>>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const backArray = [...Array(6)];
  backArray.fill(null);
  useEffect(() => {
    const updateLineUp = () => {
      for (let i = lineUp?.length - 1; i >= 0; i--) {
        function addToLineUp(): void {
          backArray.splice(i, 1, lineUp[i]);
          setLineUpArray(backArray);
        }
        lineUp[i] != undefined && lineUp[i] != null
          ? addToLineUp()
          : backArray.push(null);
      }
    };

    // console.log("Context value: ", lineUp, typeof lineUp);
    lineUp != undefined && updateLineUp();
  }, [lineUp]);

  return (
    <div className="w-full h-full bg-white">
      <div className="flex flex-col">
        <div className="w-full h-14 bg-gray-900 text-pokeYellow text-2xl tracking-tight font-semibold flex justify-center items-center text-center">
          Pokemon Line Up
        </div>
        <div className="w-full h-48 bg-white flex-grow grid grid-cols-3 gap-4 justify-center justify-items-center place-content-center">
          {lineUpArray.map((lineUpElement, index: Number) =>
            lineUpElement != null ? (
              <LineUp key={uuidv4()} details={lineUpElement} />
            ) : (
              <NullLineUp key={uuidv4()} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonLineUp;
