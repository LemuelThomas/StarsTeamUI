import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Movie } from '../models/Movie';
import { WatchListResponse } from '../models/WatchListResponse';
import WatchListMovies from './WatchListMovies';

interface IMovieProps {
    id: number;
}

function WatchList(props: IMovieProps) {

    const [videoList,setVideoList] = useState([] as Movie[]);

    useEffect(()=>{

        const fetchWatchList = async (): Promise<WatchListResponse[]> => {
            console.log('fetching user watchlist');
            const resp = await fetch(`http://localhost:5000/MovieApp/watchlist/movies/${props.id}`);
            return await resp.json();
        }

        const fetchMovie = async (vidId: number): Promise<Movie> => {
            const resp = await fetch(`https://api.themoviedb.org/3/movie/${vidId}}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
            return await resp.json();
        };

        let movies = [] as Movie[];
        fetchWatchList().then(watchlist => {
            watchlist.forEach(item => {
                fetchMovie(item.video).then(movie => {
                    movies.push(movie);
                })
            })
        }).then(() => {
            setVideoList(movies);
        })

    }, [props.id]);

    return (
        <>
            <Link to={'/'}>Homepage</Link>
            <Link to={'/register'}>Register</Link>
            <h2>Watch List</h2>
            <WatchListMovies watchListMovies={videoList} />
        </>);
}

export default WatchList;