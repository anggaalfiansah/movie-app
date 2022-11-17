import { Box, Flex, Button, useColorModeValue, useColorMode, Input, Heading, Container, Stack, InputGroup, InputRightElement } from "@chakra-ui/react";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import { BiCameraMovie } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [keyword, setKeyword] = useState<string>("");

  const navigation = useNavigate();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Container maxW="6xl" padding="1rem">
        <Flex h="3rem" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center" boxShadow="base" borderRadius={8} padding="0.25rem" role="button" onClick={() => navigation("/")}>
            <Heading size="sm">ABC</Heading>
            <BiCameraMovie size="2rem" />
          </Stack>
          <Flex>
            <Box marginX="1rem">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (keyword) {
                    navigation("/search/" + keyword);
                  }
                }}
              >
                <InputGroup>
                  <Input placeholder="Search Movie" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                  <InputRightElement children={<SearchIcon />} />
                </InputGroup>
              </form>
            </Box>
            <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
