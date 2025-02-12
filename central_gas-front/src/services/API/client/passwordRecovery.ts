import { API } from "../api";

interface Data {
    telefone: string;
  }

export const passwordRecovery = async (data:Data) => {
  try {
    const response = await API.post('recover_password/', data);
    return response.data;

    
  } catch (error) {

    console.error('Error ao fazer login do usuario:', error);

    throw error;
  }
};