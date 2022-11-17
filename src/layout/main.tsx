import { Outlet } from "react-router-dom";
import { Container, useColorModeValue } from "@chakra-ui/react";
import Nav from "components/Navbar";
import Footer from "components/Footer";

const Main = () => {
  return (
    <>
      <Nav />
      <Container maxW="10xl" bg={useColorModeValue("gray.100", "gray.900")}>
        <Container maxW="6xl" padding="1rem" minHeight="80vh">
          <Outlet />
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
