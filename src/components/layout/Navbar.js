import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark p-1 mb-5">
            <Link to="/" className="navbar-brand heading h1 mx-auto">Newsly</Link>
        </nav>
    )
}

export default Navbar;
