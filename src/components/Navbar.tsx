import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs"
import { useCallback, useEffect, useState } from "react"

import NavbarItem from "./NavbarItem"
import MobileMenu from "./MobileMenu"
import AccountMenu from "./AccountMenu"


const TOP_OFFSET = 66;


export default function Navbar() {

    const ItemLabels = ["Home", "Series", "Films", "New & Popular", "My List", "Browse by languages"]
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showAccountMenu, setAccountMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);
    const toggleAccountMenu = useCallback(() => {
        setAccountMenu((current) => !current);
    }, []);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <nav className=" w-full fixed z-40">
            <div className={`
                px-4
                md:px-16
                py-6
                flex
                flex.row
                items-center
                transition
                duration-500
                ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
                `}
            >
                <img className="h-7 lg:h-7 hover:scale-125 transition duration-300" src="/images/logo.png" alt="logo" />
                <div className="
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex
                ">

                    {ItemLabels.map((item, index) => {
                        return (
                            <NavbarItem key={index} label={item} />
                        )
                    })}

                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`text-white transition duration-200 ${showMobileMenu ? 'rotate-180' : ''}`} />
                    <MobileMenu visible={showMobileMenu} />

                </div>

                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer"><BsSearch /></div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer"><BsBell /></div>
                    <div onClick={toggleAccountMenu} className=" flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/default-blue.png" alt="profile" />
                        </div>
                        <BsChevronDown className={`text-white transition duration-200 ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}