import { useIsFocused } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { RestauranteContext } from "../../contexts/restaurante";
import { TableChart } from "./components/TableChart";

export const Home = () => {
  const { restaurante, buscar, flag, setFlag } = useContext(RestauranteContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused || flag) buscar("TESTE");
    setFlag(false);
  }, [isFocused, flag]);

  return restaurante == null ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Não há mesas.</Text>
    </View>
  ) : (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {restaurante.mesas.map((mesa, i) => (
        <TableChart key={mesa.id} mesa={mesa} index={i} />
      ))}
    </ScrollView>
  );
};
