import React from 'react'
import './NavBar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/closet">Closet</CustomLink>
        <CustomLink to="/color_analysis">Color Analysis</CustomLink>
        <CustomLink to="/generator">Generator</CustomLink>
      </ul>
    </nav>
  )
}

export default NavBar

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
