import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapDisplay.module.css';

const MapDisplay = ({ route }) => {
  if (!route || route.length === 0) return null;

  return (
    <div className={styles.mapContainer}>
      <MapContainer center={route[0]} zoom={6} scrollWheelZoom style={{ height: '400px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline positions={route} color="blue" />
      </MapContainer>
    </div>
  );
};

export default MapDisplay;
