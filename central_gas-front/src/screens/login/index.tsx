import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import NotificationModal from "../../components/modals/notification/index";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import { resendPasswordRecoveryCode } from "../../services/API/client/resendPasswordRecoveryCode";
import { checkPasswordRecoveryCode } from "../../services/API/client/checkPasswordRecoveryCode";
import { login } from "../../services/API/client/login";
import { saveToken } from "../../services/storagem/token";
import { styles } from "./styles";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { passwordRecovery } from "../../services/API/client/passwordRecovery";


interface FormValues {
    telefone: string;
    senha: string;
}

const validationSchema = Yup.object().shape({
    telefone: Yup.string().required("Telefone é obrigatório"),
    senha: Yup.string().required("Senha é obrigatória"),
});

export default function Login({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [mensagemModal, setMensagemModal] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [typeModal, setTypeModal] = useState("envio");
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [telefone, setTelefone] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const showNotification = () => {
        setModalVisible(true);
    };

    const closeNotification = () => {
        setModalVisible(false);
        typeModal == "envio" ? navigation.navigate('verifyCode', { num: `${telefone}`, mode: "login", functionVerificationCodeCadastro: passwordRecovery, reenviarCodigoCadastro: resendPasswordRecoveryCode }) : ""
    };

    function togglePasswordVisibility() {
        setPasswordVisible(!isPasswordVisible);
    }

    async function handleLogin(values: FormValues) {
        const data = {
            telefone: `55${values.telefone}`,
            password: values.senha
        };

        try {
            setIsSubmitting(true);
            const response = await login(data);
            setIsSubmitting(false);

            await saveToken(response.token);
            navigation.navigate('clientArea');
        } catch (error) {
            setTypeModal("error");
            const status = error.response?.status;
            let errorMessage = "Senha ou Telefone está incorreto";

            if (status === 400) {
                errorMessage = "Senha ou Telefone está incorreto";
            } else if (status === 401) {
                if (error.response.data.detail === "Não encontramos esse usuario em nossa base de dados") {
                    errorMessage = "Número de telefone não cadastrado";
                } else {
                    errorMessage = "Senha incorreta";
                }
            } else if (status === 500) {
                errorMessage = "Erro no servidor. Tente novamente mais tarde!";
            }
            setIsSubmitting(false);
            setMensagemModal(errorMessage);
            showNotification();
        }
    }

    async function handleClickEsqueciSenha(telefone: string) {
        setIsLoading(true);
        if (!telefone) {
            setMensagemModal("Por favor, insira um telefone válido antes de prosseguir.");
            setTypeModal("error");
            setModalVisible(true);
            setIsLoading(false);
            return;
        }

        const data = { telefone: `55${telefone}` };

        try {
            await passwordRecovery(data);
            setMensagemModal("Estamos enviando um código no WhatsApp para recuperação de senha.");
            setTypeModal("envio");
            setModalVisible(true);
            setTelefone(telefone);
        } catch (error) {
            const status = error.response.status;
            if (status === 404) {
                setMensagemModal("Verifique seu número de telefone");
            } else if (status === 500) {
                setMensagemModal("Erro no servidor. Tente novamente mais tarde.");
            }
            setTypeModal("error");
            setModalVisible(true);
        }
        setIsLoading(false);
    }

    return (
        <ScrollView style={{ backgroundColor: "#009240" }}>
            <Header
                breadcrumbs={[
                    { label: "Página Inicial", onPress: () => navigation.navigate("initialPage") },
                    { label: "Como usar app", onPress: () => navigation.navigate("instructions") },
                    { label: "Cadastrar", onPress: () => navigation.navigate("signUp")},
                ]}
            />
            <Formik
                initialValues={{
                    telefone: "",
                    senha: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.formContainer}>
                        <Text style={styles.formTitle}>LOGIN</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="TELEFONE CELULAR COM DDD"
                            placeholderTextColor="#C4C4C4"
                            onChangeText={handleChange("telefone")}
                            onBlur={handleBlur("telefone")}
                            keyboardType="phone-pad"
                        />
                        {touched.telefone && errors.telefone && <Text style={styles.errorText}>{errors.telefone}</Text>}

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="SENHA"
                                placeholderTextColor="#C4C4C4"
                                autoCapitalize="none"
                                secureTextEntry={!isPasswordVisible}
                                onChangeText={handleChange("senha")}
                                onBlur={handleBlur("senha")}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                                {isPasswordVisible ?
                                    <EyeOffIcon size={24} color={"#a6a6a6"} /> :
                                    <EyeIcon size={24} color={"#a6a6a6"} />
                                }
                            </TouchableOpacity>
                        </View>
                        {touched.senha && errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}

                        <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()} disabled={isSubmitting}>
                            {isSubmitting ? (
                                <ActivityIndicator color="green" />
                            ) : (
                                <Text style={styles.submitButtonText}>ACESSAR O APP</Text>
                            )}
                        </TouchableOpacity>

                        <View style={styles.containerEsqSenha}>
                            <TouchableOpacity onPress={() => handleClickEsqueciSenha(values.telefone)}>
                                <Text style={styles.textEsqSenha}>
                                    Esqueci minha senha
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <NotificationModal
                            visible={isModalVisible}
                            onClose={closeNotification}
                            message={mensagemModal}
                            type={typeModal}
                        />
                    </View>
                )}
            </Formik>
            {isLoading && (
                <View style={styles.loadingOverlay}>
                    <ActivityIndicator size="large" color="#ffff" />
                </View>
            )}
            <Footer themeDark={false} />
        </ScrollView>
    );
}
