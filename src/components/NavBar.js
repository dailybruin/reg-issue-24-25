import React, { useState } from 'react';
import './NavBar.css';
import styled from 'styled-components';

export default function NavBar({ offsets }) {
    const navItems = ['Title', 'Letter', 'Interactive', 'News', 'Sports', 'Arts', 'Opinion', 'Quad', 'Multimedia', 'Prime', 'About'];
    const navLinks = ['#title', '#editor-letter', '#interactive', '#news', '#sports', '#arts', '#opinion', '#quad', '#multimedia', '#prime', '#about'];
    const navIds = ['', 'editor-letter', 'interactive', 'news', 'sports', 'arts', 'opinion', 'quad', 'multimedia', 'prime', 'thirty', 'about'];

    const [vineSectionIds, setVineSectionIds] = useState([]);
    const [currOffset, setCurrOffset] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
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

    return (
        <nav className="navbar" id="navbar">
            <div className="nav">
                {navItems.map((item, index) => {
                    return (
                        <div key={item} className='nav-component'>
                            <button className='nav-button'>
                                {vineSectionIds.includes(navIds[index]) && (
                                    <img src={Vine} className='vine' alt='Vine'/>
                                )}
                                <a href={navLinks[index]} className='nav-link' onClick={toggleMobileMenu}>{item}</a>
                            </button>
                        </div>
                    )
                })}
            </div>
        </nav>
    );
}

