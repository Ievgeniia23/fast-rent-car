import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCarDetails } from '../../redux/cars/operations';
import {
  selectSelectedCar,
  selectIsLoading,
  selectError,
} from '../../redux/cars/selectors';
import styles from './CarDetails.module.css';

const CarDetails = () => {
  const { id } = useParams(); // отримуємо id з URL
  const dispatch = useDispatch();
  const car = useSelector(selectSelectedCar); // Використовуємо селектор для вибору обраної машини
  const isLoading = useSelector(selectIsLoading); // Статус завантаження
  const error = useSelector(selectError); // Статус помилки

  useEffect(() => {
    if (!car && id) {
      dispatch(fetchCarDetails(id)); // Викликаємо fetchCarDetails для конкретної машини
    }
  }, [dispatch, id, car]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!car) return <div>No car found</div>;

  return (
    <div className={styles.parentBox}>
      {/* Рендеримо деталі машини */}
      <h2>
        {car.brand} {car.model}, {car.year}
      </h2>
      <p>{car.description}</p>
      {/* Додати решту інформації про машину */}
    </div>
  );
};

export default CarDetails;
