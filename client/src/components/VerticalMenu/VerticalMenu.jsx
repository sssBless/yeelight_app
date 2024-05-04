import { FaCircleInfo } from 'react-icons/fa6';
import { FaHouse } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import styles from './VerticalMenu.module.css';

export const VerticalMenu = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.menu_item}>
          <Link to='/'>
            <FaHouse fill='white' />
            <span>Home</span>
          </Link>
        </div>

        <div className={styles.menu_item}>
          <Link to='/bulb_info'>
            <FaCircleInfo fill='white' />
            <span>Info</span>
          </Link>
        </div>
      </div>
    </>
  );
};
