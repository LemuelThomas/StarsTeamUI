import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


interface IContentData {
  results: ContentDataType;
}

interface IContent {
 movies: ContentType;
}

type ContentDataType = {
  results: ContentType[];
}

type ContentType = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
} 

export default function Homepage() {

  const [movieData, setMovieData] = useState<ContentType[] | null>([])

  const [tvData, setTvData] = useState<ContentType[] | null>([])

  const [featured, setFeatured] = useState<ContentType[] | null>([])

  useEffect(() => {

    axios.get( `https://api.themoviedb.org/3/movie/157336?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`)
    .then(res => {
      console.log(res.data);
    })
    axios.get(`
    https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
      setFeatured(res.data.results.slice(0,3))
      
    })

    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
      setMovieData(res.data.results.slice(0,10))
    })

    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
      setTvData(res.data.results.slice(0,10))
    })
  }, [])

  return (
  <>
    <h1 className='home_title'>STARSTREAM</h1>
    <Link to={'/movies'}>Movies</Link>
    <Link to={'/register'}>Register</Link>
    <Link to={'/login'}>Login</Link>

    <h3>Featured</h3>     
    <div className="content_container">
    {featured?.map((feat: ContentType) => (
      <>
      {feat.poster_path && (
        <Link to={`/movies/${feat.id}`}>
          <div key={feat.id} className='movie'>
            <div className='title_box'>
              <p>
              {feat.name? feat.name : feat.title }
              </p>
            </div>
            <img src={`https://image.tmdb.org/t/p/w300${feat.poster_path
            }`}alt="image" />
          </div>
        </Link>
      )}
      </>
      ))}
    </div>
    <h3>Movies</h3>
    <div className="content_container">
    {movieData?.map((movie: ContentType) => (
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
     <h3>TV Shows</h3>     
    <div className="content_container">
    {tvData?.map((show: ContentType) => (
      <>
      {show.poster_path && (
        <div key={show.id} className='movie'>
          <div className='title_box'>
            <p>
            {show.name}
            </p>
          </div>
          <img src={`https://image.tmdb.org/t/p/w200${show.poster_path
          }`}alt="image" />
        </div>
      )}
      </>
      ))}
    </div>
  </>
  )
}