import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { getNearestCompany } from '../../../services/API/company/getNearestCompany';
import { getToken } from '../../../services/storagem/token';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { CirclePlus, CircleX, MinusCircle } from 'lucide-react-native';

interface Visible {
  visible: boolean;
  onClose: () => void;
  onModalResult: () => void;
}

export default function OrderResquest({ visible, onClose, onModalResult }: Visible,) {
  const produtos = [
    { id: '1', nome: 'Gás' },
    { id: '2', nome: 'Água' },
    { id: '3', nome: 'Mangueira' },
    { id: '4', nome: 'Registro' },
    { id: '5', nome: 'Bombinha água galão 20L' },
    { id: '6', nome: 'Carvão' },
  ];

  const [selectedProducts, setSelectedProducts] = useState<any>({});


  const handleProductToggle = (product: any) => {
    setSelectedProducts((prevSelected: any) => {
      const newSelected = { ...prevSelected };
      if (newSelected[product.id]) {
        delete newSelected[product.id];
      } else {
        newSelected[product.id] = { ...product, quantidade: 1 };
      }
      return newSelected;
    });
  };

  const handleQuantityChange = (productId: string, increment: boolean) => {
    setSelectedProducts((prevSelected: any) => {
      const currentQuantity = prevSelected[productId]?.quantidade || 1;
      const newQuantity = increment ? currentQuantity + 1 : Math.max(currentQuantity - 1, 1);
      return {
        ...prevSelected,
        [productId]: {
          ...prevSelected[productId],
          quantidade: newQuantity,
        },
      };
    });
  };


  const handleConfirmOrder = async () => {
    // Cria uma lista de IDs e quantidades dos produtos selecionados
    const orderDetails = Object.values(selectedProducts).map((product: any) => ({
      id: Number(product.id),  // Converte o ID para número
      nome: product.nome,
      quantidade: Number(product.quantidade),  // Garante que a quantidade seja um número
    }));

    try {
      const token = await getToken(); // Pega o token do contexto ou autenticação

      // Faz a requisição à API, passando os detalhes do pedido
      const response = await getNearestCompany(token, orderDetails);

      await AsyncStorage.setItem('orderResults', JSON.stringify(response));

      onClose();
      onModalResult();
      setSelectedProducts({});

    } catch (error) {
      console.error('Erro ao buscar empresas:', error);

    }
  };





  return (

    <Modal visible={visible} animationType="slide" transparent={true}>

      <View style={styles.overlay}>

        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Escolha aqui o(s) produto(s) que deseja </Text>

          {/* Caixa de apresentação de produtos */}
          <View>
            <FlatList
              data={produtos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.productItem}>

                  <TouchableOpacity
                    style={[
                      styles.productToggle,
                      selectedProducts[item.id] && styles.selectedProduct,
                    ]}
                    onPress={() => handleProductToggle(item)}
                  >
                    <Text style={styles.productText}>{item.nome}</Text>
                  </TouchableOpacity>



                  {selectedProducts[item.id] && (
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity onPress={() => handleQuantityChange(item.id, false)}>
                        <MinusCircle size={24} color="#00796b" />
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>
                        {selectedProducts[item.id].quantidade}
                      </Text>
                      <TouchableOpacity onPress={() => handleQuantityChange(item.id, true)}>
                        <CirclePlus size={24} color="#00796b" />
                      </TouchableOpacity>
                    </View>
                  )}

                </View>
              )}
              ListEmptyComponent={<Text>Nenhum produto disponível.</Text>}
            />
          </View>


          {/* Botão para confirmar o pedido */}
          <View>
          <TouchableOpacity
            style={[styles.confirmButton, !Object.keys(selectedProducts).length && styles.disabledButton]}
            onPress={handleConfirmOrder}
            disabled={!Object.keys(selectedProducts).length}
          >
            <Text style={styles.confirmButtonText}>Proceguir</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cancelar</Text>
          </TouchableOpacity>
          </View>


        </View>

        {/* <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Escolha aqui o(s) produto(s) que deseja </Text>
          <FlatList
            data={produtos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.productItem}>

                <TouchableOpacity
                  style={[
                    styles.productToggle,
                    selectedProducts[item.id] && styles.selectedProduct,
                  ]}
                  onPress={() => handleProductToggle(item)}
                >
                  <Text style={styles.productText}>{item.nome}</Text>
                </TouchableOpacity>


                
                {selectedProducts[item.id] && (
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => handleQuantityChange(item.id, false)}>
                      <MinusCircle  size={24} color="#00796b" />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>
                      {selectedProducts[item.id].quantidade}
                    </Text>
                    <TouchableOpacity onPress={() => handleQuantityChange(item.id, true)}>
                      <CirclePlus size={24} color="#00796b" />
                    </TouchableOpacity>
                  </View>
                )}

              </View>
            )}
            ListEmptyComponent={<Text>Nenhum produto disponível.</Text>}
          />

          <TouchableOpacity
            style={[styles.confirmButton, !Object.keys(selectedProducts).length && styles.disabledButton]}
            onPress={handleConfirmOrder}
            disabled={!Object.keys(selectedProducts).length}
          >
            <Text style={styles.confirmButtonText}>Proceguir</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View> */}



      </View>

    </Modal>
  );
};
