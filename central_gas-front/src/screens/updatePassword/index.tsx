import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator, } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import NotificationModal from "../../components/modals/notification";
import { updatePassword } from "../../services/API/client/updatePassword";
import { styles } from "./styles";
import { ArrowLeft, EyeIcon, EyeOffIcon } from "lucide-react-native";
import { colors } from "../../styles/colors";

export default function UpdatePassword({ route, navigation }) {

    const { num, codigo } = route.params;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [mensagemModal, setMensagemModal] = useState("");
    const [typeModal, setTypeModal] = useState("envio");

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    

    const validationSchema = Yup.object().shape({
        newPassword: Yup.string()
            .min(6, "A senha deve ter pelo menos 6 caracteres")
            .required("Nova senha é obrigatória"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("newPassword")], "As senhas não coincidem")
            .required("Confirmação de senha é obrigatória"),
    });

    const handleSubmitUpdatePassword = async (values: any) => {
        const data = {
            nova_senha: values.newPassword,
            codigo: codigo,
            telefone: `55${num}`
        };

        try {
            setIsSubmitting(true);

            const response = await updatePassword(data);
            const successMessage = "Senha atualizada com sucesso!";
            setMensagemModal(successMessage);
            setTypeModal("sucesso");
            showNotification();

        }
        catch (error) {
            let errorMessage = "Erro ao atualizar senha. Tente novamente.";

            console.log(JSON.stringify(error.response.data))

            // if (error.response) {
            //   const status = error.response.status;
            //   if (status === 400) {
            //     errorMessage = error.response.data.message || "Dados inválidos.";
            //   } else if (status === 500) {
            //     errorMessage = "Erro interno do servidor. Tente novamente mais tarde.";
            //   }
            // } else if (error.request) {
            //   errorMessage = "Não foi possível conectar ao servidor. Verifique sua conexão.";
            //   setTypeModal("conection");
            // }

            setMensagemModal(errorMessage);
            setTypeModal("error");
            showNotification();

        } finally {
            setIsSubmitting(false);
        }
    };

    const showNotification = () => setModalVisible(true);
    const closeNotification = () => setModalVisible(false);

    const goBack = () => navigation.goBack();

    return (
        <View style={{ flex: 1, padding: 50, backgroundColor:colors.green[100]}}>
            <TouchableOpacity onPress={goBack}>
                <ArrowLeft size={36} color="white" />
            </TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.formTitle}>Atualizar Senha</Text>

                <Formik
                    initialValues={{ newPassword: "", confirmPassword: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => handleSubmitUpdatePassword(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            {/* Nova Senha */}
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={[
                                        styles.input,
                                        touched.newPassword && errors.newPassword ? styles.inputError : null,
                                    ]}
                                    placeholder="Nova senha"
                                    placeholderTextColor="#C4C4C4"
                                    secureTextEntry={!showNewPassword}
                                    onChangeText={handleChange("newPassword")}
                                    onBlur={handleBlur("newPassword")}
                                    value={values.newPassword}
                                    autoCapitalize="none"
                                />
                                <TouchableOpacity
                                    style={styles.eyeIcon}
                                    onPress={() => setShowNewPassword(!showNewPassword)}
                                >
                                    {showNewPassword ?
                                        <EyeOffIcon size={24} color={"#a6a6a6"} /> :
                                        <EyeIcon size={24} color={"#a6a6a6"} />
                                    }
                                </TouchableOpacity>
                            </View>
                            {touched.newPassword && errors.newPassword && (
                                <Text style={styles.errorText}>{errors.newPassword}</Text>
                            )}

                            {/* Confirmar Senha */}
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={[
                                        styles.input,
                                        touched.confirmPassword && errors.confirmPassword ? styles.inputError : null,
                                    ]}
                                    placeholder="Confirmar senha"
                                    placeholderTextColor="#C4C4C4"
                                    secureTextEntry={!showConfirmPassword}
                                    onChangeText={handleChange("confirmPassword")}
                                    onBlur={handleBlur("confirmPassword")}
                                    autoCapitalize="none"
                                    value={values.confirmPassword}
                                />
                                <TouchableOpacity
                                    style={styles.eyeIcon}
                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ?
                                        <EyeOffIcon size={24} color={"#a6a6a6"} /> :
                                        <EyeIcon size={24} color={"#a6a6a6"} />
                                    }
                                </TouchableOpacity>
                            </View>
                            {touched.confirmPassword && errors.confirmPassword && (
                                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                            )}

                            <TouchableOpacity
                                style={styles.submitButton}
                                onPress={() => handleSubmit()}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <ActivityIndicator color="green" />
                                ) : (
                                    <Text style={styles.submitButtonText}>ATUALIZAR SENHA</Text>
                                )}
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>

                <NotificationModal
                    visible={isModalVisible}
                    onClose={closeNotification}
                    message={mensagemModal}
                    type={typeModal}
                />
            </View>
        </View>
    );
}

