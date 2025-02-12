import { API } from '../api';


export const getNearestCompany = async (token: string|null, listaProdutos: any) => {
  try {
   
    const response = await API.post(
      'find_nearest_company/', 
      {
 
        produtos: listaProdutos,  
      },
      {
        headers: {
          'Authorization': `token ${token}`, 
          'Content-Type': 'application/json',  
        },
      }
    );

    
    return response.data;
  } catch (error:any) {
    
    console.error('Erro ao obter empresas mais próximas:', error.response ? error.response.data : error.message);
    throw error; 
  }
};