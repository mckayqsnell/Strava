import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  color: white;
  font-size: 2rem;
  min-width: 300px;
  min-height: 300px;
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: space-evenly;
  :hover {
    color: red;
  }
`;

export const NavItem = styled.li`
  color: ${({ $active }) => ($active ? "yellow" : "white")};
`;
