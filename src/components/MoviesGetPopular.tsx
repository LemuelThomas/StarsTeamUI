import { useEffect, useState } from "react";
import { addMovieWatchList } from "../functions/watchlist";
import { Movie } from "../models/Movie";

interface IMovieProps {

}

function MoviesGetPopular(props: IMovieProps) {

    // replace with logged in users id
    let userId:number = 1;
    const [Movies, setMovies] = useState([] as Movie[]);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`, {
            method: 'GET'
        }).then(resp => resp.json()).then(data => (
            setMovies(data.results as unknown as Movie[])
        ));

        return () => {
            console.log("ribbit pop");
        }

    }, []);

    return (
        <>
            <h3>Popular</h3>
            <div className="content_container">
                {Movies.map((Movie, idx) => {
                    return (
                        <div key={idx} className='movie' onClick={()=>addMovieWatchList(userId,Movie.id,Movie.genre_ids)}>
                            <div className='title_box'>
                            <p>{Movie.title}</p>
                            </div>
                            <img src={"https://image.tmdb.org/t/p/w200" + Movie.poster_path} alt="image" />
                        </div>
                    );
                })}
            </div>
        </>
    );

}

export default MoviesGetPopular;