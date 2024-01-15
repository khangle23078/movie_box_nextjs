import MovieCard from "@/components/MovieCard";
import { Genre } from "@/interfaces/genre";
import { Movie, MovieDetail } from "@/interfaces/movie";
import { ProductionCompany } from "@/interfaces/production";
import { Video } from "@/interfaces/video";
import { getMovie, getMovieByRecommend, getMovies, getVideosByMovieId } from "@/services/movie";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface MovieDetailProps {
  movie: MovieDetail;
  movies: Movie[],
  videos: Video[]
}

const MovieDetail: NextPage<MovieDetailProps> = ({ movie, movies, videos }) => {
  return (
    <div className="max-w-[1170px] mx-auto py-[40px] min-h-screen">
      <Head>
        <title>{movie.title}</title>
        <meta name="description" content={movie.overview} />
      </Head>
      <main>
        <h3 className="text-white text-2xl font-semiBold pb-4 text-center md:text-left">Movie detail</h3>
        <div className="flex items-center gap-[50px] flex-col md:flex-row">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={300}
            className="rounded-lg w-[300px] h-[450px] mx-auto"
          />
          <div className="flex flex-col gap-2 text-center px-4 md:px-0 md:text-start">
            <p className="text-[#868686] text-xl">Name</p>
            <p className="text-white">{movie.title}</p>
            <p className="text-[#868686] text-xl">Over view</p>
            <p className="text-white">{movie.overview}</p>
            <p className="text-[#868686] text-xl">Genres</p>
            <div className="flex gap-3 justify-center md:justify-normal">
              {movie.genres.map((genre: Genre) => {
                return <p className="text-white border-[1px] border-white p-1 rounded-md" key={genre.id}>{genre.name}</p>
              })}
            </div>
            <p className="text-[#868686] text-xl">Release date</p>
            <p className="text-white">{movie.release_date}</p>
            <p className="text-[#868686] text-xl">Companry</p>
            <div className="flex gap-3 justify-center md:justify-normal">
              {movie.production_companies.map((production: ProductionCompany) => {
                return <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${production.logo_path}`}
                  alt={production.name}
                  width={40}
                  height={40}
                  key={production.id}
                  className="w-[50px] h-[50px] object-cover bg-white p-1 rounded"
                />
              })}
            </div>
          </div>
        </div>
        {
          movie.belongs_to_collection ?
            <div className="py-5">
              <h4 className="text-white text-2xl font-semiBold">Collections</h4>
              <p className="text-[#868686] text-lg py-3">{movie.belongs_to_collection?.name}</p>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${movie.belongs_to_collection?.poster_path}`}
                alt={movie.belongs_to_collection.name}
                width={200}
                height={200}
                className="rounded"
              />
            </div>
            : null
        }
      </main>
      <section className="px-2 md:mx-0">
        <h4 className="text-white text-2xl font-semiBold py-5">Videos</h4>
        <Swiper
          spaceBetween={150}
          slidesPerView={2}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <div className="flex gap-[30px]">
            {videos.length > 0 ? videos.slice(0, 3).map((video: Video) => {
              return (
                <SwiperSlide key={video.id}>
                  <div key={video.id} className="py-2">
                    <p className="text-[#868686] text-lg py-2">{video.type}</p>
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${video.key}`}
                    />
                  </div>
                </SwiperSlide>
              )
            }) : null}
          </div>

        </Swiper>

      </section >
      {movies.length > 0 ?
        <section>
          <h4 className="text-white text-2xl font-semiBold py-5">Recommendations</h4>
          <div className="flex flex-wrap gap-4">
            {movies.slice(0, 6).map((movie: Movie) => {
              return <MovieCard data={movie} key={movie.id} type="movie" />
            })}
          </div>
        </section>
        : null
      }
    </div >
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getMovies("movie", "popular");

  return {
    paths: data.results.map((movie: MovieDetail) => {
      return {
        params: {
          id: movie.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  const { data } = await getMovie(id);
  const { data: movies } = await getMovieByRecommend(id)
  const { data: videos } = await getVideosByMovieId(id)
  return {
    props: {
      movie: data,
      movies: movies.results,
      videos: videos.results
    },
  };
};

export default MovieDetail;
