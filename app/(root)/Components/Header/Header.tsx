"use client"
import React, { useState, useEffect } from 'react';
import LanguageDropdown from './Language';
import HeaderLinks from './HeaderLinks';



const links = [
  {
    id: 1,
    text: "HOME",
    active: "active",
    rout: "/home"
  },
  {
    id: 2,
    text: "BRANCHEZ",
    active: "active",
    rout: "/"
  },
  {
    id: 3,
    text: "ABOUT",
    active: "active",
    rout: "/about"
  },
  {
    id: 4,
    text: "MENU",
    active: "active",
    rout: "/menu"
  },
  {
    id: 5,
    text: "INVESETORS",
    active: "active",
    rout: "/invetors"
  },
  {
    id: 6,
    text: "EVENTS & NEWS",
    active: "active",
    rout: "/"
  },
  {
    id: 7,
    text: "CONTACT",
    active: "active",
    rout: "/"
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);     
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`container mx-auto fixed top-0 left-0 right-0 ${scrolled ? 'bg-[#18181730]' : ''}`} style={{ zIndex: "1000" }}>
      <nav className={`fixed w-full z-20 top-0 py-1 transform transition-all duration-1000 start-0 ${scrolled ? 'bg-[#000000c9]' : ''}  bg-opacity-100`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-16" alt="Flowbite Logo" />
          </a>
          <LanguageDropdown />
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {links.map((link) => (
                <HeaderLinks  key={link.id} page={link.rout} text={link.text} active={link.active} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Header;
