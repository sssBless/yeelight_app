import { memo, useCallback, useState, useRef } from 'react';
import styles from './BrightnessSlider.module.css';

export const BrightnessSlider = memo(
  ({ handleOnChangeBrightness, value, isDisabled }) => {
    const [currValue, setCurrValue] = useState(value);
    const timerIdRef = useRef();

    const debouncedHandleOnChangeBrightness = useCallback(
      (value) => {
        if (timerIdRef.current) {
          clearTimeout(timerIdRef.current);
        }
        timerIdRef.current = setTimeout(() => {
          handleOnChangeBrightness(value);
        }, 500);
      },
      [handleOnChangeBrightness]
    );

    const handleOnChange = useCallback(
      (e) => {
        setCurrValue(parseInt(e.target.value));
        debouncedHandleOnChangeBrightness(parseInt(e.target.value));
      },
      [debouncedHandleOnChangeBrightness]
    );

    return (
      <div className={styles.wrapper}>
        <h1>Brightness Control</h1>

        <div className={styles.slider_container}>
          <input
            type='range'
            min='1'
            max='100'
            value={currValue}
            onChange={handleOnChange}
            className={styles.slider}
            disabled={isDisabled}
          />
          <input
            type='number'
            min='1'
            max='100'
            className={styles.slider_value}
            value={currValue}
            onChange={handleOnChange}
            disabled={isDisabled}
          />
        </div>
      </div>
    );
  }
);
