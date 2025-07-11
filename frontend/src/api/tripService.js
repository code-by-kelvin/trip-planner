import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const planTrip = (tripData) => {
  return axios.post(`${API_BASE}/trip/plan/`, tripData);
};
