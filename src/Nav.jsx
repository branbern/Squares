import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';

const Nav = () => {


    return (
        <div className='nav-wrapper'>
            <nav className="navbar navbar-expand-lg navbar-dark nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className='nav-link active'><Link to="/">Dash</Link></li>
                        <li className='nav-link'><Link to="/edit">Edit</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
            
    )
}

export default Nav;
