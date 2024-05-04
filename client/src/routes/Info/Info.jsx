import styles from './Info.module.css';

export const Info = () => {
  return (
    <>
      <h1 className={styles.info_title}>Device Info</h1>
      <div className={styles.wrapper}>
        <div className={styles.info_item}>
          <span>Operating time</span>
          <span>1h 22min</span>
        </div>
        <div className={styles.info_item}>
          <span>Network</span>
          <span>SSID_NETWORK</span>
        </div>
        <div className={styles.info_item}>
          <span>Signal strength</span>
          <span>-70db</span>
        </div>
        <div className={styles.info_item}>
          <span>IP-Address</span>
          <span>192.168.0.1</span>
        </div>
        <div className={styles.info_item}>
          <span>MAC-Address</span>
          <span>7C:C2:94:78:2C:6A</span>
        </div>
        <div className={styles.info_item}>
          <span>Model</span>
          <span>yeelink.light.colorb</span>
        </div>
      </div>
    </>
  );
};
