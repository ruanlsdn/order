import { createContext, useState } from "react";
import { buscarComanda, criarComanda, finalizarComanda } from "../services/api";

export const ComandaContext = createContext({});

export const ComandaProvider = ({ children }) => {
  const [comandas, setComandas] = useState(new Array());
  const [flag, setFlag] = useState(false);
  const [mesaId, setMesaId] = useState("");
  const [comandaId, setComandaId] = useState("");
  const [qtdeComanda, setQtdeComanda] = useState(0);
  const [text, setText] = useState("");
  const [visibility, setVisibility] = useState(false);

  async function criar(data) {
    const response = await criarComanda({
      cliente: "CLIENTE TESTE",
      mesa_id: mesaId,
    });
    if (response == 201) {
      setVisibility(true);
      setText("Comanda adicionada com sucesso!");
    }
    await buscar(mesaId);
    setQtdeComanda(1);
  }

  async function buscar(mesaId) {
    setComandas(await buscarComanda(mesaId));
  }

  async function finalizar(comandaId) {
    const response = await finalizarComanda(comandaId);
    if (response == 200) {
      setVisibility(true);
      setText("Comanda finalizada com sucesso!");
    }
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
        text: text,
        visibility: visibility,
        setVisibility,
      }}
    >
      {children}
    </ComandaContext.Provider>
  );
};
