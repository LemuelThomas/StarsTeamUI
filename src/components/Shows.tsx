import ShowsPopular from "./ShowsPopular";
import ShowsAiring from "./ShowsAiring";
import ShowsOnTv from "./ShowsOnTv";
import ShowsTopRated from "./ShowsTopRated";

function getAllTvShows (props: {}) {
    return(<>
        <ShowsPopular />
        <ShowsAiring />
        <ShowsOnTv />
        <ShowsTopRated />
    </>)
}
export default getAllTvShows;