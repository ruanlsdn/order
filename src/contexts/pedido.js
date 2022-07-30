import { createContext, useContext, useState } from "react";
import { novoPedido } from "../services/api";
import { ComandaContext } from "./comanda";

export const PedidoContext = createContext({});

export const PedidoProvider = ({ children }) => {
  const { comandaId } = useContext(ComandaContext);
  const [text, setText] = useState("");
  const [visibility, setVisibility] = useState(false);

  async function novo(quantidade, produtoId) {
    const response = await novoPedido({
      quantidade: Number(quantidade),
      produto_id: produtoId,
      comanda_id: comandaId,
    });

    if (response == 201) {
      setText("Pedido adicionado com sucesso!");
      setVisibility(true);
    }
  }

  return (
    <PedidoContext.Provider
      value={{ novo, text: text, visibility: visibility, setVisibility }}
    >
      {children}
    </PedidoContext.Provider>
  );
};
