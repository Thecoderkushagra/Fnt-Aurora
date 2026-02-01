import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Menubar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-between px-5 py-2 text-white">
            <div>
                <Logo />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
                <ul className="flex flex-row items-center justify-center gap-5">
                    <li><Link className="font-medium hover:text-gray-300 transition" to="/">Home</Link></li>
                    <li><Link className="font-medium hover:text-gray-300 transition" to="/">Series</Link></li>
                    <li><Link className="font-medium hover:text-gray-300 transition" to="/">Movies</Link></li>
                    <li><Link className="font-medium hover:text-gray-300 transition" to="/">My List</Link></li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Right Icons */}
            <div className="hidden md:flex gap-6">
                <Link className="font-medium hover:text-gray-300 transition" to="/search">
                    <Search />
                </Link>
                <Link className="font-medium hover:text-gray-300 transition" to="/">
                    <User />
                </Link>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-12 left-0 w-full bg-black md:hidden">
                    <ul className="flex flex-col gap-4 p-5">
                        <li><Link className="font-medium hover:text-gray-300 transition" to="/">Home</Link></li>
                        <li><Link className="font-medium hover:text-gray-300 transition" to="/">Series</Link></li>
                        <li><Link className="font-medium hover:text-gray-300 transition" to="/">Movies</Link></li>
                        <li><Link className="font-medium hover:text-gray-300 transition" to="/">My List</Link></li>
                        <li><Link className="font-medium hover:text-gray-300 transition" to="/search">Search</Link></li>
                        <li><Link className="font-medium hover:text-gray-300 transition" to="/">Profile</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Menubar;