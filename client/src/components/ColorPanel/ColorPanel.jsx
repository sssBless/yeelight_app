import { ColorSlider } from '../ColorSlider/ColorSlider';
import styles from './ColorPanel.module.css';

const COLORS = ['red', 'green', 'blue'];

export const ColorPanel = ({ handleOnChange, currentColor, isDisabled }) => {
  return (
    <div className={styles.wrapper}>
      <h1>RGB Control</h1>
      {COLORS.map((color) => (
        <ColorSlider
          color={color}
          handleOnChange={handleOnChange}
          key={color}
          value={currentColor[color]}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
};
