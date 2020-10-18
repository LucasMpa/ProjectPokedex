import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  display: grid;
  grid-gap: 3rem 2rem;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
  @keyframes pokemon-up {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-0.4rem);
    }
  }
`;

export const ImgPokemon = styled.img`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  width: 150px;
  height: 150px;
`;

export const PokeCard = styled.div`
  width: 200px;
  height: 300px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & :hover {
    animation: pokemon-up 0.3s;
    cursor: pointer;
  }
  & > p {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #000;
  }
`;

export const TypeIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => props.typePokemon.bg};
  color: ${(props) => props.typePokemon.fc};
  background: ${(props) => props.typePokemon.gradient};
  width: 70px;
  height: 30px;
  margin-bottom: 10px;
`;

export const ContainerTypes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
