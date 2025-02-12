import { API } from "../api";

export const resendPasswordRecoveryCode = async (userData: any) => {
    try {
        const response = await API.post('/resend_code/', userData);
        return response.data;


    } catch (error) {

        console.error('Error na verificação de codigo:', error);

        throw error;
    }
};