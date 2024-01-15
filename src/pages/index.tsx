import Slider from "@/components/Slider";
import { GetStaticProps, NextPage } from "next";
import { getMovies } from "../services/movie";
import MovieList from "@/components/MovieList";
import Head from "next/head";

interface HomeProps {
  movies: any;
}

const Home: NextPage<HomeProps> = ({ movies }) => {
  return (
    <main>
      <Head>
        <title>MovieBox</title>
      </Head>
      <Slider movies={movies} />
      <MovieList title="Movie" type="movie" order="popular" />
      <MovieList title="TV series" type="tv" order="top_rated" />
      <MovieList title="Actors" type="person" order="popular" />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await getMovies("movie", 'popular');

  return {
    props: {
      movies: data.results.slice(0, 6),
    },
  };
};

export default Home;
