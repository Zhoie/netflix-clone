import { resourceUsage } from "process";
import { useRouter } from "next/router";

interface AccountMenuProps {
    visible: boolean;
}

export default function AccountMenu({ visible }: AccountMenuProps) {
    const router = useRouter();
    if (!visible) {
        return null;
    } else {
        return (
            <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 boeder-gray-800 flex">
                <div className="flex flex-col gap-4">
                    <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                        <img className="w-8 rounded-md" src="/images/default-blue.png" alt="blue"></img>
                    </div>
                    <hr className="bg-gray-600 border-0 h-px my-4"></hr>
                    <div onClick={()=>{router.push("/")}} className="px-3 text-center text-white text-sm hover:underline">Sign out of netflix</div>
                </div>
            </div>
        )
    }

}