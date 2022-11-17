import { Box, Flex, Icon, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { GoPrimitiveDot } from "react-icons/go";

const MovieDetailSkeleton = () => {
  return (
    <Stack direction={["column", "row"]} alignItems={["center", "flex-start"]} boxShadow="base" borderRadius={8}>
      <Skeleton width="16rem" height="20rem" />

      <Box width="100%" marginY="1rem">
        <Stack alignItems={["center", "flex-start"]} width="100%">
          <Skeleton height="2.5rem" width="18rem" marginY="0.5rem" />
        </Stack>
        <Stack direction="row" alignItems="center" marginY="0.5rem">
          <Skeleton height="1rem" width="2rem" />
          <Icon as={GoPrimitiveDot} marginX="0.25rem" />
          <Stack direction="row">
            <Skeleton height="1rem" width="3rem" />
            <Skeleton height="1rem" width="3rem" />
          </Stack>
          <Icon as={GoPrimitiveDot} marginX="0.25rem" />
          <Skeleton height="1rem" width="4rem" />
        </Stack>

        <Flex direction="row" alignItems="center" marginY={1}>
          <StarIcon color="orange.500" />
          <Skeleton height="1rem" width="4rem" marginX="5px" />
        </Flex>

        <Skeleton height="1rem" width="5rem" marginY="1rem" />

        <Box marginTop="4rem">
          <Skeleton height="1rem" width="7rem" marginY="1rem" />
          <SkeletonText />
        </Box>
      </Box>
    </Stack>
  );
};

export default MovieDetailSkeleton;
