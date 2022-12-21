import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to={"/"} className="nav-link px-2 text-secondary">Home</Link></li>
              <li><Link to={"/album"} className="nav-link px-2 text-white">Album</Link></li>
              <li><Link to={"/lottery"} className="nav-link px-2 text-white">Xổ số</Link></li>
              <li><Link to={"/contact"} className="nav-link px-2 text-white">ContactApp</Link></li>
              <li><Link to={"/blog"} className="nav-link px-2 text-white">Blog</Link></li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;