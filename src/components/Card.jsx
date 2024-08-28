// Card.js
import { FaGithub, FaArrowRight } from "react-icons/fa";

function Card({ title, desc, image, github, live }) {
    return (
        <div className="flex flex-col max-w-[300px] w-full h-[400px] rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-[250px] object-cover rounded-t-lg" 
            />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
                <p className="text-sm font-normal text-gray-700 text-center mb-4 flex-grow">{desc}</p>
                <div className="flex flex-row justify-between items-center mt-4">
                    <a 
                        href={github} 
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                        aria-label={`View code for ${title}`}
                    >
                        <FaGithub size={24} />
                    </a>
                    <a 
                        href={live} 
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center"
                        aria-label={`View demo for ${title}`}
                    >
                        Demo <FaArrowRight size={16} className="ml-1" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
