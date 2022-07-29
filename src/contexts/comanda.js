import { createContext, useState } from "react";
import { buscarComanda, criarComanda, finalizarComanda } from "../services/api";

export const ComandaContext = createContext({});

export const ComandaProvider = ({ children }) => {
  const [comandas, setComandas] = useState(new Array());
  const [flag, setFlag] = useState(false);
  const [mesaId, setMesaId] = useState("");
  const [comandaId, setComandaId] = useState("");
  const [qtdeComanda, setQtdeComanda] = useState(0);

  async function criar(data) {
    await criarComanda({ cliente: "teste", mesa_id: mesaId });
    await buscar(mesaId);
    setQtdeComanda(1);
  }

  async function buscar(mesaId) {
    setComandas(await buscarComanda(mesaId));
  }

  async function finalizar(comandaId) {
    await finalizarComanda(comandaId);
    if (comandas.length == 0) setQtdeComanda(0);
    setFlag(true);
  }

  return (
    <ComandaContext.Provider
      value={{
        comandas: comandas,
        criar,
        buscar,
        finalizar,
        setComandaId,
        comandaId: comandaId,
        setMesaId,
        mesaId: mesaId,
        setFlag,
        flag: flag,
        qtdeComanda: qtdeComanda,
        setQtdeComanda,
      }}
    >
      {children}
    </ComandaContext.Provider>
  );
};
