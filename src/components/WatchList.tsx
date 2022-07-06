import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Movie } from '../models/Movie';
import { WatchListResponse } from '../models/WatchListResponse';
import WatchListMovies from './WatchListMovies';

interface IMovieProps {
    id: number;
}

function WatchList(props: IMovieProps) {

    const [movieIds,setMovieIds] = useState([] as number[]);

    useEffect(()=>{

        fetch(`http://localhost:5000/MovieApp/watchlist/movies/${props.id}`).then(resp => {
            return resp.json();
        }).then(watchlist => {
            const list = watchlist as WatchListResponse[];
            const videoIds = list.map(item => item.video);
            setMovieIds([...videoIds]);
        })

    }, [props.id]);

    return (
        <>
            <Link to={'/'}>Homepage</Link>
            <Link to={'/register'}>Register</Link>
            <h2>Watch List</h2>
            <WatchListMovies movieIds={movieIds} />
        </>);
}

export default WatchList;