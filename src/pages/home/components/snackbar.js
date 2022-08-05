import * as React from "react";
import { Snackbar } from "react-native-paper";

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
      duration={850}
    >
      {text}
    </Snackbar>
  );
};
