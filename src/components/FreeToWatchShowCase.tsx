/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getFreeMovie, resetErrorFreeMovie } from "redux/actions";

import { Box, Flex, Heading, Image, Text, useToast } from "@chakra-ui/react";

import ScrollList from "./ScrollList";
import ScrollListSkeleton from "./ScrollListSkeleton";

const FreeMovieShowCase = () => {
  const { freeMovie, isRequestFreeMovie, errorRequestFreeMovieMessage } = useSelector((state: any) => state.movie);

  const toast = useToast();

  const dispatch = useDispatch();

  const navigation = useNavigate();

  useEffect(() => {
    dispatch(getFreeMovie());
  }, []);

  useEffect(() => {
    if (errorRequestFreeMovieMessage && !isRequestFreeMovie) {
      toast({
        duration: 3000,
        title: "Error Free Movie",
        description: errorRequestFreeMovieMessage,
        status: "error",
        isClosable: true,
        onCloseComplete: () => {
          dispatch(resetErrorFreeMovie());
        },
      });
    }
  }, [errorRequestFreeMovieMessage, isRequestFreeMovie]);

  return (
    <Box padding="0.5rem">
      <Flex direction="column" justifyContent="space-between" marginY="1rem">
        <Text as="b" fontSize="1.5rem" role="button" onClick={() => navigation("/list/free")}>
          Free To Watch
        </Text>
      </Flex>
      {!isRequestFreeMovie && freeMovie && <ScrollList data={freeMovie?.results} />}
      {!isRequestFreeMovie && !freeMovie && (
        <Flex direction="column" justifyContent="center" alignItems="center" padding="1rem">
          <Image width="10.5rem" src={require("assets/no_data.png")} />
          <Heading size="xs">Opss...! movie not found</Heading>
        </Flex>
      )}
      {isRequestFreeMovie && <ScrollListSkeleton />}
    </Box>
  );
};

export default FreeMovieShowCase;
