import { useIsFocused } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { RestauranteContext } from "../../contexts/restaurante";
import { findByName } from "../../services/api";
import { TableChart } from "./components/TableChart";

export const Home = () => {
  const { restaurante, buscar } = useContext(RestauranteContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) buscar("TESTE");
  }, [isFocused]);

  return restaurante == null ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Não há mesas.</Text>
    </View>
  ) : (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {restaurante.mesas.map((mesa) => (
        <TableChart key={mesa.id} mesa={mesa} />
      ))}
    </ScrollView>
  );
};
