import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { Logo } from "../constants";
import { Image } from "../styles";
import { Button } from "../styles/button";
import { Container } from "../styles/container";
import {
  Li,
  NavbarBox,
  NavbarLarge,
  NavbarSmall,
  UlBox,
  UlDetails,
  UlLarge,
  UlSmall,
} from "../styles/navbar";

function Navbar() {
  const theme = useTheme();
  const [isOpen, setOpen] = useState(false);
  return (
    <NavbarBox>
      <Container>
        <NavbarLarge>
          <Image src={Logo} alt="Logo" width="60px" height="60px" />
          <UlLarge>
            <Li>
              <Link to="/courses" className="link">
                Kurslar
              </Link>
            </Li>
            <Li>
              <Link to="/connect" className="link">
                Bog'lanish
              </Link>
            </Li>
            <Li>
              <Link to="/sign-up" className="link">
                <Button textTransform="uppercase" width="100px" height="40px">
                  Sign Up
                </Button>
              </Link>
            </Li>
          </UlLarge>
        </NavbarLarge>
        <NavbarSmall>
          <Image zIndex src={Logo} alt="Logo" width="60px" height="60px" />
          <Hamburger
            rounded
            color={theme.orange}
            toggled={isOpen}
            toggle={setOpen}
          />
          {isOpen ? (
            <UlBox>
              <UlDetails>
                <UlSmall>
                  <Li>
                    <Link to="/courses" className="link-small">
                      Kurslar
                    </Link>
                  </Li>
                  <Li>
                    <Link to="/connect" className="link-small">
                      Bog'lanish
                    </Link>
                  </Li>
                  <Li>
                    <Link to="/sign-up" className="link-small">
                      <Button
                        textTransform="uppercase"
                        width="100%"
                        height="40px"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </Li>
                </UlSmall>
              </UlDetails>
            </UlBox>
          ) : (
            ""
          )}
        </NavbarSmall>
      </Container>
    </NavbarBox>
  );
}

export default Navbar;
