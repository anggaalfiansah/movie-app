/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getDetailMovieById, resetErrorDetailMovie } from "redux/actions";

import { Badge, Box, Flex, Heading, Icon, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { GoPrimitiveDot } from "react-icons/go";

import TrendMovieShowCase from "components/TrendMovieShowCase";
import MovieDetailSkeleton from "components/MovieDetailSkeleton";

const MovieDetailPages = () => {
  const { movie_id } = useParams();

  const { movieDetail, isRequestMovieDetail, errorRequestMovieDetailMessage } = useSelector((state: any) => state.detail);

  const toast = useToast();

  const dispatch = useDispatch();

  useEffect(() => {
    const id = movie_id ? movie_id : "";
    dispatch(getDetailMovieById(id));
  }, [movie_id]);

  useEffect(() => {
    if (errorRequestMovieDetailMessage && !isRequestMovieDetail) {
      toast({
        duration: 3000,
        title: "Error Detail Movie",
        description: errorRequestMovieDetailMessage,
        status: "error",
        isClosable: true,
        onCloseComplete: () => {
          dispatch(resetErrorDetailMovie());
        },
      });
    }
  }, [errorRequestMovieDetailMessage, isRequestMovieDetail]);

  return (
    <Box>
      {!isRequestMovieDetail && movieDetail && (
        <Stack direction={["column", "row"]} alignItems={["center", "flex-start"]} boxShadow="base" borderRadius={8}>
          <Image width="15rem" height="20rem" objectFit="cover" borderRadius={8} src={`https://image.tmdb.org/t/p/original/${movieDetail?.poster_path}`} />

          <Box>
            <Heading textAlign={["center", "initial"]}>{`${movieDetail?.title} (${new Date(movieDetail?.release_date).getFullYear()})`}</Heading>
            <Stack direction="row" alignItems="center">
              <Text>{movieDetail?.release_date}</Text>
              <Icon as={GoPrimitiveDot} marginX="0.25rem" />
              <Box>
                {movieDetail?.genres.map((item: { id: number; name: string }, index: number) => (
                  <Badge key={index} colorScheme="blue" marginX="0.15rem">
                    {item.name}
                  </Badge>
                ))}
              </Box>
              <Icon as={GoPrimitiveDot} marginX="0.25rem" />
              <Text>{`${movieDetail?.runtime} Min`}</Text>
            </Stack>

            <Flex direction="row" alignItems="center" marginY={1}>
              <StarIcon color="orange.500" />
              <Text marginX={2}>{`${movieDetail?.vote_average.toFixed(1)} (${movieDetail?.vote_count})`}</Text>
            </Flex>

            <Text as="i" color="gray.400">
              {movieDetail?.tagline}
            </Text>

            <Box marginY="1rem">
              <Heading size="sm">OVERVIEW</Heading>
              <Text>{movieDetail?.overview}</Text>
            </Box>

            <Box></Box>
          </Box>
        </Stack>
      )}
      {!isRequestMovieDetail && !movieDetail && (
        <Flex direction="column" justifyContent="center" alignItems="center" padding="1rem">
          <Image width="17.5rem" src={require("assets/no_data.png")} />
          <Heading size="xs">Opss...! movie not found</Heading>
        </Flex>
      )}
      {isRequestMovieDetail && <MovieDetailSkeleton />}
      <TrendMovieShowCase />
    </Box>
  );
};

export default MovieDetailPages;
