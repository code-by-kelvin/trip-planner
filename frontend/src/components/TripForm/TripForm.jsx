import { useState } from 'react';
import styles from './TripForm.module.css';
import { planTrip } from '../../api/tripService';
import Layout from '../Layout/Layout';

const TripForm = ({ onTripPlanned }) => {
  const [form, setForm] = useState({
    currentLocation: '',
    pickupLocation: '',
    dropoffLocation: '',
    cycleUsed: '',
    startDate: '',
    startTime: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await planTrip(form);
      onTripPlanned(response.data);
    } catch (err) {
      console.error("Error planning trip:", err);
      alert("Failed to plan trip");
    }
  };

  return (
    <div className="trip-form">
      <Layout />
      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="currentLocation" placeholder="Current Location" onChange={handleChange} required />
        <input name="pickupLocation" placeholder="Pickup Location" onChange={handleChange} required />
        <input name="dropoffLocation" placeholder="Dropoff Location" onChange={handleChange} required />
        <input name="cycleUsed" placeholder="Cycle Used (hrs)" type="number" min="1" onChange={handleChange} required />

        <label>Trip Start Date</label>
        <input type="date" name="startDate" onChange={handleChange} required />

        <label>Trip Start Time</label>
        <input type="time" name="startTime" onChange={handleChange} required />

        <button type="submit">Plan Trip</button>
      </form>
    </div>
  );
};

export default TripForm;
