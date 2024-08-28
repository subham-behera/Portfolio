import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="w-screen bg-gray-100 shadow-md">
            <div className="flex items-center justify-between px-12 py-4 max-w-screen-xl mx-auto">
                <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-blue-500 px-3 py-1 border rounded-lg bg-gray-100">S</span>
                    <span className="text-xl font-semibold">Subham</span>
                </div>
                <div className="hidden md:flex md:space-x-8">
                    <Link to="/" className="font-medium hover:text-blue-600">Home</Link>
                    <Link to="/projects" className="font-medium hover:text-blue-600">Projects</Link>
                    <Link to="/about" className="font-medium hover:text-blue-600">About Me</Link>
                    <a href="https://dev.to/subham_behera" className="font-medium hover:text-blue-600">Blog</a>
                </div>
                <div className="hidden md:block">
                    <Link to="/contact" className="px-4 py-2 bg-blue-500 rounded-md text-white shadow-md hover:bg-blue-700 transition duration-300">Hire Me</Link>
                </div>
                <button className="md:hidden text-blue-500" onClick={toggleMenu}>
                    {isOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
                </button>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-100`}>
                <div className="flex flex-col items-center space-y-4 py-4">
                    <Link to="/" className="font-medium hover:text-blue-600">Home</Link>
                    <Link to="/projects" className="font-medium hover:text-blue-600">Projects</Link>
                    <Link to="/about" className="font-medium hover:text-blue-600">About Me</Link>
                    <a href="https://dev.to/subham_behera" className="font-medium hover:text-blue-600">Blog</a>
                    <Link to="/contact" className="px-4 py-2 bg-blue-500 rounded-lg text-white shadow-md hover:shadow-2xl">Hire Me</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
