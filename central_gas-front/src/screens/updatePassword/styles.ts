import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";


export const styles = StyleSheet.create({
    container: {
      marginTop: 50,
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
    inputContainer: {
      position: "relative",
      marginBottom: 20,
    },
    input: {
      backgroundColor: "#FFFFFF",
      borderRadius: 5,
      padding: 10,
      color: "#000",
      fontSize: 16,
      paddingRight: 40,
      height: 45,
    },
    eyeIcon: {
      position: "absolute",
      right: 10,
      top: 10,
    },
    inputError: {
      borderColor: "red",
      borderWidth: 1,
    },
    errorText: {
      fontSize: 12,
      color: "red",
      textAlign: "left",
      marginTop: -10,
      marginBottom: 10,
    },
    submitButton: {
      backgroundColor: "#FFFFFF",
      padding: 15,
      borderRadius: 5,
      alignItems: "center",
    },
    submitButtonText: {
      color: "#2B4C2F",
      fontWeight: "bold",
    },
  });