import React from 'react'
import { Link } from 'react-router-dom';


    
    

    const Nav = () => {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">React Tasks</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/counter" className="nav-link btn btn-primary mr-2">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/todo" className="nav-link btn btn-primary mr-2">To Do List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/form" className="nav-link btn btn-primary mr-2">Form Validation</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search" className="nav-link btn btn-primary mr-2">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/mageupload" className="nav-link btn btn-primary mr-2">Image Upload</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/userdetails" className="nav-link btn btn-primary mr-2">User Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/userprofile" className="nav-link btn btn-primary mr-2">User Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        );
    }




export default Nav