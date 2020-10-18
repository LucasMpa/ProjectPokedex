import Type from "../exemple/typesConfig.json";
export function getImage(pokemon) {
  let url = `https://ifpb.github.io/javascript-exercises/challenges/w3c/pokedex/code-response/img/${pokemon
    .replace(/,?\s+/g, "-")
    .toLocaleLowerCase()
    .replace(/['.]/g, "")}.png`;

  return url;
}

export function firstCapitalLetter(str) {
  let palavra = str.substring(0, 1).toUpperCase().concat(str.substring(1));
  return palavra;
}

export let pokemonType;
export function getTypeOfPokemon(type) {
  switch (type) {
    case "grass":
      pokemonType = Type.grass;
      break;
    case "fire":
      pokemonType = Type.fire;
      break;
    case "water":
      pokemonType = Type.water;
      break;
    case "bug":
      pokemonType = Type.bug;
      break;
    case "normal":
      pokemonType = Type.normal;
      break;
    case "poison":
      pokemonType = Type.poison;
      break;
    case "electric":
      pokemonType = Type.electric;
      break;
    case "fairy":
      pokemonType = Type.fairy;
      break;
    case "fighting":
      pokemonType = Type.fighting;
      break;
    case "psychic":
      pokemonType = Type.psychic;
      break;
    case "rock":
      pokemonType = Type.rock;
      break;
    case "steel":
      pokemonType = Type.steel;
      break;
    case "ice":
      pokemonType = Type.ice;
      break;
    case "ghost":
      pokemonType = Type.ghost;
      break;
    case "flying":
      pokemonType = Type.flying;
      break;
    case "ground":
      pokemonType = Type.ground;
      break;
    case "dragon":
      pokemonType = Type.dragon;
      break;

    default:
      pokemonType = null;
  }
}
