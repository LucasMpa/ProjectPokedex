import React, { useState } from "react";
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
import ModalPokemons from "../modalPokemons";

export default function ContentPokedex() {
  const [visibilityModal, setVisibilityModal] = useState(false);
  const [chosenPokemon, setChosenPokemon] = useState([]);

  return (
    <Container>
      {Data.map((_, index) => {
        return (
          <PokeCard
            onClick={() => {
              setVisibilityModal(true);
              setChosenPokemon(Data[index]);
            }}
          >
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
              {Data[index].type[1] && (
                <TypeIndicator typePokemon={pokemonType}>
                  {Data[index].type[1] &&
                    firstCapitalLetter(Data[index].type[1])}
                </TypeIndicator>
              )}
            </ContainerTypes>

            <MdKeyboardArrowUp size={30} />
          </PokeCard>
        );
      })}
      <ModalPokemons
        active={visibilityModal}
        cancel={() => {
          setVisibilityModal(false);
        }}
        pokemonParticulars={chosenPokemon}
      />
    </Container>
  );
}
