import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Menubar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex items-center justify-between bg-[#212529] px-5 py-2 text-white">
            <div>
                <Logo />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
                <ul className="flex flex-row items-center justify-center gap-5">
                    <li><Link className="font-medium hover:text-gray-300 transition" to="/">Home</Link></li>
                    <li><Link className="font-medium hover:text-gray-300 transition" to="/series">Series</Link></li>
                    <li><Link className="font-medium hover:text-gray-300 transition" to="/movies">Movies</Link></li>
                    <li><Link className="font-medium hover:text-gray-300 transition" to="/mylist">My List</Link></li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Right Icons */}
            <div className="hidden md:flex gap-6 items-center">
                <Link className="flex items-center justify-center font-medium hover:text-gray-300 transition" to="/search">
                    <Search />
                </Link>
                {isLogin ? <Link className="flex items-center justify-center font-medium hover:text-gray-300 transition" to="/profile">
                    <User />
                </Link> : <button onClick={() => window.location.href = '/auth'}
                    className="flex items-center justify-center px-6 py-2 rounded text-[#1c1c1b] bg-[#3295ffff] font-bold hover:opacity-90 transition">
                    Login
                </button>}
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-12 left-0 w-full bg-black md:hidden">
                    <ul className="flex flex-col gap-4 p-5">
                        <li><Link className="font-medium hover:text-gray-300 transition" to="/">Home</Link></li>
                        <li><Link className="font-medium hover:text-gray-300 transition" to="/series">Series</Link></li>
                        <li><Link className="font-medium hover:text-gray-300 transition" to="/movies">Movies</Link></li>
                        <li><Link className="font-medium hover:text-gray-300 transition" to="/mylist">My List</Link></li>
                        <li><Link className="font-medium hover:text-gray-300 transition" to="/search">Search</Link></li>
                        <li>{isLogin ? <Link className="font-medium hover:text-gray-300 transition" to="/profile">Profile</Link>
                            : <Link className="font-medium hover:text-gray-300 transition" to="/login">Login</Link>}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Menubar;