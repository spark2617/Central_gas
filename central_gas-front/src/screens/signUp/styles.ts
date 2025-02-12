import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";


export const styles = StyleSheet.create({
    inputContainer: {
      position: "relative",
    },
    eyeIcon: {
      position: "absolute",
      right: 10,
      top: 15,
    },
    introContainer: {
      backgroundColor: '#009240',
      padding: 10,
      alignItems: 'center',
    },
    introText: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 12,
    },
    introSubText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 15,
      marginTop: 5,
    },
    formContainer: {
      padding: 20,
      backgroundColor: '#2B4C2F',
      borderTopWidth: 3,
      borderColor: "#fff",
      borderBottomWidth: 3,
    },
    formTitle: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    input: {
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginVertical: 5,
      color: '#000',
      height:45,
    },
    inputPassword: {
      paddingRight: 40,
    },
    row: {
      flexDirection: 'row',
      gap: 6,
    },
    submitButton: {
      backgroundColor: '#FFFFFF',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    submitButtonText: {
      color: '#2B4C2F',
      fontWeight: 'bold',
    },
    errorText: {
      color: "red",
      fontSize: 12,
      marginVertical: 5,
    },
  });