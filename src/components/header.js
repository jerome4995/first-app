import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../images/logo2.png";
import { Link } from "react-router-dom";
import MachineLogo from "../images/white machine.jpg";

import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" style={{ fontSize: "15px" }}>
        <Container fluid>
          <Navbar.Brand href="/orderlist">
            <img
              alt=""
              src={MachineLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Raadan Tailor's
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link id="navlink" href="/orderlist">
                Order List
              </Nav.Link>
              <br />
              <Nav.Link id="navlink" href="/addorder">
                Add Order
              </Nav.Link>
              <br />
              <Nav.Link id="navlink" href="/customerlist">
                Customer List
              </Nav.Link>
              <br />
              <Nav.Link id="navlink" href="/addcustomer">
                Add Customer
              </Nav.Link>
              {
                /* <Nav.Link id="navlink" href="/orderlisttest">
                OrderListTest
              </Nav.Link>*/
                <Nav.Link id="navlink" href="/formtest">
                  FormTest
                </Nav.Link>
              }
            </Nav>

            <Nav style={{ marginLeft: "auto" }}>
              <Link className="nav-link" id="logout" to="/logout">
                <h5>Logout</h5>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
