import { useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const CardHorizontal = (props: { data: any }) => {
  const { data } = props;

  const navigation = useNavigate();
  return (
    <Stack direction="row" borderRadius={8} boxShadow="base">
      <Image
        width="100px"
        height="150px"
        objectFit="cover"
        borderTopLeftRadius={8}
        borderBottomLeftRadius={8}
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
        alt="Movie Poster"
      />
      <Flex direction="column" justifyContent="space-between" marginX="1rem" padding="0.5rem">
        <Box>
          <Heading size="sm" role="button" onClick={() => navigation(`/detail/${data.id}`)}>
            {data.title}
          </Heading>
          <Flex direction="row" alignItems="center">
            <StarIcon color="orange.500" height="0.75rem" />
            <Text marginX={2} size="0.75rem">
              {data.vote_average}
            </Text>
          </Flex>
          <Text fontSize="1rem" color="darkgray">
            {data.release_date}
          </Text>
        </Box>

        <Text fontSize="0.75rem" noOfLines={4}>
          {data.overview}
        </Text>
      </Flex>
    </Stack>
  );
};

export default CardHorizontal;
