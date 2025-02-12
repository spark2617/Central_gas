import { API } from "../api";

export const getOrder = async (token: string) => {
    try {
        const response = await API.get('pedidos/', {
            headers: {
                'Authorization': `token ${token}`,
            }
        });

        return response.data;
    } catch (error) {

        console.error('Erro ao obter pedidos:', error);
        throw error;
    }
};