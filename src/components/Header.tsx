import Link from "next/link";

function Header () {
    return (
    <div className="w-full h-[80px]  flex justify-center items-center border-b-2">
        <div className="w-[80%] lg:w-[80%] h-full  flex justify-between items-center">
            {/*left*/}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold">Exclusive</h1>
            </div>
            {/*right*/}
            <div>
            <ul className="flex gap-x-4  md:gap-x-20  mr-4 text-sm md:text-base  hover:cursor-pointer font-bold text-black ">
            <li className="hover:text-gray-600">
            <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-gray-600">
            <Link href={"about"}>About</Link>
            </li>
            <li className="hover:text-gray-600">
            <Link href={"contact"}>Contact</Link>
            </li>
            </ul>
            </div>
        </div>
    </div>
    )
}
export default Header;