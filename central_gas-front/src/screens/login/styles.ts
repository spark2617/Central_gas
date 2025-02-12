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
    formContainer: {
      marginTop: 60,
      padding: 20,
      backgroundColor: '#2B4C2F',
      height: 400,
      borderTopWidth:3,
      borderBottomWidth:3,
      borderColor:"#fff"
    },
    formTitle: {
      fontSize: 15,
      color: '#FFFFFF',
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: 20,
    },
    input: {
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      padding: 10,
      paddingRight: 40,
      marginVertical: 5,
      color: '#000',
      height: 45,
      marginTop: 15,
    },
    inputContainer: {
      position: "relative",
    },
    eyeIcon: {
      position: "absolute",
      right: 10,
      top: 25,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    smallInput: {
      flex: 1,
      marginRight: 5,
    },
    mediumInput: {
      flex: 2,
      marginRight: 5,
    },
    submitButton: {
      backgroundColor: '#FFFFFF',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 35,
    },
    submitButtonText: {
      color: '#2B4C2F',
      fontWeight: 'bold',
    },
  
    containerEsqSenha: {
      justifyContent: "center",
      alignItems: "center",
      width: "auto"
    },
    textEsqSenha: {
      fontSize: 14,
      fontWeight: "600",
      marginTop: 30,
      color: colors.gray[100]
    },
    errorText: {
      color: "red",
      fontSize: 12,
      marginVertical: 5,
    },
  })