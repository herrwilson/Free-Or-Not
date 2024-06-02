import "../assets/css/Layout.css";
import { Container, Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col id="sidebar-wrapper">
            <NavBar />
          </Col>
          <Col id="content-wrapper">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
