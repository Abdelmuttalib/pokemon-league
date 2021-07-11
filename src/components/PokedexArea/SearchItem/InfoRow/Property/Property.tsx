import React from "react";

interface Props {
  property: String;
  value?: String | Number;
}

const Property = ({ property, value }: Props) => {
  return (
    <span className="bg-gray-200 py-1 px-3 rounded-full text-base">
      <span className=" text-gray-500 font-semibold">{property}</span>
      <span className="ml-1 bg-gray-200 text-pokeRed font-semibold">
        {value}
      </span>
    </span>
  );
};

export default Property;
