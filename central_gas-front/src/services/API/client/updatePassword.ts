import { API } from "../api";

export async function updatePassword(data:any){
    try {
      const response = await API.post('update_password/', data);
      return response.data;
  
      
    } catch (error) {
  
      console.error('Erro ao registrar usuário:', error);
  
      throw error;
    }
  }
  