/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getTrendMovie, resetErrorTrendMovie } from "redux/actions";

import { Box, Flex, Heading, Image, Tab, TabList, Tabs, Text, useToast } from "@chakra-ui/react";

import ScrollList from "./ScrollList";
import ScrollListSkeleton from "./ScrollListSkeleton";

const TrendMovieShowCase = () => {
  const { trendMovie, isRequestTrendMovie, errorRequestTrendMovieMessage } = useSelector((state: any) => state.movie);

  const [time, setTime] = useState<"week" | "day">("day");

  const toast = useToast();

  const dispatch = useDispatch();

  const navigation = useNavigate();

  const handleChangeTab = (index: number) => {
    switch (index) {
      case 0:
        setTime("day");
        break;
      case 1:
        setTime("week");
        break;
      default:
        setTime("day");
        break;
    }
  };

  useEffect(() => {
    dispatch(getTrendMovie(time));
  }, [time]);

  useEffect(() => {
    if (errorRequestTrendMovieMessage && !isRequestTrendMovie) {
      toast({
        duration: 3000,
        title: "Error Trend Movie",
        description: errorRequestTrendMovieMessage,
        status: "error",
        isClosable: true,
        onCloseComplete: () => {
          dispatch(resetErrorTrendMovie());
        },
      });
    }
  }, [errorRequestTrendMovieMessage, isRequestTrendMovie]);

  return (
    <Box padding="0.5rem">
      <Flex direction="column" justifyContent="space-between" marginY="0.5rem">
        <Text as="b" fontSize="1.5rem" role="button" onClick={() => navigation("/list/trend")}>
          Trending
        </Text>
        <Tabs onChange={handleChangeTab} variant="soft-rounded" colorScheme="blue">
          <TabList>
            <Tab>Today</Tab>
            <Tab>This Week</Tab>
          </TabList>
        </Tabs>
      </Flex>
      {!isRequestTrendMovie && trendMovie && <ScrollList data={trendMovie?.results} />}
      {!isRequestTrendMovie && !trendMovie && (
        <Flex direction="column" justifyContent="center" alignItems="center" padding="1rem">
          <Image width="10.5rem" src={require("assets/no_data.png")} />
          <Heading size="xs">Opss...! movie not found</Heading>
        </Flex>
      )}
      {isRequestTrendMovie && <ScrollListSkeleton />}
    </Box>
  );
};

export default TrendMovieShowCase;
