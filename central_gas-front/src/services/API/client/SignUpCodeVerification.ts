import { API } from "../api";

export const signUpCodeVerification = async (userData: any) => {
  try {
    const response = await API.post('/verification_code/', userData);
    return response.data;

    
  } catch (error) {

    console.error('Error na verificação de codigo:', error);

    throw error;
  }
};