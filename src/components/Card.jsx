import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Card({ title, desc, image, github, live, tags = [] }) {
    return (
        <div className="flex flex-col w-full sm:max-w-[340px] bg-white rounded-xl border border-slate-100 shadow-sm hover-lift hover:shadow-md transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative group overflow-hidden h-[180px] bg-slate-50">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60";
                    }}
                />
            </div>
            
            {/* Card Body */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Tech Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {tags.map((tag, idx) => (
                            <span 
                                key={idx} 
                                className="px-2 py-0.5 text-xs font-semibold rounded bg-blue-50 text-blue-600 tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                
                <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-4">{desc}</p>
                
                {/* Card Actions */}
                <div className="flex flex-row items-center justify-between mt-auto pt-4 border-t border-slate-50">
                    {github && github !== "#" ? (
                        <a 
                            href={github} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-x-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                            aria-label={`View GitHub source code for ${title}`}
                        >
                            <FaGithub size={18} />
                            <span>Source Code</span>
                        </a>
                    ) : (
                        <span className="text-xs text-slate-400 font-medium italic">Code private</span>
                    )}

                    {live && live !== "#" ? (
                        <a 
                            href={live} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-x-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                            aria-label={`View live demo for ${title}`}
                        >
                            <span>Live Demo</span>
                            <FaExternalLinkAlt size={12} className="ml-0.5" />
                        </a>
                    ) : (
                        <span className="text-xs text-slate-400 font-medium italic">Internal project</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
