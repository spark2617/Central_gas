import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    height: "80%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  containerLogo: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  resultItem: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  companyImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  unitInfo: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 12,
    color: "#777",
  },
  dateContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "80%",
  },
  expectativaText: {
    fontSize: 14,
    marginRight: 10,
    color: "#555",
  },
  calendarIcon: {
    marginRight: 10,
  },
  dateText: {
    fontSize: 14,
    color: "#333",
  },
  clearButton: {
    backgroundColor: "#E57373",
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  clearButtonText: {
    color: "#FFF",
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  seePriceButton: {
    flex: 1,
    backgroundColor: "#2B4C2F",
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
    alignItems: "center",
  },
  seePriceText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#E57373",
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#CCC",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  closeButtonText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});