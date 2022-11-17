import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const CardHorizontalSkeleton = () => {
  return (
    <Stack direction="row" borderRadius={8} boxShadow="base">
      <Skeleton width="100px" height="150px" objectFit="cover" borderTopLeftRadius={8} borderBottomLeftRadius={8} />
      <Flex direction="column" justifyContent="space-between" marginX="1rem" padding="0.5rem" width="100%">
        <Box>
          <Skeleton height="1.5rem" width="15rem" />
          <Flex direction="row" alignItems="center" marginY={1}>
            <StarIcon color="orange.500" />
            <Skeleton height="0.75rem" width="2rem" marginX={2} />
          </Flex>
          <Skeleton height="1rem" marginX={2} width="5rem" />
        </Box>
        <SkeletonText fontSize="0.75rem"  />
      </Flex>
    </Stack>
  );
};

export default CardHorizontalSkeleton;
