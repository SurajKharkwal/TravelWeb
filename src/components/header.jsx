import React,{useEffect} from "react";
import { Link } from "react-router-dom";

const Header = () => {
        useEffect(() => {
            const menu = document.querySelector('#menu-btn');
            const navbar = document.querySelector('.header .navbar');
    
            if (menu && navbar) {
                menu.onclick = () => {
                    menu.classList.toggle('fa-times');
                    navbar.classList.toggle('active');
                };
    
                window.onscroll = () => {
                    menu.classList.remove('fa-times');
                    navbar.classList.remove('active');
                };
            };
        }, []);
  return (
    <section className="header">
      <Link to="/Home" className="logo">
        travel.
      </Link>
      <nav className="navbar">
        <Link to="/Home">home</Link>
        <Link to="/About">about</Link>
        <Link to="/Package">package</Link>
        <Link to="/Book">book</Link>
      </nav>
      <div id="menu-btn" className="fas fa-bars"></div>
    </section>
  );
};

export default Header;
