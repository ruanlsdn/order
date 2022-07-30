import { createContext, useState } from "react";
import {
  buscarCategorias,
  buscarProdutos,
  buscarProdutosPelaCategoria,
  buscarProdutosPeloNome,
} from "../services/api";

export const ProdutoContext = createContext({});

export const ProdutoProvider = ({ children }) => {
  const [produtos, setProdutos] = useState(new Array());
  const [categorias, setCategorias] = useState(new Array());

  async function buscar(restauranteId) {
    setProdutos(await buscarProdutos(restauranteId));
  }

  async function buscarPelaCategoria(restauranteId, categoria) {
    setProdutos(await buscarProdutosPelaCategoria(restauranteId, categoria));
  }

  async function buscarPeloNome(nome, restauranteId) {
    setProdutos(await buscarProdutosPeloNome(nome, restauranteId));
  }

  async function buscarTodasCategorias() {
    setCategorias(await buscarCategorias());
  }

  return (
    <ProdutoContext.Provider
      value={{
        produtos: produtos,
        buscar,
        buscarPelaCategoria,
        buscarPeloNome,
        categorias: categorias,
        buscarTodasCategorias,
      }}
    >
      {children}
    </ProdutoContext.Provider>
  );
};
