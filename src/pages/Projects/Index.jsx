import { useState, useEffect } from "react";
import Card from "../../components/Card";
import allProjects from "../../data/projects.json";

function Index() {
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        document.title = "Projects | Subham Behera";
        window.scrollTo(0, 0);
    }, []);

    const projects = allProjects;

    const filteredProjects = filter === "all" 
        ? projects 
        : projects.filter(p => p.category === filter);

    const filterButtonClass = (cat) => 
        `px-5 py-2 text-sm font-medium rounded-xl transition duration-300 ${
            filter === cat 
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/10" 
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
        }`;

    return (
        <div className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto min-h-[80vh] bg-[#fafafa]">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Project Showcases</h1>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    A list of web development and data science applications I have designed, built, and deployed.
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                <button onClick={() => setFilter("all")} className={filterButtonClass("all")}>
                    All Projects
                </button>
                <button onClick={() => setFilter("fullstack")} className={filterButtonClass("fullstack")}>
                    Full Stack
                </button>
                <button onClick={() => setFilter("datascience")} className={filterButtonClass("datascience")}>
                    Data Science & ML
                </button>
            </div>

            {/* Grid */}
            <div className="flex flex-wrap justify-center gap-8 animate-fade-in-up">
                {filteredProjects.map((project, idx) => (
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

            {/* GitHub Callout */}
            <div className="text-center mt-16 pt-8 border-t border-slate-200/60 max-w-md mx-auto">
                <p className="text-slate-500 text-sm mb-4">Want to see more of my code exploration and scripts?</p>
                <a 
                    href="https://github.com/subham-behera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition duration-300 shadow-md"
                >
                    Visit My GitHub Profile
                </a>
            </div>
        </div>
    );
}

export default Index;
