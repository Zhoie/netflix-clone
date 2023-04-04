
import React from "react";


interface MobileMenuProps {
    visible: boolean;
}

export default function MobileMenu({ visible }: MobileMenuProps) {

    const Items = ['Home', 'Series', 'Films', 'New & Popular', 'My List', 'Browse by Languages']

    if (!visible) {
        return null;
    } else {
        return (

            <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 boeder-gray-800 flex">
                <div className="flex flex-col gap-4">

                    {Items.map((item, index) => {
                        return (
                            <div key={index} className="px-3 group/item flex flex-row gap-3 items-center w-full">
                                <div className="px-3 text-center text-white hover:underline ">{item}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

