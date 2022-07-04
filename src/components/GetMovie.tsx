import MoviesGetLatest from "./MoviesGetLatest";
import MoviesGetPopular from "./MoviesGetPopular";
import MoviesGetTop from "./MoviesGetTop";
import { Link } from 'react-router-dom'

interface IMovieProps {

}

function GetMovie(props: IMovieProps) {

    return (
        <>
            <Link to={'/'}>Homepage</Link>
            <Link to={'/register'}>Register</Link>
            <h2>Movies</h2>
            <MoviesGetPopular />
            <MoviesGetTop />
            <MoviesGetLatest />
        </>);
}

export default GetMovie;