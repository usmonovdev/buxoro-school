import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../constants";
import { Image } from "../styles";
import { Container } from "../styles/container";
import { Li, NavbarBox, NavbarItems, Ul } from "../styles/navbar";

function Navbar() {
  return (
    <NavbarBox>
      <Container>
        <NavbarItems>
          <Image src={Logo} alt="Logo" width="60px" height="60px" />
          <Ul>
            <Li>
                <Link to="/courses" className="link">Kurslar</Link>
            </Li>
            <Li>
                <Link to="/connect" className="link">Bog'lanish</Link>
            </Li>
          </Ul>
        </NavbarItems>
      </Container>
    </NavbarBox>
  );
}

export default Navbar;
