import { useNavigate } from 'react-router-dom';
import styles from './Welcome.module.css';
import Layout from '../components/Layout/Layout';

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Home');
  };

  return (
    <div className={styles.wrapper}>
        <Layout/>
      <h1>Welcome to the Trip Planner</h1>
      <p>Plan your long-haul truck trips with smart ELD log automation.</p>
      <button onClick={handleClick}>Plan Your Trip</button>
    </div>
  );
};

export default Welcome;
