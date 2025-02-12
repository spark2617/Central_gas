import Footer from "../../components/footer";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/header";

export default function Instructions({ navigation }) {

    // const navigation = useNavigation()

    return (
        <ScrollView>

            <Header
                breadcrumbs={[
                    { label: "Página Inicial", onPress: () => navigation.navigate("initialPage") },
                    { label: "Lista de produto", onPress: () => navigation.navigate("productList") },
                    { label: "Cadastrar", onPress: () => navigation.navigate("signUp") },
                ]}
            />
            <ScrollView style={styles.container}>
                <View>
                    <Text style={[styles.text, { width: "auto" }]}>
                        Usar o APP da CENTRAL DE GÁS E ÀGUA é muito fácil, se você esta chegando agora
                        , muito obrigado pela preferência, aqui nessa página você irá encontrar um passo a passo para saber como fazer um pedido.
                    </Text>
                </View>

                <View style={styles.containerText}>
                    <Text style={styles.passo}>
                        PASSO 1 -
                    </Text>
                    <Text style={styles.text}>
                        Se você ainda não fez seu seu cadastro, então o primeiro passo é esse, criar o seu cadastro, para isso basta clicar <Text
                            style={styles.textCaixaAlta}
                            onPress={() => navigation.navigate("signUp")}
                        >
                            AQUI
                        </Text>.
                    </Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.passo}>
                        PASSO 2 -
                    </Text>

                    <Text style={styles.text}>
                        Após fazer se cadastro o proximo passo é acesar o APP clicando em login ou FAZER PEDIDO, no formulario que irá abri coloque o seu nome de usuário e senha que escolheu ao criar seu cadastro e clicque em ACESSAR O APP.
                    </Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.passo}>
                        PASSO 3 -
                    </Text>
                    <Text style={styles.text}>
                        Dentro do APP em sua conta criada através do cadastro que você fez vá em fazer pedido, na janela que irá abrir selecione todos os produtos que deseja pedir e clique em continuar.
                    </Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={[styles.passo]}>
                        PASSO 4 -
                    </Text>
                    <View>
                        <View>
                            <Text style={styles.text}>
                                Na próxima página você tera acesso a revenda cadastrada que esta mais próxima da sua casa e que dispoem do(s) produto(s) que você selecionou na página anterior, agora clique sobre a marca da revenda, você acessará a página de vendas da revenda dentro do APP, nesse momento você tera acesso aos preços e a outros produtos que essa revenda parceira esta ofertando no APP, se o preço lhe agradou basta clicar no(s) produto(s) para lançar-los no carrinho, após basta clicar em concluir.
                            </Text>
                        </View>
                        <Text style={[styles.textCaixaAlta, styles.text]}>
                            OBS.: CASO OS PREÇOS NÃO ESTAREM DE ACORDO COM SUA EXPECTATIVA BASTA CANCELAR O PEDIDO E COMEÇAR NOVAMENTO, PROVALVEMENTE O SISTEMA PODERÁ LHE TRAZER OUTRA REVENDA QUE ESTEJA PRÓXIMA A SUA RESIDÊNCIA.
                        </Text>
                    </View>
                </View>
                <View style={[styles.containerText, { marginBottom: 26 }]}>
                    <Text style={styles.passo}>
                        PASSO 5 -
                    </Text>
                    <Text style={styles.text}>
                        Pronto... seu pedido já foi encaminhado para revenda, agora é só aguardar a confimarção de quanto tempo ela levará para fazer a entrega em sua residência.
                    </Text>
                </View>
            </ScrollView>
            <Footer themeDark={true} />
        </ScrollView>
    )
}