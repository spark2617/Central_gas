import { API } from "../api";

export const checkPasswordRecoveryCode = async (userData: any) => {
    try {
      const response = await API.post('/recovery_verification_code/', userData);
      return response.data;
  
      
    } catch (error) {
  
      console.error('Error na verificação de codigo:', error);
  
      throw error;
    }
  };