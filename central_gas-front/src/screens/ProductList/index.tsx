import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../components/footer';
import { signUp } from '../../services/API/client/SignUp';


const products = [
    { id: 1, name: 'Gás', image: 'https://media.istockphoto.com/id/1381628440/pt/vetorial/gas-cylinder-oxygen-balloon-isolated-icon-equipment-for-safe-butane-and-propane-petroleum.jpg?s=612x612&w=0&k=20&c=vcz-cvS6woiihBt3Q12Opuf_o4JZF-f7RSmOQoppUf4=' },
    { id: 2, name: 'Água', image: 'https://media.istockphoto.com/id/1381628440/pt/vetorial/gas-cylinder-oxygen-balloon-isolated-icon-equipment-for-safe-butane-and-propane-petroleum.jpg?s=612x612&w=0&k=20&c=vcz-cvS6woiihBt3Q12Opuf_o4JZF-f7RSmOQoppUf4=' },
    { id: 3, name: 'Lenha', image: 'https://media.istockphoto.com/id/1381628440/pt/vetorial/gas-cylinder-oxygen-balloon-isolated-icon-equipment-for-safe-butane-and-propane-petroleum.jpg?s=612x612&w=0&k=20&c=vcz-cvS6woiihBt3Q12Opuf_o4JZF-f7RSmOQoppUf4=' },
    { id: 4, name: 'Gelo', image: 'https://media.istockphoto.com/id/1381628440/pt/vetorial/gas-cylinder-oxygen-balloon-isolated-icon-equipment-for-safe-butane-and-propane-petroleum.jpg?s=612x612&w=0&k=20&c=vcz-cvS6woiihBt3Q12Opuf_o4JZF-f7RSmOQoppUf4=' },
    { id: 5, name: 'Carvão', image: 'https://media.istockphoto.com/id/1381628440/pt/vetorial/gas-cylinder-oxygen-balloon-isolated-icon-equipment-for-safe-butane-and-propane-petroleum.jpg?s=612x612&w=0&k=20&c=vcz-cvS6woiihBt3Q12Opuf_o4JZF-f7RSmOQoppUf4=' },
    { id: 6, name: 'Mangueira e válvula', image: 'https://media.istockphoto.com/id/1381628440/pt/vetorial/gas-cylinder-oxygen-balloon-isolated-icon-equipment-for-safe-butane-and-propane-petroleum.jpg?s=612x612&w=0&k=20&c=vcz-cvS6woiihBt3Q12Opuf_o4JZF-f7RSmOQoppUf4=' },
    { id: 7, name: 'BOMBINHA PARA ÁGUA GALÃO 20L.', image: 'https://media.istockphoto.com/id/1381628440/pt/vetorial/gas-cylinder-oxygen-balloon-isolated-icon-equipment-for-safe-butane-and-propane-petroleum.jpg?s=612x612&w=0&k=20&c=vcz-cvS6woiihBt3Q12Opuf_o4JZF-f7RSmOQoppUf4=' },
];

export default function ProductList({ navigation }) {



    return (
        <ScrollView style={styles.containerMain}>

            <Header
                breadcrumbs={[
                    { label: "Página Inicial", onPress: () => navigation.navigate("initialPage") },
                    { label: "Cadastrar", onPress: () => navigation.navigate("signUp") },
                    { label: "Login", onPress: () => navigation.navigate("login") },
                ]}
            />

            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "flex-end", marginTop: -20, }}>
                <Text style={styles.textIncitial}>AQUI VOCÊ VAI UMA LISTA DE TODOS OS PRODUTOS OFERECIDOS PELOS PARCEIROS DA CENTRAL DE GÁS E ÁGUA, CLICANDO SOBRE O PRODUTO DESEJADO VOCÊ JÁ CONSEGUE FAZER O SEU PEDIDO.</Text>
                <View style={styles.triangle1} />
                <View style={styles.triangle2} />
                <View style={styles.triangle} />
            </View>
            <View style={styles.container}>
                <View style={styles.productContainer}>
                    {products.map(product => (
                        <View key={product.id} style={styles.productBox}>
                            <Image source={product.image} style={styles.productImage} />
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productDescription}>várias marcas e produtos</Text>
                        </View>
                    ))}
                </View>
            </View>
            <Footer themeDark={false} />
        </ScrollView>
    );
}