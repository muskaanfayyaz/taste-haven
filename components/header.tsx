"use client"; // Ensure this is a client component

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // State for the dropdown menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="header">
            <h1 className="logo">Taste Heaven</h1>
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'active' : ''}`}></div>
                <div className={`line ${isOpen ? 'active' : ''}`}></div>
                <div className={`line ${isOpen ? 'active' : ''}`}></div>
            </div>

            <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link href="/" className="header-link">Home</Link>
                <Link href="/starter" className="header-link">Starters</Link>
                <Link href="/maincourse" className="header-link">Main Course</Link>
                <Link href="/drinks" className="header-link">Drinks</Link>
                <Link href="/contactus" className="header-link">Contact Us</Link>
            </nav>
        </div>
    );
}
