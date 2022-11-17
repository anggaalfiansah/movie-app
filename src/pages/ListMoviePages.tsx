/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import { useSelector, useDispatch } from "react-redux";
import {
  getFreeMovie,
  getMoreFreeMovie,
  getMorePopularMovie,
  getMoreTrendMovie,
  getPopularMovie,
  getTrendMovie,
  resetErrorFreeMovie,
  resetErrorPopularMovie,
  resetErrorTrendMovie,
} from "redux/actions";

import { Movie } from "constant/interface";

import { Box, Flex, Grid, Heading, Image, Tab, TabList, Tabs, useToast } from "@chakra-ui/react";

import Cards from "components/Card";
import CardSkeleton from "components/CardSkeleton";

const ListMoviePages = () => {
  const { type } = useParams();
  const {
    popularMovie,
    isRequestPopularMovie,
    errorRequestPopularMovieMessage,
    freeMovie,
    isRequestFreeMovie,
    errorRequestFreeMovieMessage,
    trendMovie,
    isRequestTrendMovie,
    errorRequestTrendMovieMessage,
  } = useSelector((state: any) => state.movie);

  const [filter, setFilter] = useState("stream");
  const [time, setTime] = useState<"week" | "day">("day");

  const toast = useToast();

  const dispatch = useDispatch();

  const navigation = useNavigate();

  const handleChangeTabPopular = (index: number) => {
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

  const handleChangeTabTrend = (index: number) => {
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

  const nextPopularMovie = () => {
    dispatch(getMorePopularMovie(filter, popularMovie?.page + 1));
  };

  const nextFreeMovie = () => {
    dispatch(getMoreFreeMovie(freeMovie?.page + 1));
  };

  const nextTrendMovie = () => {
    dispatch(getMoreTrendMovie(time, trendMovie?.page + 1));
  };

  useEffect(() => {
    if (type === "popular") {
      dispatch(getPopularMovie(filter));
    } else if (type === "free") {
      dispatch(getFreeMovie());
    } else if (type === "trend") {
      dispatch(getTrendMovie(time));
    } else {
      navigation("/");
    }
  }, [filter, time, type]);

  useEffect(() => {
    if (type === "popular" && errorRequestPopularMovieMessage && !isRequestPopularMovie) {
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
    if (type === "free" && errorRequestFreeMovieMessage && !isRequestFreeMovie) {
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
    if (type === "trend" && errorRequestTrendMovieMessage && !isRequestTrendMovie) {
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
  }, [errorRequestPopularMovieMessage, errorRequestFreeMovieMessage, errorRequestTrendMovieMessage, isRequestPopularMovie, isRequestFreeMovie, isRequestTrendMovie]);
  return (
    <>
      {type === "popular" && (
        <>
          <Box paddingY="1rem">
            <Heading>What's Popular</Heading>
            <Tabs onChange={handleChangeTabPopular} variant="soft-rounded" colorScheme="blue" marginY="1rem">
              <TabList>
                <Tab>Streaming</Tab>
                <Tab>Rent</Tab>
                <Tab>Theater</Tab>
              </TabList>
            </Tabs>
          </Box>
          <InfiniteScroll
            dataLength={popularMovie ? popularMovie?.results?.length : 0} //This is important field to render the next data
            next={nextPopularMovie}
            hasMore={popularMovie?.page !== popularMovie?.total_pages}
            loader={
              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {Array.from(Array(5).keys()).map((item) => (
                  <CardSkeleton key={item} />
                ))}
              </Grid>
            }
            endMessage={
              <Flex direction="column" justifyContent="center" alignItems="center" padding="1rem">
                <Image width="100px" src={require("assets/no_data.png")} />
                <Heading size="xs">Opss...! no more data</Heading>
              </Flex>
            }
          >
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
              {popularMovie?.results?.map((item: Movie, index: number) => (
                <Cards data={item} key={index} />
              ))}
            </Grid>
          </InfiniteScroll>
        </>
      )}
      {type === "free" && (
        <>
          <Box paddingY="1rem">
            <Heading>Free To Watch</Heading>
          </Box>
          <InfiniteScroll
            dataLength={freeMovie ? freeMovie?.results?.length : 0} //This is important field to render the next data
            next={nextFreeMovie}
            hasMore={freeMovie?.page !== freeMovie?.total_pages}
            loader={
              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {Array.from(Array(5).keys()).map((item) => (
                  <CardSkeleton key={item} />
                ))}
              </Grid>
            }
            endMessage={
              <Flex direction="column" justifyContent="center" alignItems="center" padding="1rem">
                <Image width="100px" src={require("assets/no_data.png")} />
                <Heading size="xs">Opss...! no more data</Heading>
              </Flex>
            }
          >
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
              {freeMovie?.results?.map((item: Movie, index: number) => (
                <Cards data={item} key={index} />
              ))}
            </Grid>
          </InfiniteScroll>
        </>
      )}

      {type === "trend" && (
        <>
          <Box paddingY="1rem">
            <Heading>Trending</Heading>
            <Tabs onChange={handleChangeTabTrend} variant="soft-rounded" colorScheme="blue" marginY="1rem">
              <TabList>
                <Tab>Today</Tab>
                <Tab>This Week</Tab>
              </TabList>
            </Tabs>
          </Box>
          <InfiniteScroll
            dataLength={trendMovie ? trendMovie?.results?.length : 0} //This is important field to render the next data
            next={nextTrendMovie}
            hasMore={trendMovie?.page !== trendMovie?.total_pages}
            loader={
              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {Array.from(Array(5).keys()).map((item) => (
                  <CardSkeleton key={item} />
                ))}
              </Grid>
            }
            endMessage={
              <Flex direction="column" justifyContent="center" alignItems="center" padding="1rem">
                <Image width="100px" src={require("assets/no_data.png")} />
                <Heading size="xs">Opss...! no more data</Heading>
              </Flex>
            }
          >
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
              {trendMovie?.results?.map((item: Movie, index: number) => (
                <Cards data={item} key={index} />
              ))}
            </Grid>
          </InfiniteScroll>
        </>
      )}
    </>
  );
};

export default ListMoviePages;
