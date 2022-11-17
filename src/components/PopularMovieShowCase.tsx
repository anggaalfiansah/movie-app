/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getPopularMovie, resetErrorPopularMovie } from "redux/actions";

import { Box, Flex, Heading, Image, Tab, TabList, Tabs, Text, useToast } from "@chakra-ui/react";

import ScrollList from "./ScrollList";
import ScrollListSkeleton from "./ScrollListSkeleton";

const PopularMovieShowCase = () => {
  const { popularMovie, isRequestPopularMovie, errorRequestPopularMovieMessage } = useSelector((state: any) => state.movie);

  const [filter, setFilter] = useState("stream");

  const toast = useToast();

  const dispatch = useDispatch();

  const navigation = useNavigate();

  const handleChangeTab = (index: number) => {
    switch (index) {
      case 0:
        setFilter("stream");
        break;
      case 1:
        setFilter("rent");
        break;
      case 2:
        setFilter("theater");
        break;
      default:
        setFilter("stream");
        break;
    }
  };

  useEffect(() => {
    dispatch(getPopularMovie(filter));
  }, [filter]);

  useEffect(() => {
    if (errorRequestPopularMovieMessage && !isRequestPopularMovie) {
      toast({
        duration: 3000,
        title: "Error Popular Movie",
        description: errorRequestPopularMovieMessage,
        status: "error",
        isClosable: true,
        onCloseComplete: () => {
          dispatch(resetErrorPopularMovie());
        },
      });
    }
  }, [errorRequestPopularMovieMessage, isRequestPopularMovie]);

  return (
    <Box padding="0.5rem">
      <Flex direction="column" justifyContent="space-between" marginY="0.5rem">
        <Text as="b" fontSize="1.5rem" role="button" onClick={() => navigation("/list/popular")}>
          What's Popular
        </Text>
        <Tabs onChange={handleChangeTab} variant="soft-rounded" colorScheme="blue">
          <TabList>
            <Tab>Streaming</Tab>
            <Tab>Rent</Tab>
            <Tab>Theater</Tab>
          </TabList>
        </Tabs>
      </Flex>
      {!isRequestPopularMovie && popularMovie && <ScrollList data={popularMovie?.results} />}
      {!isRequestPopularMovie && !popularMovie && (
        <Flex direction="column" justifyContent="center" alignItems="center" padding="1rem">
          <Image width="10.5rem" src={require("assets/no_data.png")} />
          <Heading size="xs">Opss...! movie not found</Heading>
        </Flex>
      )}
      {isRequestPopularMovie && <ScrollListSkeleton />}
    </Box>
  );
};

export default PopularMovieShowCase;
