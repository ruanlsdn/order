import { createContext, useState } from "react";
import {
  apagarMesa,
  atualizarMesa,
  buscarRestaurante,
  criarMesa,
} from "../services/api";

export const RestauranteContext = createContext({});

export const RestauranteProvider = ({ children }) => {
  const [restaurante, setRestaurante] = useState(null);
  const [flag, setFlag] = useState(false);
  const [text, setText] = useState("");
  const [visibility, setVisibility] = useState(false);

  async function buscar(id) {
    setRestaurante(await buscarRestaurante(id));
  }

  async function novaMesa() {
    const response = await criarMesa({
      numero: Number(restaurante.mesas.length + 1),
      restaurante_id: restaurante.id,
    });

    if (response == 201) {
      setVisibility(true);
      setText("Mesa adicionada com sucesso!");
    }

    setFlag(true);
  }

  async function atualizar(mesaId, data) {
    const response = await atualizarMesa(mesaId, data);
    if (response == 200) {
      setVisibility(true);
      setText("Mesa atualizada com sucesso!");
    }
    setFlag(true);
  }

  async function apagar(mesaId) {
    const response = await apagarMesa(mesaId);
    if (response == 204) {
      setVisibility(true);
      setText("Mesa apagada com sucesso!");
    }
    setFlag(true);
  }

  return (
    <RestauranteContext.Provider
      value={{
        text: text,
        visibility: visibility,
        setVisibility,
        flag: flag,
        setFlag,
        restaurante: restaurante,
        buscar,
        novaMesa,
        atualizar,
        apagar,
      }}
    >
      {children}
    </RestauranteContext.Provider>
  );
};
