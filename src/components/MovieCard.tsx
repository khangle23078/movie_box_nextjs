import { Actor } from "@/interfaces/actor";
import { Movie } from "@/interfaces/movie";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type MovieCardProps = {
  data: any;
  type?: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ data, type }) => {
  return (
    <Link href={`/${type}/${data.id}`} className="relative">
      <Image
        loading="lazy"
        src={`${process.env.IMAGE_URL}${type === "person" ? data.profile_path : data.poster_path
          }`}
        alt={data.title}
        width={170}
        height={305}
        className="rounded-xl h-[305px] object-cover"
      />
      {/* <p className="absolute top-1 right-4 bg-green-700 text-white rounded-md px-2">
        {data.vote_average}
      </p> */}
      <p className="text-white max-w-[170px] text-[14px] pt-1 truncate">
        {type === "movie" ? data.title : data.name}
      </p>
    </Link>
  );
};

export default MovieCard;
