import MovieCard from '@/components/MovieCard';
import { Movie } from '@/interfaces/movie';
import { getTVSeries } from '@/services/tv_series';
import { GetStaticProps, NextPage } from 'next';

interface TVSeriersProps {
  tv_series: Movie[]
}

const TVSeriers: NextPage<TVSeriersProps> = ({ tv_series }) => {
  return (
    <main className='max-w-[1170px] mx-auto py-[50px]'>
      <h3 className='text-3xl text-white font-semibold py-4'>TV series list</h3>
      <div className='grid items-center gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        {tv_series.length > 0 ?
          tv_series.map((tv_seri: Movie) => {
            return <MovieCard data={tv_seri} key={tv_seri.id} type='tv' />
          })
          : null
        }
      </div>
    </main>
  )
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await getTVSeries()
  return {
    props: {
      tv_series: data.results
    }
  }
}

export default TVSeriers;