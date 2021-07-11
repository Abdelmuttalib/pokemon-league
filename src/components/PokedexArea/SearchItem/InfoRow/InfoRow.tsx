import React from "react";
import { v4 as uuidv4 } from "uuid";
import { PokemonData, Info } from "../../../../interfaces/interfaces";
import Property from "./Property/Property";

interface Props {
  label: String;
  data: void | Info | undefined;
  color: String;
}

const InfoRow = ({ label, data, color }: Props) => {
  return (
    <div
      className={`${
        color === "w" ? "bg-white" : "bg-gray-50"
      }px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-center items-start align-bottom`}
    >
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-wrap gap-1">
        {data?.map((ability: Info, index: Number) =>
          ability.value == null ? (
            <Property key={uuidv4()} property={ability.label} />
          ) : (
            <Property
              key={uuidv4()}
              property={ability.label}
              value={ability.value}
            />
          )
        )}
      </dd>
    </div>
  );
};

export default InfoRow;
