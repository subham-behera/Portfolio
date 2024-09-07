import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

function Landing() {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center py-2 px-6 md:px-16 w-full h-screen md:h-[80vh] lg:h-[80vh] bg-gray-100">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-y-4 mb-8 md:mb-0">
                <span className="text-4xl md:text-5xl text-gray-800 font-bold">Hi, I am Subham</span>
                <TypeAnimation
                    sequence={[
                    'A Full Stack Developer',
                    2000, 
                    'A Machine Learning Enthusiast',
                    2000, 
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="text-xl md:text-2xl text-gray-600 font-semibold"
                />
                <a
                    href="/files/resume.pdf"  
                    download 
                    className="flex items-center gap-x-3 text-gray-100 border border-blue-800 bg-blue-500 px-6 py-3 w-fit shadow-lg rounded-lg text-lg md:text-xl hover:bg-blue-700 transition duration-300"
                >
                    <FiDownload className="text-xl" />
                    <span>Download CV</span>
                </a>
            </div>
            <img 
                src="personal.jpg" 
                alt="Profile"
                className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
            />
        </div>
    );
}

export default Landing;
