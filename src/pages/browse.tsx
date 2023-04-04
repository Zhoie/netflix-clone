import { useRouter } from "next/router"
import Image from 'next/image'
import ProfileIcon from "@/components/ProfileIcon"


export default function Browse() {

    const router = useRouter()

    function SignOutHandler() {
        router.push('/auth')
    }
    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl  text-white text-center">Who is watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-6">
                    <div onClick={() => { }}>
                        <div className="flex flex-row w-full items-center mx-6">
                            <ProfileIcon src="/images/default-blue.png" alt="blue" />
                            <ProfileIcon src="/images/default-red.png" alt="red" />
                            <ProfileIcon src="/images/default-green.png" alt="green" />
                            <ProfileIcon src="/images/default-slate.png" alt="slate" />
                            <ProfileIcon src="/images/default-red.png" alt="red" />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}