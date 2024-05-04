import { memo, useCallback, useState, useRef } from 'react';
import styles from './TemperatureSlider.module.css';

export const TemperatureSlider = memo(({ OnChange, value, isDisabled }) => {
  const [currValue, setCurrValue] = useState(value);
  const timerIdRef = useRef();

  const debouncedOnChange = useCallback(
    (value) => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
      timerIdRef.current = setTimeout(() => {
        OnChange(value);
      }, 500);
    },
    [OnChange]
  );

  const handleOnChange = useCallback(
    (e) => {
      setCurrValue(parseInt(e.target.value));
      debouncedOnChange(parseInt(e.target.value));
    },
    [debouncedOnChange]
  );

  return (
    <div className={styles.wrapper}>
      <h1>Temperature control</h1>
      <div className={styles.slider_container}>
        <input
          type='range'
          min='1700'
          max='6500'
          value={currValue}
          onChange={handleOnChange}
          className={styles.slider}
          disabled={isDisabled}
        />
        <input
          type='number'
          min='1700'
          max='6500'
          value={currValue}
          onChange={handleOnChange}
          className={styles.slider_value}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
});
