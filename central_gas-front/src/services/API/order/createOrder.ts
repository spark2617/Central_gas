import { API } from "../api";

export const createOrder = async (token: string | null, pedido: any) => {
    try {
        const response = await API.post('pedidos/', pedido, {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json',  // Adiciona o cabeçalho Content-Type
            }
        });

        return response.data;  // Retorna a resposta da API
    } catch (error) {
        console.error('Erro ao criar pedido:', error);
        throw error;  // Propaga o erro para ser tratado no componente
    }
};
