interface NavbarItemProps {
    label: string;
}

export default function NavbarItem({ label }: NavbarItemProps) {
    return (
        <div className="text-white hover:text-gray-300 cursor-pointer ">
            {label}
        </div>
    )
}