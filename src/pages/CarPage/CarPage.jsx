import React from 'react';
import { useSelector } from 'react-redux';
import CarDetails from '../../components/CarDetails/CarDetails';
import BookForm from '../../components/BookForm/BookForm';
import { selectSelectedCar } from '../../redux/cars/selectors';
import styles from './CarPage.module.css'; // Стилі для цієї сторінки

const CarPage = () => {
  const car = useSelector(selectSelectedCar); // Отримуємо деталі машини з глобального стану

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.carPage}>
      <div className={styles.imageWrapper}>
        <img className={styles.carImage} src={car.img} alt={car.brand} />
      </div>
      <div className={styles.detailsWrapper}>
        <CarDetails />
        <div className={styles.bookFormWrapper}>
          <h3>Book Your Car Now</h3>
          <BookForm />
        </div>
      </div>
    </div>
  );
};

export default CarPage;
