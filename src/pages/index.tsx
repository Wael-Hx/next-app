import MoviesList from "../components/movies/MoviesList";
import Navbar from "../components/nav/Navbar";
import Studios from "../components/studios/Studios";
import Trending from "../components/Trending/Trending";

const Index = () => {
  const limit = 5;

  return (
    <>
      <Navbar />
      <Trending limit={limit} />
      <Studios />
      <MoviesList />
    </>
  );
};

export default Index;
