import { Link } from 'react-router-dom'
import WatchListMovies from './WatchListMovies';

interface IMovieProps {

}

function WatchList(props: IMovieProps) {

    return (
        <>
            <Link to={'/'}>Homepage</Link>
            <Link to={'/register'}>Register</Link>
            <h2>Watch List</h2>
            <WatchListMovies />
        </>);
}

export default WatchList;