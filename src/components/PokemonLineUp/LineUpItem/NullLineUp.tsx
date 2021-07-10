import React from "react";

const NullLineUp = () => {
  return (
    <div className="flex bg-gray-200 justify-center gap-1 items-center py-4 px-2 rounded-xl">
      <img
        className="h-6 w-6 text-pink-900 bg-opacity-25"
        src="https://icons-for-free.com/iconfiles/png/512/pokemon+pokemongo+icon-1320190500519737353.png"
        alt="Workflow logo"
      />
      <div>
        <p className="text-center text-sm font-normal text-gray-500">
          + Add Pokemon here
        </p>
      </div>
    </div>
  );
};

export default NullLineUp;
