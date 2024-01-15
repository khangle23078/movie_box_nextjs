import { Movie } from "@/interfaces/movie";
import React from "react";
import Link from "next/link";
import MovieCard from "./MovieCard";
import { TV_SERIES } from "@/interfaces/tv_series";
import { Actor } from "@/interfaces/actor";

type MovieListProps = {
  title: string;
  data: any
  type: string
};

const MovieList: React.FC<MovieListProps> = ({ title, data, type }) => {

  return (
    <section className="max-w-[1170px] mx-auto pb-6 px-3 md:px-0">
      <div className="flex justify-between items-center">
        <h3 className=" text-[32px] text-white font-semibold pb-6">{title}</h3>
        <Link href={`/${type}`} className="text-[#868686]">
          See more
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-3 md:grid-cols-4 gap- lg:grid-cols-6">
        {data.slice(0, 12).map((movie: Movie | TV_SERIES) => {
          return <MovieCard data={movie} key={movie.id} type={type} />;
        })}
      </div>
    </section>
  );
};

export default MovieList;
