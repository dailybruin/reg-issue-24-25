import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Vine from '../images/vine.png'
import styled from 'styled-components';

export default function NavBar({ offsets }) {
    const navItems = ['Title', 'Letter', 'Interactive', 'News', 'Sports', 'Arts', 'Opinion', 'Quad', 'Multimedia', 'Prime', 'About'];
    const navLinks = ['#title', '#editor-letter', '#interactive', '#news', '#sports', '#arts', '#opinion', '#quad', '#multimedia', '#prime', '#about'];
    const navIds = ['', 'editor-letter', 'interactive', 'news', 'sports', 'arts', 'opinion', 'quad', 'multimedia', 'prime', 'thirty', 'about'];

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

    return (
        <nav className="navbar" id="navbar">
            <div className="nav">
                {navItems.map((item, index) => {

                    /*
                    const shouldDisplayVine = vineSectionIds.includes(navIds[index]);
                    console.log(offsets);
                    console.log('navIds:', navIds);
                    console.log('vineSectionIds:', vineSectionIds);
                    console.log('Current navId:', navIds[index]);
                    console.log('Should display vine:', shouldDisplayVine);
                    */

                    return (
                        <div key={item} className='nav-component'>
                            <button className='nav-button'>
                                {vineSectionIds.includes(navIds[index]) && (
                                    <img src={Vine} className='vine' alt='Vine'/>
                                )}
                                <a href={navLinks[index]} className='nav-link'>{item}</a>
                            </button>
                        </div>
                    )
                })}
            </div>
        </nav>
    );
}

