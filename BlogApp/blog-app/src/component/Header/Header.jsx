import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        <header className="header">
        <nav className="nav">
            <div className="logo"><Link to={"/"} title="Kong.dev (Alt + H)">Kong.dev</Link>
                <div className="logo-switches"><button id="theme-toggle"  title="(Alt + T)"><svg id="moon"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                        </svg><svg id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentcolor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg></button></div>
            </div>
            <ul id="menu">
                <li><NavLink to={"/search"} title="Search (Alt + /)"><span>Search</span></NavLink></li>
                <li><NavLink to={"/tags"} title="Tags"><span>Tags</span></NavLink></li>
                <li><a href="#" title="Projects"><span>Projects</span></a></li>
                <li><a href="#" title="Slides"><span>Slides</span></a></li>
                <li><a href="#" title="About"><span>About</span></a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header