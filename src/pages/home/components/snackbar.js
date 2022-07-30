import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Snackbar } from "react-native-paper";
import { RestauranteContext } from "../../../contexts/restaurante";

export const MySnackbar = ({ visible, text, setVisibility }) => {
  const onDismissSnackBar = () => setVisibility(false);
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismissSnackBar}
      action={{
        label: "OK",
        onPress: () => {
          // Do something
        },
      }}
      duration={750}
    >
      {text}
    </Snackbar>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-between",
//   },
// });
