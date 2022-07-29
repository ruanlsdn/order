import React, { useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import { Order } from "./components/order";
import { ComandaContext } from "../../contexts/comanda";
import { useIsFocused } from "@react-navigation/native";

export const OrderScreen = () => {
  const { comandas, buscar, mesaId, finalizar, setFinalizar } =
    useContext(ComandaContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused || finalizar) {
      buscar(mesaId);
    }
    setFinalizar(false);
  }, [isFocused, finalizar]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {comandas.map((comanda, i) => (
        <Order key={comanda.id} comanda={comanda} index={i + 1} />
      ))}
    </ScrollView>
  );
};
