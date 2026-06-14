import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinkClass = ({ isActive }) => 
        `relative py-1 font-medium text-sm transition-colors duration-200 hover:text-blue-600 ${
            isActive ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : 'text-slate-600'
        }`;

    return (
        <nav className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
            <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
                <Link to="/" className="flex items-center space-x-3 group">
                    <span className="text-xl font-black text-white px-3 py-1 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md group-hover:scale-105 transition-transform duration-200">
                        S
                    </span>
                    <span className="text-lg font-bold tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                        Subham Behera
                    </span>
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
                    <NavLink to="/about" className={navLinkClass}>About Me</NavLink>
                    <a 
                        href="https://dev.to/subham_behera" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-medium text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                    >
                        Blog
                    </a>
                </div>

                <div className="hidden md:block">
                    <Link 
                        to="/contact" 
                        className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm shadow-md hover:shadow-lg rounded-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 transform hover:-translate-y-0.5"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-slate-700 hover:text-blue-600 focus:outline-none transition-colors" 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 border-t border-slate-100 bg-white/95' : 'max-h-0'}`}>
                <div className="flex flex-col items-center space-y-4 py-6">
                    <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/projects" className={navLinkClass} onClick={toggleMenu}>Projects</NavLink>
                    <NavLink to="/about" className={navLinkClass} onClick={toggleMenu}>About Me</NavLink>
                    <a 
                        href="https://dev.to/subham_behera" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-medium text-sm text-slate-600 hover:text-blue-600"
                        onClick={toggleMenu}
                    >
                        Blog
                    </a>
                    <Link 
                        to="/contact" 
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium text-sm shadow-md"
                        onClick={toggleMenu}
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
