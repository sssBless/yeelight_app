import styles from './Lamp.module.css';
import { FaPowerOff } from 'react-icons/fa6';

export const Lamp = ({ color, brightness, handleSwitchBulb, isBulbOn }) => {
  const { red, green, blue } = color;

  return (
    <div className={styles.bulb}>
      <div
        className={styles.bulb_caps}
        style={{
          backgroundColor: `rgba(${red}, ${green}, ${blue}, ${
            brightness / 100
          })`,
          boxShadow: `0 0 2vw rgba(${red}, ${green}, ${blue}, ${
            brightness / 100
          })`,
        }}
      ></div>

      <div className={styles.bulb_base}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button
        onClick={handleSwitchBulb}
        className={isBulbOn ? styles.on : styles.off}
      >
        <FaPowerOff />
      </button>
    </div>
  );
};
