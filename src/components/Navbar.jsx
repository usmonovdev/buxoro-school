import React from "react";
import { Logo } from "../constants";
import { Image } from "../styles";
import { Container } from "../styles/container";
import { NavbarBox } from "../styles/navbar";

function Navbar() {
  return (
    <NavbarBox>
      <Container>
        <Image src={Logo} alt="Logo" width="60px" height="60px" />
      </Container>
    </NavbarBox>
  );
}

export default Navbar;
