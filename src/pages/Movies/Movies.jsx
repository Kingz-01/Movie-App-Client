import React from "react";
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useCustomParams } from "../../hooks/useCustomParams";
import SearchResults from "../Home/SearchResults";
import Loading from "../../utils/Loading";

const Movies = () => {
  
  
  const { data, error, loading, updateUI } = useFetch("/api/movie/movies");
  const { userInput, filteredMovie} = useCustomParams(data)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>{error}</p>;
  }

  
  if (userInput) {
    return (
      <SearchResults userInput={userInput} filteredMovie={filteredMovie} />
    );
  }
  return (
    <div className="grid gap-3 mx-4 text-start">
      {data.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} updateUI={updateUI} />;
      })}
    </div>
  );
};

export default Movies;