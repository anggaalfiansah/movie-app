/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import { useSelector, useDispatch } from "react-redux";
import { getMoreMovieByKeyword, getMovieByKeyword, resetErrorSearchMovie } from "redux/actions";
import { Movie } from "constant/interface";

import { Box, Flex, Heading, Image, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import CardHorizontal from "components/CardHorizontal";
import CardHorizontalSkeleton from "components/CardHorizontalSkeleton";

const SearchResult = () => {
  const { keyword } = useParams();

  const { movieSearch, isRequestMovieSearch, errorRequestMovieSearchMessage } = useSelector((state: any) => state.search);

  const toast = useToast();

  const dispatch = useDispatch();

  const nextMovie = () => {
    const text = keyword ? keyword : "";
    dispatch(getMoreMovieByKeyword(text, movieSearch?.page + 1));
  };

  useEffect(() => {
    const text = keyword ? keyword : "";
    dispatch(getMovieByKeyword(text));
  }, [keyword]);

  useEffect(() => {
    if (errorRequestMovieSearchMessage && !isRequestMovieSearch) {
      toast({
        duration: 3000,
        title: "Error Search Movie",
        description: errorRequestMovieSearchMessage,
        status: "error",
        isClosable: true,
        onCloseComplete: () => {
          dispatch(resetErrorSearchMovie());
        },
      });
    }
  }, [errorRequestMovieSearchMessage, isRequestMovieSearch]);

  return (
    <>
      <Box marginBottom="1rem">
        <Text>
          Search result from keyword : <b>{keyword}</b>
        </Text>
      </Box>
      <InfiniteScroll
        dataLength={movieSearch ? movieSearch?.results?.length : 0} //This is important field to render the next data
        next={nextMovie}
        hasMore={movieSearch?.page !== movieSearch?.total_pages}
        loader={
          <>
            {Array.from(Array(5).keys()).map((item) => (
              <CardHorizontalSkeleton key={item} />
            ))}
          </>
        }
        endMessage={
          <Flex direction="column" justifyContent="center" alignItems="center" padding="1rem">
            <Image width="100px" src={require("assets/no_data.png")} />
            <Heading size="xs">Opss...! no more data</Heading>
          </Flex>
        }
      >
        <SimpleGrid spacing={10}>
          {movieSearch?.results?.map((item: Movie, index: number) => (
            <CardHorizontal data={item} />
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default SearchResult;
