import styles from './LogSheet.module.css';

const LogSheet = ({ logs }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.logWrapper}>
      <div className={styles.header}>
        <h2>Daily Log Sheets</h2>
        <button onClick={handlePrint}>🖨 Print / Save as PDF</button>
      </div>

      {logs.map((day, idx) => (
        <div key={idx} className={styles.dayLog}>
          <h4>{day.date}</h4>
          <ul>
            {day.log.map((entry, i) => (
              <li key={i}>
                {entry.type}: {entry.start} - {entry.end}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LogSheet;
