import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';
import {
  selectCars,
  selectIsLoading,
  selectError,
} from '../../redux/cars/selectors';
import { toggleFavorite } from '../../redux/cars/slice';
import { selectFavorites } from '../../redux/cars/selectors';
import Loader from '../../components/Loader/Loader';

const CarList = ({ filters, page, setTotalPages }) => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars); // Получаем список машин из Redux
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars({ page, filters })).then(action => {
      if (action.payload && action.payload.totalPages) {
        setTotalPages(action.payload.totalPages);
      }
    });
  }, [dispatch, page, filters, setTotalPages]);

  if (isLoading) return <Loader />;
  if (error) return <p>Ошибка: {error}</p>;
  if (!cars || cars.length === 0) return <p>Нет доступных автомобилей</p>;

  return (
    <div>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <h2>{car.name}</h2>
            <button onClick={() => dispatch(toggleFavorite(car.id))}>
              {favorites.includes(car.id)
                ? 'Удалить из избранного'
                : 'Добавить в избранное'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
