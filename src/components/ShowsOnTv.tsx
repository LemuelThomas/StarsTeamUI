import React from 'react'
import { useEffect, useState } from "react";
import TvData from "../models/TvData";

function ShowsOnTv(props: {}) {
    const [shows, setShows] = useState([] as TvData[]);
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/on_tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`, {
            method: 'GET'
        }).then(resp => resp.json()).then(data => (
           // setShows(data.results as unknown as TvData[])
           console.log(data.results)
            ));
            
    }, []);

  return (<>
        <h3>On TV</h3>
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

export default ShowsOnTv;