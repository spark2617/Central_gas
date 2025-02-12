import { API } from "../api";

export const signUp = async (userData: any) => {
    try {
        const response = await API.post('clientes/', userData);
        return response.data;


    } catch (error) {

        console.error('Erro ao registrar usuário:', error);

        throw error;
    }
};


export async function ForgotPassword(data: any) {
    try {
        const response = await API.post('recuperar_senha/', data);
        return response.data;


    } catch (error) {

        console.error('Erro ao registrar usuário:', error);

        throw error;
    }
}

export async function getUser(token: string) {
    try {
        const response = await API.get('clientes/', {
            headers: {
                'Authorization': `Token ${token}`,
            }
        });

        return response.data;
    } catch (error) {

        console.error('Erro ao obter pedidos:', error);
        throw error;
    }
};