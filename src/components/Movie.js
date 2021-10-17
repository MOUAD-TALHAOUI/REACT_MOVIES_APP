import React from 'react';

const img_api="https://image.tmdb.org/t/p/w1280";


const Movie =({title,poster_path,overview,vote_average}) => {
    return <div className="movie">
        <img src={"https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80"} alt={title}/>
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
        <div className="movie-over">
            <h2> overview:{overview}</h2>
        </div>
        </div>
};

export default Movie;
