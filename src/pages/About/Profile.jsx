import { useEffect } from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaCode, FaCloud, FaTools, FaChartLine, FaFileDownload } from "react-icons/fa";

function Profile() {
    useEffect(() => {
        document.title = "About Me | Subham Behera";
        window.scrollTo(0, 0);
    }, []);

    const skillsData = [
        {
            category: "Frontend Stack",
            icon: <FaCode className="text-blue-600" />,
            skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3", "Responsive UI/UX"]
        },
        {
            category: "Backend & Database",
            icon: <FaTools className="text-indigo-600" />,
            skills: ["Java Spring Boot", "MySQL", "RESTful APIs", "Relational Databases", "JSON / XML"]
        },
        {
            category: "Cloud & Infrastructure",
            icon: <FaCloud className="text-blue-500" />,
            skills: ["Microsoft Azure", "Azure VNets", "Azure Load Balancers", "Cloud DBs"]
        },
        {
            category: "DevOps & Monitoring",
            icon: <FaChartLine className="text-indigo-500" />,
            skills: ["Jenkins CI/CD", "Docker", "Kubernetes", "Terraform", "Prometheus", "Grafana"]
        }
    ];

    return (
        <div className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-[#fafafa]">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">About Me</h1>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    My background, experience, and the technical toolkit I use to solve engineering problems.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Side: Quick Facts Card */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm sticky top-24">
                        <div className="relative group overflow-hidden rounded-xl h-64 bg-slate-50 mb-6">
                            <img
                                src="personal.jpg"
                                alt="Subham Behera"
                                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60";
                                }}
                            />
                        </div>
                        
                        <h2 className="text-2xl font-bold text-slate-800">Subham Behera</h2>
                        <p className="text-sm font-semibold text-blue-600 mt-1">Full Stack & DevOps Engineer</p>
                        
                        <div className="mt-6 space-y-4 border-t border-slate-100 pt-6 text-sm text-slate-600">
                            <div className="flex items-center gap-x-3">
                                <FaGraduationCap className="text-slate-400 text-lg flex-shrink-0" />
                                <span>B.Tech Graduate, Silicon University</span>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <FaMapMarkerAlt className="text-slate-400 text-lg flex-shrink-0" />
                                <span>Odisha, India</span>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <FaEnvelope className="text-slate-400 text-lg flex-shrink-0" />
                                <a href="mailto:subham.behera.dev@gmail.com" className="hover:text-blue-600 transition-colors">
                                    subhambehera5547@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="/files/resume.pdf"
                                download
                                className="flex items-center justify-center gap-x-2 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium shadow-md hover:shadow-lg rounded-xl transition duration-300"
                            >
                                <FaFileDownload />
                                <span>Download PDF Resume</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Professional Bio & Timeline */}
                <div className="w-full lg:w-2/3 flex flex-col gap-y-10">
                    {/* Bio Paragraphs */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-50">Professional Summary</h3>
                        <div className="space-y-4 text-sm text-slate-600 leading-relaxed text-justify">
                            <p>
                                My journey in software development began with a deep curiosity about how technology can solve complex problems. Early on, I immersed myself in learning various programming languages and frameworks, which laid the groundwork for my proficiency in both front-end and back-end development. Over the years, I've worked on diverse projects, from building dynamic web applications to implementing secure cloud infrastructures.
                            </p>
                            <p>
                                As a passionate and driven software developer, I thrive on creating innovative solutions that bridge the gap between technology and real-world needs. With a strong foundation in full-stack development, I excel in working with cutting-edge technologies like React, Tailwind CSS, Java Spring Boot, and MySQL. My cloud experience extends to designing and deploying secure architectures on Azure, managing complex virtual networks (VNets), routing rules, and load balancers.
                            </p>
                            <p>
                                In addition to my development skills, I am deeply invested in DevOps practices, ensuring seamless integration and deployment processes through Jenkins, Docker, Kubernetes, and Terraform. I am also proficient in setting up comprehensive monitoring and alerting systems using Grafana and Prometheus, making sure that applications remain highly available and performant in production.
                            </p>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-50">Technical Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skillsData.map((section, idx) => (
                                <div key={idx} className="p-4 bg-slate-50/50 border border-slate-100 rounded-xl">
                                    <div className="flex items-center gap-x-2.5 mb-3">
                                        <span className="p-2 bg-white rounded-lg shadow-sm">
                                            {section.icon}
                                        </span>
                                        <h4 className="font-bold text-slate-800 text-sm">{section.category}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {section.skills.map((skill, sIdx) => (
                                            <span 
                                                key={sIdx} 
                                                className="px-2.5 py-1 text-xs bg-white text-slate-600 rounded-lg border border-slate-150 font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline / Education */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-50">Education & Involvement</h3>
                        
                        <div className="relative border-l-2 border-slate-100 ml-3 space-y-8 pb-4">
                            {/* Education Item */}
                            <div className="relative pl-8">
                                <div className="absolute -left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white"></div>
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">2022 - 2026</span>
                                <h4 className="text-lg font-bold text-slate-800 mt-1">Bachelor of Technology in Computer Science</h4>
                                <p className="text-sm font-medium text-slate-500">Silicon University</p>
                                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                                    Focused on Core Computer Science principles including Data Structures, Algorithms, Database Management Systems, Software Engineering, and Operating Systems.
                                </p>
                            </div>

                            {/* Club / Extracurricular Item */}
                            <div className="relative pl-8">
                                <div className="absolute -left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-600 border-2 border-white"></div>
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Member</span>
                                <h4 className="text-lg font-bold text-slate-800 mt-1">Coding Club Member & Tech Lead</h4>
                                <p className="text-sm font-medium text-slate-500">Silicon University Tech Club</p>
                                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                                    Contributed to hands-on workshops and mentoring sessions on Full-Stack Development and DevOps tools, fostering a collaborative learning environment and encouraging peers to build deployable systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
