import { createContext, useState } from "react";
import { buscarRestaurante } from "../services/api";

export const RestauranteContext = createContext({});

export const RestauranteProvider = ({ children }) => {
  const [restaurante, setRestaurante] = useState(null);

  async function buscar(nome) {
    setRestaurante(await buscarRestaurante(nome));
  }

  return (
    <RestauranteContext.Provider
      value={{
        restaurante: restaurante,
        buscar,
      }}
    >
      {children}
    </RestauranteContext.Provider>
  );
};
