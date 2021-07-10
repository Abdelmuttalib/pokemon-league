import { createContext, useContext } from "react";
import { PokemonData } from "../../interfaces/interfaces";

export type GlobalContent = {
  lineUp: Array<PokemonData> | null;
  setLineUp: (c: Object) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  lineUp: null,
  setLineUp: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
