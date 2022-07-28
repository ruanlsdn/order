import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { MenuHeaderCategories } from "./menu-header-categories";

export const MenuHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search_bar_container}>
        <TextInput
          activeOutlineColor="black"
          placeholder="Pesquisar..."
          style={styles.text_input}
          mode="outlined"
          right={
            <TextInput.Icon
              style={{ marginTop: 15 }}
              onPress={() => console.log("buscando...")}
              name="magnify"
            />
          }
        />
      </View>
      <View style={{ height: 100, padding: 5 }}>
        <ScrollView horizontal>
          <MenuHeaderCategories />
          <MenuHeaderCategories />
          <MenuHeaderCategories />
          <MenuHeaderCategories />
          <MenuHeaderCategories />
          <MenuHeaderCategories />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#ffff",
  },
  search_bar_container: {
    height: 50,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text_input: {
    width: "100%",
    height: 50,
  },
  button: {
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
