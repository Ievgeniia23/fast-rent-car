import React, { useState } from 'react';
import toast from 'react-hot-toast';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Booking Date</label>
        <input
          type="date"
          value={bookingDate}
          onChange={e => setBookingDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Comment</label>
        <textarea value={comment} onChange={e => setComment(e.target.value)} />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default BookForm;
