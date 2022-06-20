import React  from 'react'
import axios from 'axios'
import { useState, useEffect, FC } from 'react'


interface IMoviesData {
  results: MoviesDataType;
}

interface IMovies {
 movies: MovieType;
}

type MoviesDataType = {
  results: MovieType[];
}

type MovieType = {
 id: number;
title: string;
poster_path: string;
} 

export  const Homepage: FC = () => {

  const [movieData, setMovieData] = useState<MovieType[] | null>([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then(res => {
      setMovieData(res.data.results)
      console.log(res.data);
    })
  }, [])
  
  if (!movieData) return null;

  return (
  <>
    <div className='home_title'>Homepage</div>
    <div className="movies_container">
    {movieData.map((movie: MovieType) => (
      <>
        <div key={movie.id} className='movie'>
          <div className='title_box'>
            <p>
            {movie.title}
            </p>
          </div>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path
          }`}alt="image" />
        </div>
      </>
      ))}
    </div>
  </>
  )
}