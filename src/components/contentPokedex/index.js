import React from "react";
import { ContainerCard, PokeCard} from "./styles";
import Data from "../../exemple/pokedex.json";
export default function ContentPokedex() {

    var str = Data[82].name;
    alert( str.replace(/[\[\].!'@,><|://\\;&*()_+=]/g, "") )
   return (


  


    <ContainerCard>
      
      {Data.map((images, index) => (
          <div style={{display: "flex", justifyContent: "center"}}>
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
             src={`https://ifpb.github.io/javascript-exercises/challenges/w3c/pokedex/code-response/img/${Data[index].name.toLocaleLowerCase().replace(/[\[\].!'@,><|://\\;&*()_+=]/g, "")}.png`}
           ></img>
           <p style={{ color: "#FFF" }}>{Data[index].type[0]}{Data[index].type[1] ? ' / '+ Data[index].type[1] : null}</p>
         </PokeCard>
         
         </div>
          ))
          }
    </ContainerCard>
  );
}
