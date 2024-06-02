import { useState, useEffect } from "react";
import styles from "../assets/css/List.module.css";
import roompic from "../assets/img/image.png";
import roomController from "../controllers/room";
import { Container, Row, Col, Button } from "react-bootstrap";

function Roomlist() {
  const [statusList, setStatusList] = useState([]);

  // fetch room data from the database
  const fetchRoomData = () => {
    (async () => {
      const result = await roomController.getAll();
      if (result.status === 200) {
        return setStatusList(result.data);
      }
    })();
  };

  // HACK: using an interval to fetch room data
  useEffect(() => {
    fetchRoomData();
    const timer = setInterval(() => {
      fetchRoomData();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [filter, setFilter] = useState({
    text: "",
    isFree: null,
  });

  const roomsToShow = statusList.filter((room) => {
    if (filter.isFree !== null && room.isFree !== filter.isFree) {
      return false;
    }
    if (
      filter.text.length > 0 &&
      !(
        room.name.toLowerCase().includes(filter.text.toLowerCase()) ||
        room.location.toLowerCase().includes(filter.text.toLowerCase())
      )
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className={styles.main}>
      <label htmlFor="Saatavilla">Saatavilla</label>
      <input
        className={styles.filterInput}
        type="checkbox"
        id="Saatavilla"
        onChange={(e) =>
          setFilter({
            ...filter,
            isFree: !e.target.checked ? null : true,
          })
        }
      />
      <input
        type="text"
        onChange={(e) => setFilter({ ...filter, text: e.target.value })}
        value={filter.text}
        placeholder="Location,Name"
      />
      <div className={styles.roomListWrapper}>
        {roomsToShow.map((room, index) => (
          <li className={styles.roomWrapper} key={index}>
            <div className={styles.roomImageWrapper}>
              <img alt="" className={styles.roomImage} src={roompic} />
            </div>
            <div className={styles.infoTextWrapper}>
              <div className={styles.infoText}>Huoneen nimi: {room.name}</div>
              <div className={styles.infoText}>
                Huoneen sijainti: {room.location}
              </div>
              <div className={styles.infoText}>
                Tila:{" "}
                {roomsToShow[index].isFree ? "Saatavilla ✅" : "Varattu ❌"}
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <Button variant="outline-primary" className={styles.button}>
                Varaa
              </Button>
              <Button variant="outline-info" className={styles.button}>
                Info
              </Button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Roomlist;
