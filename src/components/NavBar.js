import React, { useState } from 'react';
import './NavBar.css';
import styled from 'styled-components';

export default function NavBar() {
    const navItems = ['Title', 'Letter', 'Interactive', 'News', 'Sports', 'Arts', 'Opinion', 'Quad', 'Multimedia', 'Prime', 'About'];
    const navLinks = ['#title', '#editor-letter', '#interactive', '#news', '#sports', '#arts', '#opinion', '#quad', '#multimedia', '#prime', '#about'];

    return (
        <nav className="navbar" id="navbar">
            <div className="nav-div">
                {navItems.map((item, index) =>
                    <div key={item} className='nav-component' id=''>
                        <button className='nav-button'>
                            <a href={navLinks[index]} className='nav-link'>{item}</a>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

