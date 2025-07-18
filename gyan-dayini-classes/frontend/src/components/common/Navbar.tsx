import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Gyan Dayini Classes</Link>
            </div>
            <ul className="navbar-menu">
                <li>
                    <Link to="/students">Students</Link>
                </li>
                <li>
                    <Link to="/parents">Parents</Link>
                </li>
                <li>
                    <Link to="/teachers">Teachers</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;