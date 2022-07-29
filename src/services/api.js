import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3000/",
});

//RESTAURANTE REQUEST
export async function buscarRestaurante(name) {
  return await (
    await api.get("api/v1/restaurante/" + name)
  ).data;
}

//COMANDA REQUEST
export async function buscarComanda(id) {
  return await (
    await api.get("api/v1/comanda/buscar/" + id)
  ).data;
}

export async function calcularComanda(id) {
  return await (
    await api.get("api/v1/comanda/calcular/" + id)
  ).data;
}

export async function finalizarComanda(id) {
  return await (
    await api.get("api/v1/comanda/finalizar/" + id)
  ).data;
}

//PRODUTO REQUEST
export async function buscarProdutos(restauranteId) {
  return await (
    await api.get("api/v1/produto/buscar/" + restauranteId)
  ).data;
}

export async function buscarProdutosPeloNome(nome, restauranteId) {
  return await (
    await api.get("api/v1/produto/sql/buscar/" + nome + "/" + restauranteId)
  ).data;
}

export async function buscarProdutosPelaCategoria(restauranteId, categoria) {
  return await (
    await api.get("api/v1/produto/buscar/" + restauranteId + "/" + categoria)
  ).data;
}

//CATEGORIA REQUEST
export async function buscarCategorias() {
  return await (
    await api.get("api/v1/categoria")
  ).data;
}

//PEDIDO REQUEST
export async function novoPedido(data) {
  return await (
    await api.post("api/v1/pedido", data)
  ).status;
}
