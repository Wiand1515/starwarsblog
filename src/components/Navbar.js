import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand mb-1 h1">
            <img
              src="/img/starwarslogo.png"
              width="70"
              height="auto"
              className="d-inline-block align-top"
              alt=""
            />


          </span>
        <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/planets" className="nav-link active">Planets</Link>
          </li>
          <li className="nav-item">
            <Link to="/starships" className="nav-link active">Starships</Link>
          </li>
          <li className="nav-item">
            <Link to="/fav" className="nav-link active">Favorites</Link>
          </li>      
        </ul>
        </div>

      </nav>
    </>
  );
}

export default Navbar;
