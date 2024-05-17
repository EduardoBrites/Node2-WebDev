import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard/MovieCard";

function Filmes() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=67011ebb267707a032d8bfe9c3897ff6&language=pt-BR&page=1&region=BR')
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
        <h1>Filmes</h1>
        <div className="grid grid-cols-4 justify-around">
            {movies.map((filme, index) => (
                <MovieCard filme={filme} key={filme.id}/>
            ))}
        </div>
        </>
    );
}

export default Filmes;