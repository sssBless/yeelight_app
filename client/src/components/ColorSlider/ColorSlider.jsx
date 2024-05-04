import { memo, useCallback, useState, useRef } from 'react';
import styles from './ColorSlider.module.css';

export const ColorSlider = memo(
  ({ color, handleOnChange, value, isDisabled }) => {
    const [currValue, setCurrValue] = useState(value);
    const timerIdRef = useRef();

    const debouncedHandleOnChange = useCallback(
      (color, value) => {
        if (timerIdRef.current) {
          clearTimeout(timerIdRef.current);
        }
        timerIdRef.current = setTimeout(() => {
          handleOnChange(color, value);
        }, 500);
      },
      [handleOnChange]
    );

    const handleChangeRange = useCallback(
      (e) => {
        setCurrValue(e.target.value);
        debouncedHandleOnChange(color, e.target.value);
      },
      [color, debouncedHandleOnChange]
    );

    const handleChangeInput = useCallback(
      (e) => {
        setCurrValue(e.target.value);
        debouncedHandleOnChange(color, e.target.value);
      },
      [color, debouncedHandleOnChange]
    );

    return (
      <div className={styles.slider_container}>
        <input
          type='range'
          min='1'
          max='255'
          value={currValue}
          onChange={handleChangeRange}
          className={styles.slider}
          style={{
            background: `linear-gradient(to right, black, ${color})`,
          }}
          disabled={isDisabled}
        />
        <input
          type='number'
          min='1'
          max='255'
          value={currValue}
          onChange={handleChangeInput}
          className={styles.slider_value}
          disabled={isDisabled}
        />
      </div>
    );
  }
);
