import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { RestauranteContext } from "../../contexts/restaurante";
import { findByName } from "../../services/api";
import { TableChart } from "./components/TableChart";

export const Home = () => {
  const { restaurante, buscar } = useContext(RestauranteContext);

  useEffect(() => {
    buscar("RC CHURRASCO");
  }, []);

  return restaurante == null ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Não há mesas.</Text>
    </View>
  ) : (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {restaurante.mesas.map((mesa) => (
        <TableChart key={mesa.id} id={mesa.id} numero={mesa.numero} />
      ))}
    </ScrollView>
  );
};
