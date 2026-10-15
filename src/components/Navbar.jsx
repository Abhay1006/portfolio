import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderIcon from "@mui/icons-material/Reorder"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import { useColorMode } from "../helpers/theme"
function Navbar() {
  const [expandNavbar, setExpandNavbar]= useState(false);

  const location=useLocation();
  const { mode, toggleColorMode } = useColorMode();
  
  useEffect(()=>{
    setExpandNavbar(false);
  },[location]);
  return (
    <div className='navbar' id={expandNavbar ? "open":"close"}>
      <button
        className='themeToggle'
        onClick={toggleColorMode}
        aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
      <div className='toggleButton'>
      <button 
      onClick={()=> {
        setExpandNavbar((prev)=>!prev);
      }}>
      <ReorderIcon />
      </button>
      </div>
      <div className='links'>
      <Link to="/"> Home </Link>
      <Link to="/projects"> Projects </Link>
      <Link to="/experience"> Experience </Link>
      <a href="https://blog.oniichad.com" target="_blank" rel="noopener noreferrer"> Blog </a>
      <Link to="/contact"> Contact </Link>
      </div>
    </div>
  )
}

export default Navbar
