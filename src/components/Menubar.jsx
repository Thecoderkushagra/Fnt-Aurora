import { Link } from "react-router-dom";
import Logo from "../assets/Logo"; 
import { Search, User } from "lucide-react"; 

const Menubar = () => {
    return (
        <div className="d-flex align-items-center justify-content-between px-5 py-2 bg-dark text-white">
            <div >
                <Logo />
            </div>
            <div>
                <ul className="navbar-nav ms-auto align-items-center justify-content-center flex-row gap-4">
                    <li className="nav-item">
                        <Link className="nav-link fw-medium" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fw-medium" to="/">Series</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fw-medium" to="/">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fw-medium" to="/">My List</Link>
                    </li>
                </ul>
            </div>
            <div className="d-flex gap-4">
                <Link className="nav-link fw-medium" to="/"><Search /></Link>
                <Link className="nav-link fw-medium"to="/"><User /></Link>
            </div>
        </div>
    )
}
export default Menubar;