import styles from './CustomSelect.module.css';

export const CustomSelect = ({
  right_label,
  left_label,
  onChangeColorMode,
  isColorMode,
}) => {
  const handleChangeColorMode = (e) => {
    if (!e.target.classList.contains(styles.active)) {
      onChangeColorMode(!isColorMode);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.left_part} ${isColorMode ? styles.active : ' '}`}
        onClick={handleChangeColorMode}
      >
        {left_label}
      </div>
      <div
        className={`${styles.right_part}  ${
          !isColorMode ? styles.active : ' '
        }`}
        onClick={handleChangeColorMode}
      >
        {right_label}
      </div>
    </div>
  );
};
