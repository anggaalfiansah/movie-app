import { useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { Text, Box, Image, Flex, Heading } from "@chakra-ui/react";

const Cards = (props: { data: any }) => {
  const { data } = props;

  const navigation = useNavigate();

  return (
    <Box justifyContent="center" width="10rem" padding={1}>
      <Image width="9rem" height="14.5rem" objectFit="cover" rounded={8} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`} alt="Movie Poster" />
      <Flex direction="row" alignItems="center" marginY={1}>
        <StarIcon color="orange.500" />
        <Text marginX={2}>{data.vote_average}</Text>
      </Flex>
      <Heading size="sm" role="button" onClick={() => navigation(`/detail/${data.id}`)}>
        {data.title}
      </Heading>
      <Text fontSize="1rem">{data.release_date}</Text>
    </Box>
  );
};

export default Cards;
