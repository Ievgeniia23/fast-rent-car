import React from 'react';
import styles from './FavoriteButton.module.css';

const FavoriteButton = ({ isFavorite, onFavoriteToggle }) => {
  return (
    <button className={styles.favoriteBtn} onClick={onFavoriteToggle}>
      <svg className={styles.icon}>
        <use
          href={
            isFavorite
              ? '/icons/sprite.svg#heart-stroke'
              : '/icons/sprite.svg#heart'
          }
        ></use>
      </svg>
    </button>
  );
};

export default FavoriteButton;
