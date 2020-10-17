import styled from "styled-components";

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #ddd;
  padding: 10px;

   
`;

export const PokeCard = styled.div`
  border-width: 10px;
  width: 200px;
  height: 300px;
  background-color: #000;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
      text-align: center;
        color: #FFF;
    }
`;

export const Teste = styled.div`

  
`;
