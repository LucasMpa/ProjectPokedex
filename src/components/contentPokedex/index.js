import React from "react";
import {
  Container,
  ImgPokemon,
  PokeCard,
  TypeIndicator,
  ContainerTypes,
} from "./styles";
import Data from "../../exemple/pokedex.json";
import {
  firstCapitalLetter,
  getImage,
  getTypeOfPokemon,
  pokemonType,
} from "../../utils";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function ContentPokedex() {
  return (
    <Container>
      {Data.map((_, index) => {
        return (
          <PokeCard>
            <p>
              {Data[index].name} #{Data[index].id}
            </p>
            <ImgPokemon src={getImage(Data[index].name)} />
            <ContainerTypes>
              {getTypeOfPokemon(Data[index].type[0])}
              <TypeIndicator typePokemon={pokemonType}>
                {firstCapitalLetter(Data[index].type[0])}
              </TypeIndicator>

              {getTypeOfPokemon(Data[index].type[1])}
              {Data[index].type[1] ? (
                <TypeIndicator typePokemon={pokemonType}>
                  {Data[index].type[1]
                    ? firstCapitalLetter(Data[index].type[1])
                    : null}
                </TypeIndicator>
              ) : null}
            </ContainerTypes>

            <MdKeyboardArrowUp size={30} />
          </PokeCard>
        );
      })}
    </Container>
  );
}
