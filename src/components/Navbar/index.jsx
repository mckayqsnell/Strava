import React, { useState } from "react";
import { Container, NavItem, NavItems } from "./styles";
import { Link } from "gatsby";

const Navbar = ({ links, active }) => {
  return (
    <Container>
      <NavItems>
        {links.map(({ text, url }, index) => {
          return (
            <NavItem $active={index === active}>
              <Link to={url}>{text}</Link>
            </NavItem>
          );
        })}
      </NavItems>
    </Container>
  );
};

export default Navbar;
