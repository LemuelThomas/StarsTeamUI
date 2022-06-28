import ShowsPopular from "./ShowsPopular";
import ShowsAiring from "./ShowsAiring";
import ShowsOnTv from "./ShowsOnTv";
import ShowsTopRated from "./ShowsTopRated";
import { Link } from 'react-router-dom';

function getAllTvShows (props: {}) {
    return(<>
        <div className="link">
            <Link to={'/'}>Homepage </Link>
            <Link to={'/movies'}>Movies </Link>
            <Link to={'/login'}>Login </Link>
            <Link to={'/register'}>Register</Link>
            <div className="title"><h2>Shows</h2>
                <ShowsPopular />
                <ShowsAiring />
                <ShowsTopRated />
                <ShowsOnTv />
            </div>
        </div>
    </>)
}
export default getAllTvShows;