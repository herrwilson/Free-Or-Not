import { useEffect, useState } from "react";
import roomController from "../controllers/room";
import styles from "../assets/css/DashRTV.module.css";

/*
 * Card with Real Time View of most used rooms
 * Used in the Dashboard view
 */

const DashRTV = () => {
  const [rooms, setRooms] = useState([]);

  const fetchRoomData = () => {
    (async () => {
      const result = await roomController.getTop(10);
      if (result.status === 200) {
        return setRooms(result.data);
      }
    })();
  };

  useEffect(() => {
    fetchRoomData();
    const timer = setInterval(() => {
      fetchRoomData();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.title}>Real Time View</div>
      {rooms.map((room) => (
        <div key={room.name} className={styles.itemWrapper}>
          <div className={styles.itemTextWrapper}>
            <div className={styles.item}>{room.name}</div>
            <div className={styles.item}>{room.location}</div>
          </div>
          <div
            className={styles.light}
            style={{ backgroundColor: room.isFree ? "green" : "red" }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default DashRTV;
