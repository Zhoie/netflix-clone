import MovieCard from "./MovieCard";

interface MovieData {

    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    genre: string;
    duration: string;
}


export default function MovieList() {
    const moviesJson: MovieData[] = require('../../data/movies.json')


    return (
        <div className="px-4 md:px12 mt-4 space-y-8">
            <div>
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                    Trending Now
                </p>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {moviesJson.map((movie,index) => (
                    <div>
                       
                        <MovieCard key = {index.toString()} index={index} data={movie} />
                    </div>
                ))}
            </div>

        </div>
    )

}

