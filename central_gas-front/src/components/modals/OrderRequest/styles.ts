import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    // alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  productItem: {
    // alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // width: '100%',
    paddingVertical:8,
    flexDirection:"row"
    
  },
  productToggle: {
    flex: 1,
    padding: 10,
    borderRadius: 6,
    borderColor: '#28a745',
    borderWidth: 1,
  },
  selectedProduct: {
    backgroundColor: '#e0f7fa',
    borderColor: '#00796b',
  },
  productText: {
    fontSize: 16,
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 8,
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
  },
  closeButtonText: {
    color: '#f00',
    textAlign: 'center',
    fontSize: 16,
  },
});