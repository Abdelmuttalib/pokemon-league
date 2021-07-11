export interface Info {
  label: String;
  value?: String | Number;
}

export interface Stats {
  name: String;
  value: Number;
}

export interface PokemonData {
  name: String;
  abilities?: void | Info;
  moves?: void | Info;
  species: String | Object;
  img: String | Object;
  stats?: void | Info;
  type: String | Object;
}

export interface FormData {
  "pokemon-name": String;
}

export interface Status {
  status: String;
  message: String;
}

// export interface RowProps {
//   label: String;
//   data: void | Info | undefined;
//   color: String;
// }
