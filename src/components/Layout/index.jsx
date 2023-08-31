import React from "react";
import { memo } from "react";
import { Container } from "./styles";
import Navbar from "../Navbar";
const Layout = ({ children, active }) => {
  return (
    <Container>
      <Navbar
        links={[
          { text: "a", url: "/" },
          { text: "b", url: "/b" },
        ]}
        active={active}
      />
      {children}
    </Container>
  );
};

export default memo(Layout);
