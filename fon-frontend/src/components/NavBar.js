import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import home from "../assets/img/home.png";

const NavBar = () => {
  return (
    <Nav className="NavBar">
      <Nav.Item>
        <Nav.Link className="NavBar-button" as={Link} to="/">
          <img alt="" src={home} width={50} />
        </Nav.Link>
      </Nav.Item>
      <div className="NavBar-slogan">Free or Not - Find Your Vacant Spot</div>
      <Nav.Item>
        <Nav.Link className="NavBar-button">LANG</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
