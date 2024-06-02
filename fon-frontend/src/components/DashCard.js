import styles from "../assets/css/DashCard.module.css";

/*
 * Button with a large icon
 * Used in the Dashboard view
 */
const DashCard = ({ text, icon, onClick }) => {
  return (
    <div onClick={onClick} className={styles.main}>
      <div className={styles.title}>{text}</div>
      <div className={styles.iconWrapper}>
        <img alt="" className={styles.icon} src={icon} />
      </div>
    </div>
  );
};

export default DashCard;
