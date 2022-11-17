import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Skeleton } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Box flexDirection="row" justifyContent="center" width="10rem" padding={1}>
      <Flex direction="row" justifyContent="center" marginY={1}>
        <Skeleton width="9rem" height="14rem" rounded={8} padding="1rem" />
      </Flex>
      <Flex direction="row" alignItems="center" marginY={1}>
        <StarIcon color="orange.500" />
        <Skeleton height="1rem" width="2rem" marginX={2} />
      </Flex>
      <Flex direction="column" alignItems="center" marginY={1}>
        <Skeleton width="9rem" height="1rem" marginY={1} />
        <Skeleton width="9rem" height="1rem" marginY={1} />
      </Flex>
    </Box>
  );
};

export default CardSkeleton;
