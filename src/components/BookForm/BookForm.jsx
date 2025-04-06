import React, { useState } from 'react';
import toast from 'react-hot-toast';
import css from './BookForm.module.css'; 

const BookForm = ({ carId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    toast.success('Booking request has been successfully sent!');

    setName('');
    setEmail('');
    setBookingDate('');
    setComment('');
  };

  return (
    <form className={css.formContainer} onSubmit={handleSubmit}>
      <h2 className={css.formTitle}>Book your car now</h2>
      <p className={css.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={css.formGroup}>
        <input
          className={css.input}
          type="text"
          placeholder="Name*"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className={css.formGroup}>
        <input
          className={css.input}
          type="email"
          placeholder="Email*"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={css.formGroup}>
        <input
          className={css.input}
          type="date"
          placeholder="Booking date"
          value={bookingDate}
          onChange={e => setBookingDate(e.target.value)}
          required
        />
      </div>
      <div className={css.formGroup}>
        <textarea
          className={css.textarea}
          placeholder="Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </div>
      <button className={css.submitButton} type="submit">
        Send
      </button>
    </form>
  );
};

export default BookForm;
