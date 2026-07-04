import { Link } from "react-router-dom";
import { FaCode, FaCloud, FaTools, FaChartLine, FaArrowRight } from "react-icons/fa";
import Card from "../../components/Card";
import Landing from "./Landing";
import allProjects from "../../data/projects.json";

function Home() {
    // Spotlight Skills Categories
    const skillSpotlights = [
        {
            icon: <FaCode className="text-blue-600 text-2xl" />,
            title: "Full-Stack Dev",
            desc: "Building dynamic interfaces and solid backend systems using React, Java Spring Boot, and MySQL database."
        },
        {
            icon: <FaCloud className="text-indigo-600 text-2xl" />,
            title: "Cloud Services",
            desc: "Architecting resource deployments on Microsoft Azure, configuring VNets, load balancers, and structured storage."
        },
        {
            icon: <FaTools className="text-blue-500 text-2xl" />,
            title: "DevOps & CI/CD",
            desc: "Implementing automated build pipelines and container orchestration with Jenkins, Docker, Kubernetes, and Terraform."
        },
        {
            icon: <FaChartLine className="text-indigo-500 text-2xl" />,
            title: "Monitoring & Reliability",
            desc: "Setting up real-time application health metrics and dashboards using Prometheus, Grafana, and alerting hooks."
        }
    ];

    const featuredProjects = allProjects.filter(p => p.featured);

    return (
        <div className="bg-[#fafafa]">
            {/* Hero Section */}
            <Landing />

            {/* Core Competencies Spotlight */}
            <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-slate-100">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Core Technical Focus</h2>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                        A quick overview of my primary fields of expertise. I bridge the gap between building software and shipping it reliably.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillSpotlights.map((skill, idx) => (
                        <div key={idx} className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-4">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{skill.title}</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Highlighted Projects */}
            <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-slate-100">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Featured Projects</h2>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                        Handpicked applications showcasing full-stack design and utility implementations.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {featuredProjects.map((project, idx) => (
                        <Card
                            key={idx}
                            title={project.title}
                            desc={project.desc}
                            image={project.image}
                            github={project.github}
                            live={project.live}
                            tags={project.tags}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link 
                        to="/projects"
                        className="inline-flex items-center gap-x-2 px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm shadow-sm rounded-xl transition duration-300 transform hover:-translate-y-0.5"
                    >
                        <span>View All Projects</span>
                        <FaArrowRight className="text-slate-400 text-xs" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;