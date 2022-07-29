import { createContext, useState } from "react";
import { buscarComanda } from "../services/api";

export const ComandaContext = createContext({});

export const ComandaProvider = ({ children }) => {
  const [comandas, setComandas] = useState(new Array());
  const [finalizar, setFinalizar] = useState(false);
  const [mesaId, setMesaId] = useState("");
  const [comandaId, setComandaId] = useState("");

  async function buscar(id) {
    setComandas(await buscarComanda(id));
  }

  return (
    <ComandaContext.Provider
      value={{
        comandas: comandas,
        buscar,
        setComandaId,
        comandaId: comandaId,
        setMesaId,
        mesaId: mesaId,
        setFinalizar,
        finalizar: finalizar,
      }}
    >
      {children}
    </ComandaContext.Provider>
  );
};
