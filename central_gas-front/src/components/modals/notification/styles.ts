import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    icon: {
      marginBottom: 10,
    },
    messageText: {
      fontSize: 16,
      textAlign: 'center',
      marginVertical: 10,
      color: '#171717',
      fontWeight: "500"
    },
    closeButton: {
      backgroundColor: '#4CAF50',
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 15,
      marginTop: 15,
    },
    closeButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
  