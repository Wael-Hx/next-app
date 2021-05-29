import { useQuery } from "@apollo/client";
import MoviesList from "../components/movies/MoviesList";
import Loading from "../components/nav/Loading";
import Navbar from "../components/nav/Navbar";
import Studios from "../components/studios/Studios";
import Trending from "../components/Trending/Trending";
import Head from "next/head";
import { Movie } from "../types";
import { initializeApollo } from "../graphql/client";
import { MOVIES_QUERY } from "../graphql/queries";

const Index = () => {
  const limit = 5;

  const { data } = useQuery<{ movies: Movie[] }>(MOVIES_QUERY);

  if (!data) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  return (
    <>
      <Head>
        <title> Movies DB Design </title>
        <meta property="og:title" content="Movies DB Design" key="title" />
      </Head>
      <Navbar />
      <Trending data={data.movies} limit={limit} />
      <Studios />
      <MoviesList data={data.movies} />
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MOVIES_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
export default Index;
