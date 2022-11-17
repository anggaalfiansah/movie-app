import { Container, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container as="footer" maxW="6xl" py={{ base: "6", md: "8" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Text fontSize="xs" color="subtle">
          &copy; {new Date().getFullYear()} <b>ABC Movie</b> All rights reserved.
        </Text>
      </Stack>
    </Container>
  );
};

export default Footer;
