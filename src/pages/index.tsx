import { useQuery } from "@apollo/client";
import MoviesList from "../components/movies/MoviesList";
import Navbar from "../components/nav/Navbar";
import Studios from "../components/studios/Studios";
import Trending from "../components/Trending/Trending";
import Head from "next/head";
import { Movie } from "../types";
import { fetchLimitVar, MOVIES_QUERY } from "../graphql/queries";
import { useState } from "react";
import LoadMore from "../components/movies/LoadMore";
import Loading from "../components/nav/Loading";

const fetchAmount = 4;

const Index = () => {
  const [queryLimit, setQueryLimit] = useState(fetchLimitVar());
  const [loading, setLoading] = useState({
    state: false,
    hasMore: true,
  });
  const {
    data = { movies: [] },
    fetchMore,
    loading: QueryLoading,
  } = useQuery<{ movies: Movie[] }>(MOVIES_QUERY, {
    variables: {
      limit: queryLimit,
    },
  });

  const loadMore = () => {
    setQueryLimit((currentLimit) => {
      const newLimit = currentLimit + fetchAmount;
      //avoid making extra requests if all data has been fetched
      if (newLimit - data.movies.length > fetchAmount) {
        setLoading({
          ...loading,
          hasMore: false,
        });
        fetchLimitVar(currentLimit);
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
        fetchLimitVar(newLimit);
        return newLimit;
      }
    });
  };

  if (QueryLoading) return <Loading />;

  return (
    <>
      <Head>
        <title> Movies DB Design </title>
        <meta property="og:title" content="Movies DB Design" key="title" />
      </Head>
      <Navbar />
      <Trending data={data.movies} />
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

export default Index;
