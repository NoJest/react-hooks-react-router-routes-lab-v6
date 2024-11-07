import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Movie() {
    const params = useParams()
    const [movie, setMovie] = useState({})
    const [errors, setErrors] = useState(null)

    async function fetchMovie() {
      try {
          const response = await fetch(`http://localhost:4000/movies/${params.id}`)
          const data = await response.json()
           setMovie(data)
      } catch (caughtError) {
          console.log(caughtError)
         setErrors(caughtError)
      }

  }
  

  useEffect(() => {
    fetchMovie()
  }, [])
  
  if (errors){
      return <div>
          <h2> DONT DO THAT</h2>
          <img src="https://imgs.search.brave.com/YJuWE-ucjGB-EYxqVCZv7OqeRTkJjnSGHV8mwlUeUTo/
          rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzMwNjc3NjkyL3Iv/aWwvODE2Z
          jQwLzQ0/MjI5NTM5NDUvaWxf/NjAweDYwMC40NDIy/OTUzOTQ1X3RuMjUu/anBn"/> 
      </div>
  }
  
  return (
    <>
      <header>
        <MovieCard title= {movie.title}></MovieCard>
      </header>
      <main>
        {movie.title}
        {movie.time}
        {movie.genres}
      </main>
    </>
  );
};

export default Movie;
