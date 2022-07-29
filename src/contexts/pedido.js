import { createContext, useContext } from "react";
import { novoPedido } from "../services/api";
import { ComandaContext } from "./comanda";

export const PedidoContext = createContext({});

export const PedidoProvider = ({ children }) => {
  const { comandaId } = useContext(ComandaContext);

  async function novo(quantidade, produtoId) {
    await novoPedido({
      quantidade: Number(quantidade),
      produto_id: produtoId,
      comanda_id: comandaId,
    });
  }

  return (
    <PedidoContext.Provider value={{ novo }}>{children}</PedidoContext.Provider>
  );
};
