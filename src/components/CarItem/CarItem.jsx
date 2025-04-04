import React from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton'; // Компонент для обробки фаворитів
import styles from './CarItem.module.css';

// Форматування адреси для відображення
const formatAddress = address => {
  const parts = address.split(', ');
  return `${parts[1]} | ${parts[2]}`;
};

// Форматування пробігу, додаємо пробіли
const formatMileage = mileage => {
  if (!mileage) return 'N/A';
  return new Intl.NumberFormat('en-US').format(mileage).replace(/,/g, ' ');
};

const CarItem = ({ onFavoriteToggle, isFavorite, car }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {/* <FavoriteButton
          carId={car.id}
          isFavorite={isFavorite}
          onFavoriteToggle={onFavoriteToggle}
        /> */}
      </div>
      <img className={styles.picture} src={car.img} alt={car.brand} />
      <div className={styles.boxTitle}>
        <h6 className={styles.title}>
          {car.brand} <span className={styles.span}>{car.model}</span>,{' '}
          {car.year}
        </h6>
        <p>${car.rentalPrice}</p>
      </div>
      <p className={styles.text}>
        {formatAddress(car.address)} | {car.rentalCompany} |
      </p>
      <p className={styles.text}>
        {car.type} | {formatMileage(car.mileage)} km
      </p>
      <div className={styles.btnBox}>
        <button
          className={styles.btn}
          onClick={() => navigate(`/catalog/${car.id}`, { state: { car } })}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default CarItem;
