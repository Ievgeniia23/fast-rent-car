import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global/';


export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async ({ page = 1, filters = {} }, thunkAPI) => {
    try {
      const response = await axios.get('/cars', {
        params: { page, ...filters },
      });

      
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
