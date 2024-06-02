import styles from "../assets/css/DashButton.module.css";

/*
 * Button with a small icon
 * Used in the Dashboard view
 */
const DashButton = ({ text, icon, onClick }) => {
  return (
    <div onClick={onClick} className={styles.main}>
      <div className={styles.text}>{text}</div>
      <img alt="" className={styles.icon} src={icon} />
    </div>
  );
};

export default DashButton;
