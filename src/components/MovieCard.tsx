
import { BsFillPlayFill} from 'react-icons/bs'

interface MovieCardProps {
    data: Record<string, any>;
    index: number;
    

}

// interface MovieData {
//     title: string;
//     description: string;
//     videoUrl: string;
//     thumbnailUrl: string;
//     genre: string;
//     duration: string;
// }

export default function MovieCard({ data }: MovieCardProps) {

    // const movie ?: MovieData = data
    return (
        <div className="group bg-zinc-900 col-span relative h-[12vw]">
            <img className="
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-md
            group-hover:opacity-90
            sm:group-hover:opacity-0
            w-full
            h-[12vw]
            "
            src={data.thumbnailUrl} alt="Thumbnail" />
            
            <div className="
                opacity-0
                abosolute
                top-0
                transition
                duration-500
                z-10
                invisible
                sm:visible
                
                w-full
                scale-0
                group-hover:scale-100
                group-hover:-translate-y-[24vw]

                group-hover:-translate-x-[0vw]
                group-hover:opacity-100
               
            ">
                <img className="
                cursor-pointer
                object-cover
                transition
                shadow-xl
                rounded-t-md
                w-full
                h-[12vw]
                "
                src={data.thumbnailUrl} alt="thumbnailUrl" />
                <div className="
                z-10
                bg-zinc-800
                lg:p-4
                absolute
                w-full
                transition
                shadow-md
                rounded-b-md
                ">
                    <div className="flex flex-row items-center gap-3">
                        <div className="
                        cursor-pointer
                        w-6
                        h-6
                        lg:w-10
                        lg:h-10
                        bg-white
                        rounded-full
                        flex
                        justify-center
                        items-center
                        transition
                        hover:bg-neutral-900
                        
                        "
                        
                        onClick={() => {}}>
                            <BsFillPlayFill size={30}/>
                        </div>
                    </div>
                    <p className="text-green-400 font-semibold mt-4">
                        New<span className='text-white ml-2'>2023</span>
                    </p>

                    <div className="flex flex-row mt-4 gap-2 items-cener">
                        <p className='text-white text-[10px] lg:text-sm' >{data.duration}</p>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-cener">
                        <p className='text-white text-[10px] lg:text-sm' >{data.genre}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}