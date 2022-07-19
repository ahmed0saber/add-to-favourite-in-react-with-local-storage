import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <h1>Movie App</h1>
            <div className='nav-links'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/favourite">Favourite</NavLink>
            </div>
            <Outlet/>
        </nav>
    )
}
