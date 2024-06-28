import { API_URL } from "@/utils";
import axios from "axios";
export const fetchFoodsData = async () => {
  const apiUrl = `${API_URL}/foods`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data; // Return fetched data
  } catch (error) {
    throw error; // Rethrow error to handle it in the caller
  }
};
export const createFood = async (newFood: Product): Promise<Product> => {
  try {
    const response = await axios.post<Product>(`${API_URL}/foods`, newFood);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateFood = async (foodId: string, updatedFood: Product): Promise<Product> => {
  try {
    const response = await axios.put<Product>(`${API_URL}/foods/${foodId}`, updatedFood);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteFood = async (foodId: string | number): Promise<boolean> => {
  try {
    await axios.delete(`${API_URL}/foods/${foodId}`);
    return true;
  } catch (error) {
    return false;
  }
};
export const search = async (searchTerm: string) => {
  try {
    const response = await axios.post(`${API_URL}/foods/search`, {
      name: searchTerm
    });
    return response.data; // Return the data received from the API
  } catch (error) {
    throw error;
  }
};
export const getAllPost = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}
export const getAllPrice = async (): Promise<number[]> => {
  try {
    const response = await axios.get<number[]>(`${API_URL}/foods/prices`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAllType = async (): Promise<string[]> => {
  try {
    const response = await axios.get<string[]>(`${API_URL}/foods/types`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const filter = async (price: number) => {
  try {
    const response = await axios.get(`${API_URL}/foods/filter/${price}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getFoodsByType = async (type: string) => {
  try {
    const response = await axios.get(`${API_URL}/foods/types/${type}`)
    return response.data.data;
  } catch (error) {
    throw error;
  }
}
