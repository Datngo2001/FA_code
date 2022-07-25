import React from "react";
import { Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Nav as="ul">
      <Nav.Item>
        <Nav.Link>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
