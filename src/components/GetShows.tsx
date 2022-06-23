import { Link } from "react-router-dom";
import ShowsAiringToday from "./ShowsAiringToday";
import ShowsOnTV from "./ShowsOnTV";
import ShowsPopular from "./ShowsPopular";
import ShowsTopRated from "./ShowsTopRated";

function GetShows (props: {}) {
    
    return(<>
        <h4>Shows</h4>
        <Link to={'/'}>Homepage</Link>
        <ShowsAiringToday />
        </>)
}

export {};