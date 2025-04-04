import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarDetails } from './operations';

const initialState = {
  cars: [],
  selectedCar: null,
  favorites: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      if (state.favorites.includes(carId)) {
        state.favorites = state.favorites.filter(id => id !== carId);
      } else {
        state.favorites.push(carId);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload.cars || action.payload; // Учитываем возможную разницу API
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Ошибка загрузки машин';
      })
      .addCase(fetchCarDetails.pending, state => {
        state.selectedCar = null;
        state.error = null;
      })
      .addCase(fetchCarDetails.fulfilled, (state, action) => {
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarDetails.rejected, (state, action) => {
        state.error = action.payload || 'Ошибка загрузки деталей машины';
      });
  },
});

export const { toggleFavorite } = carsSlice.actions;
export default carsSlice.reducer;
