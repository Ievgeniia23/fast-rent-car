import React from 'react';
import css from './CarDetails.module.css';
import sprite from '../../../public/sprite.svg';

const CarDetails = ({ car }) => {
  if (!car) return <div>No car details available.</div>;

  const formatAddress = address =>
    address?.split(',').slice(0, 2).join(', ') || 'Unknown';
  const formatMileage = mileage => Number(mileage).toLocaleString();

  return (
    <div className={css.infoBox}>
      <h2 className={css.headTitle}>
        {car.brand}, {car.year}
      </h2>

      <div className={css.addressMileBox}>
        <svg className={css.icon} width="16" height="16">
          <use href={sprite + '#map'} />
        </svg>
        <p className={css.address}>{formatAddress(car.address)}</p>
        <p className={css.text}>Mileage: {formatMileage(car.mileage)} km</p>
      </div>

      <p className={css.price}>${car.rentalPrice}</p>
      <p className={css.text}>{car.description}</p>

      <div className={css.container1}>
        <h3 className={css.title}>Rental Conditions:</h3>
        <ul className={css.conditionList}>
          {car.rentalConditions?.map((condition, index) => (
            <li className={css.condition} key={index}>
              <svg className={css.icon} width="16" height="16">
                <use href={sprite + '#check-circle'} />
              </svg>
              {condition}
            </li>
          ))}
        </ul>
      </div>

      <div className={css.container2}>
        <h3 className={css.title2}>Car Specifications:</h3>

        <div className={css.specBox}>
          <svg className={css.icon} width="16" height="16">
            <use href={sprite + '#calendar'} />
          </svg>
          <p className={css.text}>Year: {car.year}</p>
        </div>

        <div className={css.specBox}>
          <svg className={css.icon} width="16" height="16">
            <use href={sprite + '#car'} />
          </svg>
          <p className={css.text}>Type: {car.type}</p>
        </div>

        <div className={css.specBox}>
          <svg className={css.icon} width="16" height="16">
            <use href={sprite + '#patrol'} />
          </svg>
          <p className={css.text}>Fuel Consumption: {car.fuelConsumption}</p>
        </div>

        <div className={css.specBox}>
          <svg className={css.icon} width="16" height="16">
            <use href={sprite + '#settings'} />
          </svg>
          <p className={css.text}>Engine Size: {car.engineSize}</p>
        </div>
      </div>

      <div className={css.container3}>
        <h3 className={css.title}>Accessories and functionalities:</h3>

        <ul>
          {car.accessories?.map((accessory, index) => (
            <li className={css.condition} key={index}>
              <svg className={css.icon} width="16" height="16">
                <use href={sprite + '#check-circle'} />
              </svg>
              {accessory}
            </li>
          ))}
        </ul>

        <ul>
          {car.functionalities?.map((functional, index) => (
            <li className={css.condition} key={index}>
              <svg className={css.icon} width="16" height="16">
                <use href={sprite + '#check-circle'} />
              </svg>
              {functional}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarDetails;

