import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { MenuBodyRow } from "./menu-body-row";

export const MenuBody = () => {
  return (
    <ScrollView
      style={{ flex: 1, width: "95%", alignSelf: "center" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
      <MenuBodyRow />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#ffff",
  },
  content_container: {
    backgroundColor: "#ececec",
    marginVertical: 10,
    width: "95%",
    alignSelf: "center",
  },
});
