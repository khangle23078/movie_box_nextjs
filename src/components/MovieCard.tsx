import { StarIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type MovieCardProps = {
  data: any
  type?: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ data, type }) => {
  return (
    <div className="flex flex-col">
      <Link href={`${type}/${data.id}`}>
        <Image
          loading="lazy"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data.poster_path}`}
          alt={data.title}
          width={170}
          height={305}
          className="rounded-xl h-[305px] object-cover"
        />
      </Link>
      <Link href={`${type}/${data.id}`}>
        <p className="text-white max-w-[170px] text-[14px] pt-1 truncate">
          {data.title || data.name}
        </p>
      </Link>
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center gap-1">
          <StarIcon className="text-yellow-300 w-4 h-4" />
          <p>{data.vote_average.toFixed(1)}</p>
        </div>
        <p className="pr-2">{dayjs(data.release_date).format("YYYY")}</p>
      </div>
    </div>
  );
};

export default MovieCard;
