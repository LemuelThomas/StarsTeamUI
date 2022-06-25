import React from 'react'
import { useState, useEffect } from 'react'
import TVData, { TvData } from '../models/TvData'

export default function ShowsAiring(props: {}) {

    const [shows, setShows] = useState([] as TVData[]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`, {
            method: 'GET'
        }).then(resp => resp.json()).then(data => (
            setShows(data.results as unknown as TvData[])
        ));

    }, []);

    return (
        <>
            <h3>Airing Today</h3>
            <div className='content_container'>
                {shows.map((show, idx) => {
                    return(<>
                        {show.poster_path && (
                            <div key={idx} className='movie'>
                            <img src={"https://image.tmdb.org/t/p/w200" + show.poster_path} alt="image" />
                            <div className='title_box'>
                                <p>{show.name}</p>
                            </div>
                            </div>
                          )}
                    </>)
                })}
            </div>
        </>)
}