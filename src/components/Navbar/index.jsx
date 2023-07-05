import React, { useState } from "react";
import { Container, NavItem, NavItems } from "./styles";

const Navbar = ({ links }) => {
  const [active, setActive] = useState(0);

  return (
    <Container>
      <NavItems>
        {links.map((link, index) => {
          return (
            <NavItem
              $active={index === active}
              onClick={() => setActive(index)}
            >
              {link}
            </NavItem>
          );
        })}
      </NavItems>
    </Container>
  );
};

export default Navbar;
