export function getImage(pokemon) {
    let url = `https://ifpb.github.io/javascript-exercises/challenges/w3c/pokedex/code-response/img/${pokemon
      .toLocaleLowerCase()
      .replace(/[\[\].!'@,><|://\\;&*()_+=]/g, "")}.png`;

      return url
  }


export function firstCapitalLetter(str) {
    let palavra = str.substring(0, 1).toUpperCase().concat(str.substring(1));
    return palavra;
  }