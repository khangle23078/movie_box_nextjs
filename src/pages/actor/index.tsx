import MovieCard from '@/components/MovieCard'
import { Actor } from '@/interfaces/actor'
import { getActors } from '@/services/actor'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

type ActorsProps = {
  actors: Actor[]
}

const Actors: NextPage<ActorsProps> = ({ actors }) => {
  return (
    <div className='max-w-[1170px] mx-auto py-[50px]'>
      <h3 className='text-3xl text-white font-semibold py-4'>Actor list</h3>
      <div className='grid items-center gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        {actors.length > 0 ?
          actors.map((actor: Actor) => {
            return <MovieCard data={actor} key={actor.id} type='person' />
          })
          : null
        }
      </div>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getActors()
  return {
    props: {
      actors: data.results
    }
  }
}

export default Actors