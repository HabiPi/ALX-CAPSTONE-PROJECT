import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
const LinkClass = "justify-center p-10 hover:underline"

return (
  <nav className="navbar-expand-lg text-white text-end">
    <div>
      
          <Link to="/" className={LinkClass}>Home</Link>
       
          <Link to="/about" className={LinkClass}>About</Link>
       
          <Link to="/contact" className={LinkClass}>Contact</Link>
       
    </div>

  </nav>
  );
}
export default Navbar;
