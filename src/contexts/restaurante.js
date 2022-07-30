import { createContext, useState } from "react";
import { apagarMesa, buscarRestaurante, criarMesa } from "../services/api";

export const RestauranteContext = createContext({});

export const RestauranteProvider = ({ children }) => {
  const [restaurante, setRestaurante] = useState(null);
  const [flag, setFlag] = useState(false);

  async function buscar(nome) {
    setRestaurante(await buscarRestaurante(nome));
  }

  async function novaMesa() {
    await criarMesa({
      numero: Number(restaurante.mesas.length + 1),
      restaurante_id: restaurante.id,
    });
    setFlag(true);
  }

  async function apagar(mesaId) {
    await apagarMesa(mesaId);
    setFlag(true);
  }

  return (
    <RestauranteContext.Provider
      value={{
        flag: flag,
        setFlag,
        restaurante: restaurante,
        buscar,
        novaMesa,
        apagar,
      }}
    >
      {children}
    </RestauranteContext.Provider>
  );
};
