import React from "react";
import { ContainerCard, PokeCard } from "./styles";
import Data from "../../exemple/pokedex.json";
import { firstCapitalLetter, getImage } from "../../utils";


export default function ContentPokedex() {
  return (
    <ContainerCard>
      {Data.map((_, index) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PokeCard>
              <p>
                {Data[index].name} #{Data[index].id}
              </p>
              <img
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#e11",
                  width: "150px",
                  height: "150px",
                }}
                src={getImage(Data[index].name)}
              ></img>
              <p style={{ color: "#FFF" }}>
                {firstCapitalLetter(Data[index].type[0])}
                {Data[index].type[1] ? " / " + firstCapitalLetter(Data[index].type[1]) : null}
              </p>
            </PokeCard>
          </div>
        );
      })}
    </ContainerCard>
  );
}
