import React, { SyntheticEvent, useState, useEffect } from "react";
import GetMovie from "./GetMovie";
import MoviesGetLatest from "./MoviesGetLatest";
import MoviesGetTop from "./MoviesGetTop";
import MoviesGetPopular from "./MoviesGetPopular";
import { Link } from "react-router-dom";

type ContentType = {
    id: number;
    title: string;
    name: string;
    poster_path: string;
    backdrop_path: string;
}
function Nav() {
   
    const [show, handleShow] = useState(false);
    const [queryData, setQueryData] = useState<string>()
    const [searchData, setSearchData] = useState<ContentType[]>([])
    
    function handleChange(e: SyntheticEvent) {
        const value=(e.target as HTMLInputElement).value;

    setQueryData(value)
    }
    
    function handleSearch(e: SyntheticEvent) {
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${queryData}`)
        .then(resp => resp.json()).then(data => (
         //       setSearchData(data.results as unknown as ContentType[])
        
           console.log(data.results)
            ));

    }
    
    
    
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);
    
        
    return (
        
        <div className={`nav ${show && 'nav_black'}`}>

            <div className="nav_contents">

                <div className="Search">
                    <input type="text" placeholder="Search..." name="query" onChange={handleChange}/> 
                    <button onClick={handleSearch}>Search</button>

                </div>
                <img
                    className="nav_logo"
                    src=""
                    alt=""
                />
            

            </div>
        </div>

    )}
    export default Nav;
