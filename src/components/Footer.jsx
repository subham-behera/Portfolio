import { BsTwitterX } from "react-icons/bs";
import { FaDev, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoStackoverflow } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 mt-16 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-y-8">
                
                {/* Brand / Logo */}
                <div className="flex flex-col items-center text-center">
                    <span className="text-xl font-bold tracking-tight text-slate-800">
                        Subham Behera
                    </span>
                    <p className="text-sm text-slate-500 mt-1 max-w-sm">
                        Full Stack Developer & DevOps Engineer. Building scalable systems and beautiful user experiences.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
                    <Link to="/about" className="hover:text-blue-600 transition-colors">About Me</Link>
                    <a href="https://dev.to/subham_behera" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Blog</a>
                    <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
                </div>

                {/* Divider Line */}
                <div className="w-full max-w-xl h-[1px] bg-slate-200"></div>

                {/* Social Links */}
                <div className="flex items-center gap-x-6 text-2xl">
                    <a 
                        href="https://github.com/subham-behera" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-900 transition-all duration-200 hover:scale-110"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/subham-behera-515310270/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-600 transition-all duration-200 hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <IoLogoLinkedin />
                    </a>
                    <a 
                        href="https://x.com/subhambehera_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-sky-500 transition-all duration-200 hover:scale-110"
                        aria-label="Twitter X"
                    >
                        <BsTwitterX />
                    </a>
                    <a 
                        href="https://dev.to/subham_behera" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-indigo-600 transition-all duration-200 hover:scale-110"
                        aria-label="Dev.to"
                    >
                        <FaDev />
                    </a>
                    <a 
                        href="https://stackoverflow.com/users/25821272/subham-behera?tab=profile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-orange-500 transition-all duration-200 hover:scale-110"
                        aria-label="Stack Overflow"
                    >
                        <IoLogoStackoverflow />
                    </a>
                </div>

                {/* Copyright */}
                <span className="text-xs text-slate-400">
                    &copy; {currentYear} Subham Behera. All rights reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
