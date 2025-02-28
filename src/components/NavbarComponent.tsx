// src/components/NavbarComponent.js

import { Navbar, Nav, Container, Row, Col, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavbarComponent.css"; // Import the CSS file
import logo from "../assets/logos/logo-monitoraps-parceiros.svg"; // Import the logo

/**
 * NavbarComponent is a functional React component that renders a responsive navigation bar.
 * It includes a logo, navigation links, and a dropdown menu.
 *
 * @component
 * @example
 * return (
 *   <NavbarComponent />
 * )
 *
 * @returns {TSX.Element} The rendered navigation bar component.
 */
const NavbarComponent = () => {
  return (
    <Container fluid className="p-0">
      <Row className="">
        <Col className="text-center py-2">
          <img
            src={logo}
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Navbar
            className="navbar navbar-expand-lg navbar-style justify-content-center"
            expand="lg"
          >
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="mx-auto d-flex align-items-center">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  INÍCIO
                </NavLink>

                <NavLink
                  to="/dashboard"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  PAINEL DE EFICIÊNCIA
                </NavLink>

                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    SOBRE
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/projeto">
                      O projeto
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/metodologia">
                      A metodologia
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/equipe">
                      A equipe
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default NavbarComponent;
