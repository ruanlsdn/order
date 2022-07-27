import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { TableChart } from "./components/TableChart";

export const Home = () => {
  const array = [{ teste: "teste" }, { teste: "teste" }, { teste: "teste" }];
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <TableChart />
    </ScrollView>
  );
};
