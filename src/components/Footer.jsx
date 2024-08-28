import { BsTwitterX } from "react-icons/bs";
import { FaDev, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoStackoverflow } from "react-icons/io5";

function Footer() {
    return (
        <div className="flex flex-col px-4 py-6 mt-6 bg-gray-800 text-gray-100 items-center gap-y-6 sm:px-8 sm:py-8 lg:px-16 lg:py-10">
            <div className="w-full max-w-3xl h-0.5 bg-gray-600"></div>
            <span className="text-2xl sm:text-3xl font-semibold">Follow Me</span>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 text-3xl sm:text-4xl lg:text-5xl">
                <a href="https://github.com/subham-behera" className="transition-transform transform hover:scale-110 hover:text-gray-300">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/subham-behera-515310270/" className="transition-transform transform hover:scale-110 hover:text-gray-300">
                    <IoLogoLinkedin />
                </a>
                <a href="https://x.com/subhambehera_" className="transition-transform transform hover:scale-110 hover:text-gray-300">
                    <BsTwitterX />
                </a>
                <a href="https://dev.to/subham_behera" className="transition-transform transform hover:scale-110 hover:text-gray-300">
                    <FaDev />
                </a>
                <a href="https://stackoverflow.com/users/25821272/subham-behera?tab=profile" className="transition-transform transform hover:scale-110 hover:text-gray-300">
                    <IoLogoStackoverflow />
                </a>
            </div>
            <span className="text-sm sm:text-base mt-4 sm:mt-6">
                &copy; 2024 Personal Portfolio Website
            </span>
        </div>
    );
}

export default Footer;
