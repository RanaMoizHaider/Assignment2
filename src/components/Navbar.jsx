import React from "react";

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light shadow-sm"
            id="mainNav"
        >
            <div className="container px-5">
                <a className="navbar-brand fw-bold" href="/">SP19-BSE-089</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    Menu
                    <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li className="nav-item">
                            <a className="nav-link me-lg-3" href="/login">Login</a>
                        </li>
                    </ul>
                    <a className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" href="/signup">
                        <span className="d-flex align-items-center">
                            <span className="small">Sign Up</span>
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;