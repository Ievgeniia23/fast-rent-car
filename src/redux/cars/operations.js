import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global/';

// Получение списка машин
export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async ({ page = 1, filters = {} }, thunkAPI) => {
    try {
      const response = await axios.get('/cars', {
        params: { page, ...filters },
      });

      // Убедимся, что данные приходят в правильном формате
      return {
        cars: Array.isArray(response.data)
          ? response.data
          : response.data.cars || [],
        totalPages: response.data.totalPages || 1,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Получение деталей автомобиля
export const fetchCarDetails = createAsyncThunk(
  'cars/fetchCarDetails',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
