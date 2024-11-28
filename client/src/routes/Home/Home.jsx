import { useCallback, useEffect, useState } from 'react';
import { ColorPanel } from '../../components/ColorPanel/ColorPanel';
import { Lamp } from '../../components/Lamp/Lamp';
import styles from './Home.module.css';
import { BrightnessSlider } from '../../components/BrightnessSlider/BrightnessSlider';
import { kelvinToRgb } from '../../utils/utils';
import { TemperatureSlider } from '../../components/TemperatureSlider/TemperatureSlider';
import { CustomSelect } from '../../components/CustomSelect/CustomSelect';
import API from '../../utils/API';

export const Home = () => {
  const [currentColor, setCurrentColor] = useState({
    red: 25,
    green: 15,
    blue: 41,
  });
  const [currentTemperature, setCurrentTemperature] = useState(1700);

  const [currentBrightness, setCurrentBrightness] = useState(100);
  const [isBulbOn, setIsBulbOn] = useState(true);
  const [isColorMode, setIsColorMode] = useState(true);

  const handleOnChangeColor = useCallback(
    (color, value) => {
      setCurrentColor({
        ...currentColor,
        [color]: parseInt(value),
      });
    },
    [currentColor]
  );

  useEffect(() => {
    const toggleBulb = async () => {
      if (isBulbOn) {
        await API.turnOnBulb();
      } else {
        await API.turnOffBulb();
      }
    };
    toggleBulb();
  }, [isBulbOn]);

  useEffect(() => {
    if (isColorMode) {
      const changeData = async () => {
        await API.sendCommand('setRGBColor', currentColor);
      };
      changeData();
    }
  }, [currentColor, isColorMode]);

  useEffect(() => {
    const changeData = async () => {
      await API.sendCommand('setBrightness', { brightness: currentBrightness });
    };
    changeData();
  }, [currentBrightness]);

  //TODO:  check pattern strategy, builder, visitor, adapter

  useEffect(() => {
    if (!isColorMode) {
      const changeData = async () => {
        await API.sendCommand('setColorTemperature', {
          ct_value: currentTemperature,
        });
      };
      changeData();
    }
  }, [currentTemperature, isColorMode]);

  const handleOnChangeBrightness = useCallback(
    (value) => {
      setCurrentBrightness(value);
    },
    [setCurrentBrightness]
  );

  const handleSwitchBulb = useCallback(() => {
    setCurrentBrightness(currentBrightness > 1 ? 1 : 100);
    setIsBulbOn(!isBulbOn);
  });

  const handleOnChangeTemperature = useCallback(
    (value) => {
      setCurrentTemperature(value);
    },
    [setCurrentTemperature]
  );

  return (
    <div className={styles.wrapper}>
      <div>
        <CustomSelect
          left_label={'RGB Control'}
          right_label={'Temperature Control'}
          isColorMode={isColorMode}
          onChangeColorMode={setIsColorMode}
        />
        {isColorMode ? (
          <ColorPanel
            handleOnChange={handleOnChangeColor}
            currentColor={currentColor}
            isDisabled={!isBulbOn}
          />
        ) : (
          <TemperatureSlider
            OnChange={handleOnChangeTemperature}
            value={currentTemperature}
            isDisabled={!isBulbOn}
          />
        )}

        <BrightnessSlider
          handleOnChangeBrightness={handleOnChangeBrightness}
          value={currentBrightness}
          isDisabled={!isBulbOn}
        />
      </div>
      <Lamp
        color={isColorMode ? currentColor : kelvinToRgb(currentTemperature)}
        brightness={currentBrightness}
        handleSwitchBulb={handleSwitchBulb}
        isBulbOn={isBulbOn}
      />
    </div>
  );
};
