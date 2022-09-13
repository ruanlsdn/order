import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8080/",
  // baseURL: "http://10.0.2.2:8080/",
  baseURL: "https://order-controller-api.herokuapp.com/",
});

export async function efetuarLogin(data) {
  return await (
    await api.post("api/v1/auth/login", data)
  ).data;
}

//RESTAURANTE REQUEST
export async function buscarRestaurante(id) {
  return await (
    await api.get("api/v1/restaurante/" + id)
  ).data;
}

//MESA REQUEST
export async function criarMesa(data) {
  return await (
    await api.post("api/v1/mesa", data)
  ).status;
}

export async function atualizarMesa(mesaId, data) {
  return await (
    await api.patch("api/v1/mesa/" + mesaId, data)
  ).status;
}

export async function apagarMesa(mesaId) {
  return await (
    await api.delete("api/v1/mesa/" + mesaId)
  ).status;
}

//COMANDA REQUEST
export async function criarComanda(data) {
  return await (
    await api.post("api/v1/comanda", data)
  ).status;
}

export async function buscarComanda(mesaId) {
  return await (
    await api.get("api/v1/comanda/buscar/" + mesaId)
  ).data;
}

export async function calcularComanda(comandaId) {
  return await (
    await api.get("api/v1/comanda/calcular/" + comandaId)
  ).data;
}

export async function dividirComanda(data) {
  return await (
    await api.post("api/v1/comanda/dividir", data)
  ).status;
}

export async function finalizarComanda(comandaId) {
  return await (
    await api.get("api/v1/comanda/finalizar/" + comandaId)
  ).status;
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

export async function atualizarPedido(pedidoId, data) {
  return await (
    await api.patch(`api/v1/pedido/${pedidoId}`, data)
  ).status;
}
