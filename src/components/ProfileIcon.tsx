
import { useRouter } from "next/router"

interface ProfileIconProps {
    src: string
    alt: string
}

export default function ProfileIcon({ src, alt }: ProfileIconProps) {

    const router = useRouter()

    return (

        <div onClick={()=>{router.push('/home')}} className="group flex-row w-44 mx-auto">
            <div className="
                w-44
                h-44
                rouded-md
                flex
                items-center
                justify-center
                border-2
                border-transparent
                group-hover:cursor-pointer
                group-hover:border-white
                overflow-hidden
            ">
                <img src={src} alt={alt}></img>

            </div>
        </div>
    )
}