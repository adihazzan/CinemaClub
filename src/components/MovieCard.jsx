import React from 'react'

function MovieCard({title,year,rating,available,popular,genre,duration}) {
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <p>שנת יציאה:  {year} </p>
      <p>דירוג: {rating} </p>
      {popular && <p>בחירת הצוות </p>}
      {available && <p>זמין לצפייה </p>}
      <p>ז׳אנר: {genre}</p>
      <p>אורך הסרט: {duration} דקות</p>
    </article>
  )
}

export default MovieCard