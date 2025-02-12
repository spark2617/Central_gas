import { API } from "../api";

export const getClient = async (token: string) => {
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