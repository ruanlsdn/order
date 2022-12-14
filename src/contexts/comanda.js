import { createContext, useState } from "react";
import {
  buscarComanda,
  calcularComanda,
  criarComanda,
  dividirComanda,
  finalizarComanda,
} from "../services/api";

export const ComandaContext = createContext({});

export const ComandaProvider = ({ children }) => {
  const [comandas, setComandas] = useState(new Array());
  const [flag, setFlag] = useState(false);
  const [mesaId, setMesaId] = useState("");
  const [comandaId, setComandaId] = useState("");
  const [qtdeComanda, setQtdeComanda] = useState(0);
  const [text, setText] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [dividirCriar, setDividirCriar] = useState(false);
  const [showNovaComandaModal, setShowNovaComandaModal] = useState(false);
  const [showDividirComandaModal, setShowDividirComandaModal] = useState(false);
  const pedidos = [];

  async function criar(cliente) {
    const response = await criarComanda({
      cliente: cliente,
      mesa_id: mesaId,
    });

    if (response == 201) {
      setVisibility(true);
      setText("Comanda adicionada com sucesso!");
    }

    setQtdeComanda(1);
    setFlag(true);
  }

  async function buscar(mesaId) {
    const response = await buscarComanda(mesaId);
    if (response.length == 0) setQtdeComanda(0);
    setComandas(response);
  }

  async function dividir(cliente) {
    const response = await dividirComanda({
      cliente: cliente,
      mesa_id: mesaId,
      comanda_id: comandaId,
      pedidos,
    });

    if (response == 201) {
      setVisibility(true);
      setText("Comanda dividida com sucesso!");
    }

    setFlag(true);
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
        dividir,
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
        showNovaComandaModal: showNovaComandaModal,
        setShowNovaComandaModal,
        showDividirComandaModal: showDividirComandaModal,
        setShowDividirComandaModal,
        dividirCriar: dividirCriar,
        setDividirCriar,
        pedidos: pedidos,
      }}
    >
      {children}
    </ComandaContext.Provider>
  );
};
