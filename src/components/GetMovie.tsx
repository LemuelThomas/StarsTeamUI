import { SyntheticEvent, useEffect, useState } from "react";
import { Movie } from "../models/Movie";

interface IMovieProps {

}

function GetMovie(props: IMovieProps) {

    const [Movies, setMovies] = useState([] as Movie[]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=dc4493e47994151dacd229594c23d91e&language=en-US&page=1', {
            method: 'GET'
        }).then(resp => resp.json()).then(data => (
            setMovies(data.results as unknown as Movie[])
        ));

        return () => {
            console.log("ribbit");
        }

    }, []);
    

    console.log(Movies);

    return (
        <>
            <h3>Popular</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Movie</th>
                        <th>Movie Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Movies.map((Movie, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{Movie.id}</td>
                                <td>{Movie.title}</td>
                                <td><img src={"https://image.tmdb.org/t/p/w200" + Movie.poster_path} alt="image" /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default GetMovie;