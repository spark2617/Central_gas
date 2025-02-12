import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, FlatList, ScrollView, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import OrderResquest from "../../components/modals/OrderRequest";
import ProductQueryResults from "../../components/modals/ProductQueryResults";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { getToken } from "../../services/storagem/token";
import { getClient } from "../../services/API/client/getClient";
import { getOrder } from "../../services/API/order/getOrder";
import NotificationModal from "../../components/modals/notification";
import moment from 'moment';



export default function ClientArea({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalResultVisible, setModalResultVisible] = useState(false);


    const [isLoading, setIsLoading] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [errorType, setErrorType] = useState<'envio' | 'error' | 'sucesso' | "conection">("conection");


    const [pedidos, setPedidos] = useState([]);
    const [cliente, setCliente] = useState({});



    const openModal = () => {
        setModalVisible(true);

    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const closeErrorModal = () => {
        setErrorModalVisible(false);
    };

    const formatarData = (data:Date) => {
        return moment(data).format('DD/MM/YY');  // Formata a data para 'dia/mês/ano'
    };

    const calcularDiasParaExpectativa = (expectativa) => {
        if (!expectativa) return "Sem expectativa";  // Caso não haja expectativa
        const hoje = moment();
        const expectativaMoment = moment(expectativa);
        const dias = expectativaMoment.diff(hoje, 'days');  // Calcula a diferença em dias
        return dias < 0 ? `${Math.abs(dias)} dias atrás` : `${dias} dias restantes`;
    };

    const formatarPreco = (preco) => {
        return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });  // Formata o preço como moeda brasileira
    };

    async function prepareUserInformation() {
        try {
            // Abrir loading
            setIsLoading(true);

            const token = await getToken();


            // Verificar se o token existe
            if (!token) {
                setErrorMessage("Sessão expirada. Por favor, faça login novamente.");
                setErrorType("error");
                setErrorModalVisible(true);
                navigation.navigate("login");
                return; // Encerrar execução se não houver token
            }

            // Tentar obter os dados do usuário e histórico de pedidos
            try {
                const orderHistory = await getOrder(token);
                const user = await getClient(token);

                setCliente(user[0]);
                setPedidos(orderHistory);
            } catch (error) {
                console.error("Erro ao buscar dados do servidor:", error);

                // Tratar erro de autenticação ou outros erros de API
                if (error.response?.status === 401) {
                    setErrorMessage("Sessão expirada. Por favor, faça login novamente.");
                    setErrorType("error");
                    setErrorModalVisible(true);
                    navigation.navigate("login");
                } else {
                    setErrorMessage("Erro ao carregar dados. Tente novamente mais tarde.");
                    setErrorType("error");
                    setErrorModalVisible(true);
                }
            }
        } catch (error) {
            console.error("Erro inesperado:", error);
            setErrorMessage("Algo deu errado. Por favor, tente novamente.");
            setErrorType("error");
            setErrorModalVisible(true);
        } finally {
            // Fechar loading, independente de sucesso ou erro
            setIsLoading(false);
        }
    }

    function formatarNome(nomeCompleto: string) {
        if (!nomeCompleto) return ''; 
        const partes = nomeCompleto.trim().split(' '); // Divide o nome em partes
        const nome = partes[0]; 
        const sobrenome = partes.length > 1 ? partes[partes.length - 1] : ''; 

        return [nome, sobrenome]
            .map(parte => parte.charAt(0).toUpperCase() + parte.slice(1).toLowerCase())
            .join(' ');
    }


    useEffect(() => {
        prepareUserInformation()
    }, [])

    function onModalResult() {
        setModalResultVisible(!modalResultVisible)
    }

    function notificarPedidoConfirmado() {

        const message: string = "Seu pedido foi confirmado com sucesso! A revenda foi notificada e, em breve, entrará em contato com você. Agradecemos por escolher nossos serviços!"

        setErrorMessage(message);
        setErrorType("sucesso");
        setErrorModalVisible(true);
    }

    if (isLoading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size={60} color="#009240" />
            </View>
        );
    }

    return (
        <ScrollView>
            {/* Modal para fazer pedido */}
            <OrderResquest visible={modalVisible} onClose={closeModal} onModalResult={onModalResult} />



            {/* Modal de notificações (para erros ou mensagens) */}
            <NotificationModal
                visible={errorModalVisible}
                onClose={closeErrorModal}
                message={errorMessage}
                type={errorType}
            />

            <ProductQueryResults
                visible={modalResultVisible}
                notification={notificarPedidoConfirmado}
                onClose={onModalResult}
                onSeePrice={(id) => console.log(`Ver preços para pedido ${id}`)}
                onCancelOrder={(id) => console.log(`Cancelar pedido ${id}`)}
            />

            <Header title={`Olá ${formatarNome(cliente.nome_completo)}`} />

            <View style={styles.boxTextExplication}>
                <Text style={styles.textExplication}>PARA FAZER SEU PEDIDO BASTA CLICAR EM {'>> '}FAZER PEDIDO{' <<'}</Text>
            </View>

            <View style={styles.container}>
                {/* Botão "Fazer um Pedido" */}
                <View style={[{ alignItems: "center" }]}>
                    <TouchableOpacity onPress={openModal} style={styles.orderButton}>
                        <Text style={styles.orderButtonText}>FAZER UM PEDIDO</Text>
                    </TouchableOpacity>
                </View>

                {/* Seção "Quem Somos" */}
                <View style={styles.aboutSection}>
                    <Text style={styles.sectionTitle}>QUEM SOMOS</Text>
                    <Text style={styles.sectionText}>
                        A CENTRAL DE GÁS & ÁGUA, como o próprio nome já diz, ela é uma CENTRAL que dá acesso a várias revendas de gás aqui da cidade.
                        Aqui no APP tem mais de 90 revendas tanto para gás, água, carvão, gelo e lenha. Assim que você clicar em "FAZER PEDIDO", abrirá
                        uma janela onde você precisará de todos os itens que deseja pedir. Logo em seguida clique em "PROSSEGUIR" e o sistema irá lhe
                        apresentar a revenda mais próxima da sua casa que trabalha com o(s) produto(s) que está à procura.
                    </Text>
                </View>

                {/* Tabela "Histórico de Pedidos" */}
                <View style={styles.historySection}>
                    <Text style={styles.historyTitle}>HISTÓRICO DE PEDIDOS</Text>
                    <View style={styles.historyTable}>
                        <View style={styles.tableHeader}>
                            <Text numberOfLines={1} style={[styles.tableHeaderText, { flex: 0.7 }]}>PRODUTO</Text>
                            <Text numberOfLines={1} style={[styles.tableHeaderText, { flex: 0.7 }]}>DIA</Text>
                            <Text numberOfLines={1} style={[styles.tableHeaderText, { flex: 0.7 }]}>PREÇO</Text>
                            <Text numberOfLines={1} style={[styles.tableHeaderText, { flex: 1 }]}>EXPECTATIVA</Text>
                            <Text numberOfLines={1} style={[styles.tableHeaderText, { flex: 0.9 }]}>FORNECEDOR</Text>
                        </View>

                        <FlatList
                            style={{ height: 80 }}
                            nestedScrollEnabled={true}
                            showsVerticalScrollIndicator={true}
                            data={pedidos}
                            renderItem={({ item }) => (
                                <View style={[styles.tableRow]}>
                                    <Text style={[styles.tableCell, { flex: 0.8 }]}>{item.produto.nome.toUpperCase()}</Text>
                                    <Text style={[styles.tableCell, { flex: 0.8 }]}>
                                        {formatarData(item.data_pedido)}  {/* Formata a data do pedido */}
                                    </Text>
                                    <Text style={[styles.tableCell, { flex: 0.8 }]}>
                                        {formatarPreco(item.preco)}  {/* Formata o preço */}
                                    </Text>
                                    <Text style={[styles.tableCell, { flex: 1 }]}>
                                        {calcularDiasParaExpectativa(item.expectativa)}  {/* Calcula e formata os dias para a expectativa */}
                                    </Text>
                                    <Text style={[styles.tableCell, { flex: 1 }]}>{item.nome_empresa.toUpperCase()}</Text>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </View>
            <Footer themeDark={false} />
        </ScrollView>
    );
}