import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCarDetails } from '../../redux/cars/operations';
import {
  selectSelectedCar,
  selectIsLoading,
  selectError,
} from '../../redux/cars/selectors';
import Loader from '../../components/Loader/Loader';
import CarDetails from '../../components/CarDetails/CarDetails';
import BookForm from '../../components/BookForm/BookForm';
import toast from 'react-hot-toast';
import styles from './CarPage.module.css';

const CarPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector(selectSelectedCar);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCarDetails(id));
  }, [dispatch, id]);

  
  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [error]);

  if (isLoading) return <Loader />;

  if (!car && !isLoading && !error) {
    toast.error('Car not found');
    return <div>Car not found</div>;
  }

  return (
    <div className={styles.carPage}>
      <div className={styles.imageWrapper}>
        <img className={styles.carImage} src={car.img} alt={car.brand} />

        <BookForm />
      </div>
      <div className={styles.detailsWrapper}>
        <CarDetails car={car} />
        <div className={styles.bookFormWrapper}></div>
      </div>
    </div>
  );
};

export default CarPage;
