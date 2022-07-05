import { useEffect, useState } from "react";
import { WatchListResponse } from "../models/WatchListResponse";
import { Movie } from "../models/Movie";

interface IMoviePropsMovies {
    watchListMovies: Movie[];
}

function WatchListMovies(props: IMoviePropsMovies) {

    return (
        <>
            <h3>Movies</h3>
            <div className="content_container">
                {props.watchListMovies.map(video => {
                    console.log(video);
                    return <p key={video.id}>{video.title}</p>
                })}
            </div>
        </>
    );
    
}

export default WatchListMovies;