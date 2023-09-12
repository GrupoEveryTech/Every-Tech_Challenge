import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink as LinkA } from 'react-router-hash-link';
import "./Navbar.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
        <Link to='/' className='logo'>
            <img src='./routes/images/portoLogo.png'/>
        </Link>

        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen);
        }}> 
            <span></span>
            <span></span>
            <span></span>
        </div>

        <ul className={menuOpen ? "open" : ""}></ul>

        <ul>
            <li>
                <LinkA to='/home#chatbot'>Chatbot</LinkA>
            </li>
            <li>
                <LinkA to='/home#ia'>Inteligência Artificial</LinkA>
            </li>
            <li>
                <LinkA to='/home#bd'>Integração com o banco de dados</LinkA>
            </li>
        </ul>
    </nav>
  )
}

