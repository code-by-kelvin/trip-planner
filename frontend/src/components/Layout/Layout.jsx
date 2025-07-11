import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
  const location = useLocation();

  return (
    <div className={styles.fade}>
      <nav className={styles.navbar}>
        <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Welcome</Link>
        <Link to="/Home" className={location.pathname === '/Home' ? styles.active : ''}>Trip Planner</Link>
      </nav>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
