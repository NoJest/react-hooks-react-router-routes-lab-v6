import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
    <NavLink></NavLink>
    <NavLink>Directors</NavLink>
    <NavLink>Actors</NavLink>
    </nav>
    );
};

export default NavBar;
