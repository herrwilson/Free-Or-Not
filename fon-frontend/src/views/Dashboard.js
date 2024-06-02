import { useNavigate } from "react-router-dom";
import styles from "../assets/css/Dashboard.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DashButton from "../components/DashButton";
import DashCard from "../components/DashCard";
import DashRTV from "../components/DashRTV";
import iconBarChart from "../assets/img/barchart.png";
import iconAN from "../assets/img/an-logo.png";
import iconAbout from "../assets/img/about.png";
import iconMail from "../assets/img/mail.png";
import iconRoomList from "../assets/img/room-list.png";
import iconLogIn from "../assets/img/log-in.png";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className={styles.main}>
      <Row xs={1} lg={3} className={styles.rowMain}>
        <Col className={styles.col}>
          <Row className={styles.rowGrow}>
            <DashRTV />
          </Row>
          <Row className={styles.row}>
            <div className={styles.contact}>
              <DashButton text="Contact" icon={iconMail} />
            </div>
          </Row>
        </Col>
        <Col className={styles.col}>
          <Row className={styles.rowGrow}>
            <DashCard
              text="Statistics"
              icon={iconBarChart}
              onClick={() => navigate("/chart")}
            />
          </Row>
          <Row className={styles.rowGrow}>
            <DashCard
              text="Room List"
              icon={iconRoomList}
              onClick={() => navigate("/list")}
            />
          </Row>
        </Col>
        <Col className={styles.col}>
          <Row className={styles.row}>
            <div className={styles.login}>
              <DashButton
                text="Log in"
                icon={iconLogIn}
                onClick={() => navigate("/login")}
              />
            </div>
          </Row>
          <Row className={styles.rowGrow}>
            <DashCard text="Announcements" icon={iconAN} />
          </Row>
          <Row className={styles.row}>
            <DashCard text="Info" icon={iconAbout} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
