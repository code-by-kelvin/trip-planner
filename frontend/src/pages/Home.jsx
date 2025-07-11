import { useState } from 'react';
import TripForm from '../components/TripForm/TripForm';
import MapDisplay from '../components/MapDisplay/MapDisplay';
import LogSheet from '../components/LogSheet/LogSheet';

const Home = () => {
  const [tripResult, setTripResult] = useState(null);

  return (
    <div>
      <h1>Trip Planner Dashboard</h1>
      <TripForm onTripPlanned={setTripResult} />
      {tripResult && (
        <>
          <MapDisplay route={tripResult.route} />
          <LogSheet logs={tripResult.daily_logs} />
        </>
      )}
    </div>
  );
};

export default Home;
