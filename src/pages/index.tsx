import { useQuery } from "@apollo/client";
import MoviesList from "../components/movies/MoviesList";
import Navbar from "../components/nav/Navbar";
import Studios from "../components/studios/Studios";
import Trending from "../components/Trending/Trending";
import Head from "next/head";
import { Movie } from "../types";
import { initializeApollo } from "../graphql/client";
import { MOVIES_QUERY } from "../graphql/queries";
import { useState } from "react";
import LoadMore from "../components/movies/LoadMore";

const fetchLimit = 8;
const fetchAmount = 4;

const Index = () => {
  const limit = 5;
  const [queryLimit, setQueryLimit] = useState(fetchLimit);
  const [loading, setLoading] = useState({
    state: false,
    hasMore: true,
  });
  const { data = { movies: [] }, fetchMore } = useQuery<{ movies: Movie[] }>(
    MOVIES_QUERY,
    {
      variables: {
        limit: queryLimit,
      },
    }
  );

  const loadMore = () => {
    setQueryLimit((currentLimit) => {
      const newLimit = currentLimit + fetchAmount;
      //avoid making extra requests if all data has been fetched
      if (newLimit - data.movies.length > fetchAmount) {
        setLoading({
          ...loading,
          hasMore: false,
        });
        return currentLimit;
      } else {
        setLoading({
          ...loading,
          state: true,
        });
        fetchMore({
          variables: {
            limit: newLimit,
            offset: data.movies.length,
          },
        }).then(() =>
          setLoading({
            ...loading,
            state: false,
          })
        );

        return newLimit;
      }
    });
  };

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
      {loading.hasMore && (
        <LoadMore
          w={["90%", "85%"]}
          isLoading={loading.state}
          colorScheme="darkred"
          callBack={loadMore}
        />
      )}
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MOVIES_QUERY,
    variables: {
      limit: fetchLimit,
      offset: 0,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
export default Index;
