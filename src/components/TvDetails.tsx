import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams, Navigate } from 'react-router-dom'
import { LoggedInUserType } from '../models/logged-in-user';


type Props = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  videos: [];
}

interface ITvProps {
  currentUser: LoggedInUserType | undefined
}


export default function TvDetails(props: ITvProps) {
  
    const {id} = useParams()
      

      const [tvData, setTvData] = useState<Props | null>()
      const [keyData, setKeyData] = useState<string>('')
      
  useEffect(() =>{

    axios.get( `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`)
    .then(res => {
      setTvData(res.data)
      setKeyData(res.data.videos.results[0].key)
      
    })
  }, []) 
  
  return (
    !props.currentUser ? <Navigate to="/login"/> :
    <>
    <Link to={'/'}>Homepage</Link>
      <h2>TV Show Details</h2>
      <div className="details_container">
        <h3>{tvData?.name}</h3>
          <div className="details_box">
            <img src={`https://image.tmdb.org/t/p/w400${tvData?.poster_path
                  }`}alt="image" />
          <iframe  width="850" height="647"
            src={`https://www.youtube.com/embed/${keyData}?autoplay=1`}
            id='player'>
          </iframe>
        </div>
          <h4>{tvData?.overview}</h4>
      </div>
    </>
  )
}
