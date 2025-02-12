import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    loadingOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    container: {
      marginTop: 98,
      padding: 20,
      backgroundColor: "#2B4C2F",
      borderRadius: 6,
    },
    formTitle: {
      fontSize: 18,
      color: "#FFFFFF",
      fontWeight: "800",
      textAlign: "center",
      marginBottom: 20,
    },
    input: {
      backgroundColor: "#FFFFFF",
      borderRadius: 5,
      padding: 8,
      color: "#000",
      textAlign: "center",
      fontSize: 16,
      height: 45,
    },
    inputError: {
      borderColor: "red",
      borderWidth: 1,
    },
    errorText: {
      fontSize: 12,
      color: "red",
      textAlign: "center",
      marginTop: 5,
    },
    submitButton: {
      backgroundColor: "#FFFFFF",
      padding: 15,
      borderRadius: 5,
      alignItems: "center",
      marginTop: 35,
    },
    submitButtonText: {
      color: "#2B4C2F",
      fontWeight: "bold",
    },
    containerEsqSenha: {
      justifyContent: "center",
      alignItems: "center",
      width: "auto",
    },
    textEsqSenha: {
      fontSize: 14,
      fontWeight: "600",
      marginTop: 40,
      color: colors.gray[100],
    },
  });