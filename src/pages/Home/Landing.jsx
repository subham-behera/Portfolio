import { FiDownload } from "react-icons/fi";

function Landing() {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center py-8 px-6 md:px-16 w-full h-screen md:h-[80vh] lg:h-[80vh] bg-gray-100">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-y-4 mb-8 md:mb-0">
                <span className="text-4xl md:text-5xl text-gray-800 font-bold">Hi, I am Subham</span>
                <span className="text-xl md:text-2xl text-gray-600 font-semibold">A Full Stack Developer and ML Enthusiast</span>
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
                src="https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/427442420_811786320615665_8755374969883142632_n.jpg?ccb=11-4&oh=01_Q5AaIH_mGSN-zA-MZmwhm9BqXztPV7U91l4Xdfs-SvASNN4c&oe=66DC1ED4&_nc_sid=5e03e0&_nc_cat=102" 
                alt="Profile"
                className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
            />
        </div>
    );
}

export default Landing;
