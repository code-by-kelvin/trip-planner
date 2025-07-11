import MapDisplay from '../MapDisplay/MapDisplay';
import LogSheet from '../LogSheet/LogSheet';
import styles from './ResultsPanel.module.css';

const ResultsPanel = ({ tripResult }) => {
  return (
    <div className={styles.panel}>
      <MapDisplay route={tripResult.route} />
      <LogSheet logs={tripResult.daily_logs} />
    </div>
  );
};

export default ResultsPanel;
