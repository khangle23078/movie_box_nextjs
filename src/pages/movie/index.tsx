import MovieCard from "@/components/MovieCard";
import { Movie } from "@/interfaces/movie";
import { getMovies } from "@/services/movie";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface MovieProps {
  movies: Movie[];
}

const Movies: NextPage<MovieProps> = ({ movies }) => {
  return (
    <div className="max-w-[1170px] mx-auto py-[50px]">
      <Head>
        <title>List of Movie</title>
      </Head>
      <h3 className="text-white text-3xl font-semibold py-4">Movie list</h3>
      <div className="grid items-center gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {movies.length > 0
          ? movies.map((movie: Movie) => {
            return <MovieCard data={movie} type="movie" key={movie.id} />;
          })
          : null}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getMovies("movie", "popular");
  return {
    props: {
      movies: data.results,
    },
  };
};

export default Movies;
