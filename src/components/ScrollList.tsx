import { Movie } from "constant/interface";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Cards from "./Card";

const ScrollList = (props: { data: Movie[] | undefined | null }) => {
  const { data } = props;

  const list = data ? data : [];
  return (
    <ScrollMenu>
      {list?.map((item: Movie, index: number) => (
        <Cards data={item} key={index} />
      ))}
    </ScrollMenu>
  );
};

export default ScrollList;
