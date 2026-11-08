import React from 'react'
import MovieCard from "./MovieCard.jsx";

function MovieList() {
  return (
    <section>
      <h2>הסרטים שלנו</h2>
      <MovieCard title='Inception' year={2010} rating={8.8} popular={false} available={true}/>
      <MovieCard title='Toy Story' year={1995} rating={8.3} popular={false} available={true}/>
      <MovieCard title="Up" year={2009} rating={8.2} popular={false} available={false}/>
      <MovieCard title="Parasite" year={2019} rating={8.5} popular={false} available={true}/>
    </section>
  );
}

export default MovieList;