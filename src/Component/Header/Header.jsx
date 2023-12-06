import { NavLink } from "react-router-dom";
import "./header.css"
const Header = () => {
    
    return (
        <div className="list-none flex justify-center bg-blue-400 text-white text-lg font-bold">
                <nav>
                    <NavLink className='mr-5' to='/'>Home</NavLink>
                    <NavLink to='/posts'>About Us</NavLink>
                </nav>
        </div>
    );
};

export default Header;