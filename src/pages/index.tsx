import MovieList from "@/components/MovieList";
import Slider from "@/components/Slider";
import { Movie } from "@/interfaces/movie";
import { TV_SERIES } from "@/interfaces/tv_series";
import { getTVSeries } from "@/services/tv_series";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getMovies } from "../services/movie";

interface HomeProps {
  movies: Movie[]
  tv_series: TV_SERIES[]
}

const Home: NextPage<HomeProps> = ({ movies, tv_series }) => {
  return (
    <main>
      <Head>
        <title>MovieBox</title>
        <meta name="description" content="Website about movie" />
      </Head>
      <Slider movies={movies} />
      <MovieList title="Movie" data={movies} type={'movie'} />
      <MovieList title="TV series" data={tv_series} type={'tv_series'} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: movies } = await getMovies("movie", 'popular');
  const { data: tv_series } = await getTVSeries();
  return {
    props: {
      movies: movies.results.slice(0, 12),
      tv_series: tv_series.results.slice(0, 12),
    },
  };
};

export default Home;
