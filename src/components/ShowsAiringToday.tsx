import { useEffect, useState } from "react";
import TVShows from "../models/TVShows";

function ShowsAiringToday (props: {}) {

    const [Shows, setShows] = useState([] as Shows[]);

    useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`, {
        method: 'GET'
        }).then(resp => resp.json()).then(data => (
            setShows(data.results as unknown as Shows[])
        ));

        return () => {
            console.log(Shows);
        }

    }, []);

    console.log("did it work?");

    return(<>
        <div className="content-container">
        {Shows.map(Shows, id) => {
            return (
                <div key={id} className='shows'>
                    <div className='title_box'>
                    <p>{TVShows.name}</p>
                    </div>
                <img src={"https://image.tmdb.org/t/p/w200" + TVShows.poster_path} alt="image" />
                </div>
        </div>)
    </>)
}

export default ShowsAiringToday;