/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorBoundary404 = () => {
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigation("/");
    }, 2000);
  }, []);
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" padding="1rem">
      <Image width="20rem" src={require("assets/error_404.jpg")} />
      <Text>Opss...!</Text>
    </Flex>
  );
};

export default ErrorBoundary404;
