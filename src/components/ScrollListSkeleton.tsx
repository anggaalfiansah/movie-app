import { ScrollMenu } from "react-horizontal-scrolling-menu";
import CardSkeleton from "./CardSkeleton";

const ScrollListSkeleton = () => {
  return (
    <ScrollMenu>
      {Array.from(Array(10).keys()).map((item) => (
        <CardSkeleton key={item} />
      ))}
    </ScrollMenu>
  );
};

export default ScrollListSkeleton;
