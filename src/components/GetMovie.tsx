import MoviesGetLatest from "./MoviesGetLatest";
import MoviesGetPopular from "./MoviesGetPopular";
import MoviesGetTop from "./MoviesGetTop";

interface IMovieProps {

}

function GetMovie(props: IMovieProps) {

    return (<>
            <h2>Movies</h2>
            <MoviesGetPopular />
            <MoviesGetTop />
            <MoviesGetLatest />
            </>);
}

export default GetMovie;