import {Movie} from "@/interfaces/movie";
import {Actor} from "@/interfaces/actor";
import {getMovies} from "@/services/movie";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import MovieCard from "./MovieCard";

type MovieListProps = {
  title: string;
  type: string;
  order: string;
};

const MovieList: React.FC<MovieListProps> = ({title, type, order}) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const {data} = await getMovies(type, order);
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieList();
  }, [type, order]);

  return (
    <section className="max-w-[1170px] mx-auto pb-6 px-3 md:px-0">
      <div className="flex justify-between items-center">
        <h3 className=" text-[32px] text-white font-semibold pb-6">{title}</h3>
        <Link href={"/movie"} className="text-[#868686]">
          See more
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-3 md:grid-cols-4 gap- lg:grid-cols-6">
        {movies.slice(0, 12).map((movie: Movie) => {
          return <MovieCard data={movie} key={movie.id} type={type} />;
        })}
      </div>
    </section>
  );
};

export default MovieList;
