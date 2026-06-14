import { FiDownload } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center py-12 md:py-20 px-6 md:px-12 lg:px-24 bg-light-pattern overflow-hidden">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 z-10">
                {/* Text Content */}
                <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left gap-y-6 animate-fade-in-up">
                    <div className="inline-flex items-center gap-x-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                        <span>Available for Opportunities</span>
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Subham Behera</span>
                    </h1>

                    <div className="h-8 md:h-10">
                        <TypeAnimation
                            sequence={[
                                'A Full Stack Developer',
                                2000, 
                                'A DevOps & Cloud Engineer',
                                2000,
                                'A Machine Learning Enthusiast',
                                2000, 
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            className="text-lg md:text-2xl text-slate-600 font-medium"
                        />
                    </div>

                    <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
                        Graduated from Silicon University. Specialized in crafting robust Full-Stack applications and managing cloud deployments (Azure/DevOps). Passionate about writing clean, modular code and optimizing operational efficiency.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
                        <a
                            href="/files/resume.pdf"  
                            download 
                            className="flex items-center justify-center gap-x-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 w-full sm:w-auto shadow-md hover:shadow-lg rounded-xl font-medium transition duration-300 transform hover:-translate-y-0.5"
                        >
                            <FiDownload className="text-lg" />
                            <span>Download CV</span>
                        </a>
                        <Link
                            to="/projects"
                            className="flex items-center justify-center gap-x-2 text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-6 py-3 w-full sm:w-auto shadow-sm rounded-xl font-medium transition duration-300 transform hover:-translate-y-0.5"
                        >
                            <span>View Projects</span>
                            <FaArrowRight className="text-sm text-slate-400" />
                        </Link>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="w-full md:w-2/5 flex justify-center md:justify-end animate-fade-in-up">
                    <div className="relative">
                        {/* Decorative Background Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full filter blur-xl opacity-70 -z-10 translate-x-4 translate-y-4"></div>
                        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-50 to-purple-100 rounded-full filter blur-xl opacity-60 -z-10 -translate-x-4 -translate-y-4"></div>
                        
                        {/* Image Frame */}
                        <div className="p-3 bg-white rounded-full border border-slate-100/50 shadow-2xl">
                            <img 
                                src="personal.jpg" 
                                alt="Subham Behera"
                                className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-slate-50 shadow-inner"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
