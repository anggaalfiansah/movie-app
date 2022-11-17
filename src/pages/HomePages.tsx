import PopularMovieShowCase from "components/PopularMovieShowCase";
import FreeMovieShowCase from "components/FreeToWatchShowCase";
import TrendMovieShowCase from "components/TrendMovieShowCase";

const HomePages = () => {
  return (
    <>
      <PopularMovieShowCase />
      <FreeMovieShowCase />
      <TrendMovieShowCase />
    </>
  );
};

export default HomePages;
