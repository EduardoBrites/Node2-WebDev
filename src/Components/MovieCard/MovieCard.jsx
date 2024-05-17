function MovieCard({filme}) {
    return(
        <div className="movieCard">
            <img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}/>
            <p>{filme.title}</p>
            <Link to ={`filmes/${filme.id}`}>Saber Mais</Link>
        </div>
    );
}

export default MovieCard