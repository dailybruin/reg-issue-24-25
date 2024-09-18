import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Vine from '../images/vine.png'
import hamburgerButton from '../images/buttons/hamburger.svg';
import cancelButton from '../images/buttons/cancel.svg';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import DBHeader from './Header';

export default function NavBar({ offsets }) {
    //const navItems = ['Letter', 'Interactive', 'News', 'Sports', 'Arts', 'Opinion', 'Quad', 'Multimedia', 'Prime', 'About'];
    //const navLinks = ['#editor-letter', '#interactive', '#news', '#sports', '#arts', '#opinion', '#quad', '#multimedia', '#prime', '#about'];
    //const navIds = ['editor-letter', 'interactive', 'news', 'sports', 'arts', 'opinion', 'quad', 'multimedia', 'prime', 'about'];
    const navItems = ['Letter', 'Interactive', 'News', 'Sports', 'Arts', 'Opinion', 'Quad', 'Multimedia', 'Prime'];
    const navLinks = ['#editor-letter', '#interactive', '#news', '#sports', '#arts', '#opinion', '#quad', '#multimedia', '#prime'];
    const navIds = ['editor-letter', 'interactive', 'news', 'sports', 'arts', 'opinion', 'quad', 'multimedia', 'prime'];

    // State and Effects to handle NavBar scrolling
    const [vineSectionIds, setVineSectionIds] = useState([]);
    const [currOffset, setCurrOffset] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            console.log(offsets);
            setCurrOffset(window.scrollY);

            const temp = [];
            for (const [key, value] of Object.entries(offsets)) {
                if (value <= currOffset) {
                    temp.push(key);
                }
            }
            setVineSectionIds(temp);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    // Toggle mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 456px)' });

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar" id="navbar">
            {isMobile ? <DBHeader>Daily Bruin</DBHeader> : null}
            <div className={`nav ${isMobileMenuOpen ? 'nav-mobile-open' : ''}`}>
                {navItems.map((item, index) => {
                    return (
                        <div key={item} className='nav-component'>
                            <button className='nav-button'>
                                {/*TODO: resolve the issue of vine render toggling on/off for toggleMobileMenu on desktop*/}
                                {!isMobileMenuOpen && vineSectionIds.includes(navIds[index]) && (
                                    <div>
                                        <img src={Vine} className='vine' alt='Vine'/>
                                        <button className='vine-button'>
                                            <a href={navLinks[index]} className='nav-link' onClick={toggleMobileMenu} />
                                        </button>
                                    </div>
                                )}
                                <a href={navLinks[index]} className='nav-link' onClick={toggleMobileMenu}>{item}</a>
                            </button>
                        </div>
                    )
                })}
            </div>
            <button className="hamburger" onClick={toggleMobileMenu}>
                <img src={hamburgerButton} alt="Open Menu" />
            </button>
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <button className="close" onClick={toggleMobileMenu}>
                        <img src={cancelButton} alt="Close Menu" />
                    </button>
                </div>
            )}
        </nav>
    );
}

