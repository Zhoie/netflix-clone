
import { AiOutlineInfoCircle } from 'react-icons/ai'

interface MovieData {
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    genre: string;
    duration: string;
}


export default function Billboard() {

    const moviesJson: MovieData[] = require('../../data/movies.json')
    // const randomMovie = Math.floor(Math.random() * moviesJson.length)
    const moviesIndex = 3

    return (

        <div className="relative h-[56.25vw] w-full">
            <video className="w-full h-[56.25vw] object-cover brightness-75 transition duration-500 ease-in-out hover:brightness-100"
                autoPlay
                muted
                loop
                poster={moviesJson[moviesIndex].thumbnailUrl}
                src={moviesJson[moviesIndex].videoUrl}>
            </video>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
                    {moviesJson[moviesIndex].title}
                </p>
                <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                    {moviesJson[moviesIndex].description}
                </p>
                <div className="
                flex flex-row 
                items-center 
                mt-3 md:mt-4 
                gap3">
                    <button className="
                    bg-white text-white bg-opacity-30 
                    rounded-md 
                    py-1 md:py-2
                    px-2 md:px-4
                    w-auto
                    text-xs lg:text-lg
                    font-semibold
                    flex
                    flex-row
                    items-center
                    hvoer:bg-opacity-20
                    transition
                     ">
                        <AiOutlineInfoCircle className="mr-1" />
                        More Info
                    </button>
                </div>

            </div>
        </div>
    )

}
