import React from "react";
import { memo } from "react";
import { Container } from "./styles";
import Navbar from "../Navbar";
const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar links={["a", "b", "c"]} />
      {children}
    </Container>
  );
};

export default memo(Layout);
