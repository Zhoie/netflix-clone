
import { useState, useEffect } from "react";

interface MovieData {
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    genre: string;
    duration: string;
    // ...
  }

  export default function useBillboard() {

    const [movies, setMovies] = useState<MovieData[]>([]);

    useEffect(() => {
      const fetchMovies = async () => {
        const response = await fetch("./data/movies.json");
        const data = await response.json();
        setMovies(data);
      };
      fetchMovies();
    }, []);

    return movies;

  }


