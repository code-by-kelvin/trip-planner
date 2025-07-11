import styles from './LogSheetGraph.module.css';

const HOURS = Array.from({ length: 24 }, (_, i) => i);

const categories = ['Off Duty', 'Sleeper', 'Driving', 'On Duty'];

const LogSheetGraph = ({ logs }) => {
  const log = logs[0]?.log || [];

  const renderCell = (hour, category) => {
    const active = log.some(entry => {
      const start = parseInt(entry.start.split(':')[0]);
      const end = parseInt(entry.end.split(':')[0]);
      return entry.type === category && hour >= start && hour < end;
    });
    return <div key={`${hour}-${category}`} className={active ? styles.active : styles.cell}></div>;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {categories.map(category => (
          <div key={category} className={styles.row}>
            <div className={styles.label}>{category}</div>
            {HOURS.map(hour => renderCell(hour, category))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogSheetGraph;
