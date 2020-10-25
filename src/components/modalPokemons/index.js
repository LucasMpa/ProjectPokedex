import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default function ModalPokemons({ active, cancel, pokemonParticulars }) {
  
  return (
    <Modal visible={active} onCancel={cancel}>
      <p>Pokemon: {pokemonParticulars.name}</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}
