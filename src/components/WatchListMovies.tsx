import { SyntheticEvent, useEffect, useState } from "react";
import { WatchListResponse } from "../models/WatchListResponse";
import { Movie } from "../models/Movie";

interface IMoviePropsMovies {

}

function WatchListMovies(props: IMoviePropsMovies) {
    // replace with logged in users id
    let userid:number = 1;
    const [watchList,setWatchList] = useState([] as WatchListResponse[]);
    const [videoList,setVideoList] = useState([] as Movie[]);

    useEffect(()=>{
        fetch(`http://localhost:5000/MovieApp/watchlist/movies/${userid}`,{
            method:'GET'
        }).then(resp => resp.json()).then(data =>{
            setWatchList(data as unknown as WatchListResponse[]);
            setVideoList([]);
            for(let x = 0; x < data.length; x++) {  
                fetch(`https://api.themoviedb.org/3/movie/${data[x].video}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,{
                    method:'GET'
                }).then(resp => resp.json()).then(data =>{
                    setVideoList(oldarray =>[...oldarray, data as unknown as Movie])
                });  
            }
        });
    },[]);

    return (
        <>
            <h3>Movies</h3>
            <div className="content_container">
                {videoList.map((videolist, idx) => {
                    return (
                        <div key={idx} className='movie' onClick={()=>console.log('ribbit')}>
                            <div className='title_box'>
                            <p>{videolist.title}</p>
                            </div>
                            <img src={`https://image.tmdb.org/t/p/w200${videolist.poster_path}`} alt="image" />
                        </div>
                    );
                })}
            </div>
        </>);
}

export default WatchListMovies;