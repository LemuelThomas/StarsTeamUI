import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation, useParams } from 'react-router-dom'


type Props = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  videos: [];
}


export default function MovieDetails() {
  
    const {id} = useParams()
      

      const [movieData, setMovieData] = useState<Props | null>()
      const [keyData, setKeyData] = useState<string>('')
      
  useEffect(() =>{

    axios.get( `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`)
    .then(res => {
      setMovieData(res.data)
      setKeyData(res.data.videos.results[0].key)
      
    })
  }, []) 
  
  return (
    <>
    <Link to={'/'}>Homepage</Link>
      <h2>MovieDetails</h2>
      <div className="details_container">
        <h3>{movieData?.title}</h3>
          <div className="details_box">
            <img src={`https://image.tmdb.org/t/p/w400${movieData?.poster_path
                  }`}alt="image" />
          <iframe  width="850" height="647"
            src={`https://www.youtube.com/embed/${keyData}?autoplay=1`}
            id='player'>
          </iframe>
        </div>
          <h4>{movieData?.overview}</h4>
      </div>
    </>
  )
}