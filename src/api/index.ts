import { API_URL } from "@/utils";
import axios from "axios";

export const fetchFoodsData = async () => {
    const apiUrl = `${API_URL}/foods`;
    try {
      const response = await axios.get(apiUrl);
      return response.data.data; // Return fetched data
    } catch (error) {
      console.error('Failed to fetch data:', error);
      throw error; // Rethrow error to handle it in the caller
    }
  };

  export const createFood = async (newFood: Product): Promise<Product> => {
    try {
      const response = await axios.post<Product>(`${API_URL}/foods`, newFood);
      return response.data;
    } catch (error) {
      console.error('Failed to create food:', error);
      throw error;
    }
  };

  export const updateFood = async (foodId: string, updatedFood: Product): Promise<Product> => {
    try {
      const response = await axios.put<Product>(`${API_URL}/foods/${foodId}`, updatedFood);
      return response.data;
    } catch (error) {
      console.error(`Failed to update food with id ${foodId}:`, error);
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
      console.error('Error searching foods:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  };