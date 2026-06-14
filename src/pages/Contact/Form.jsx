import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        document.title = "Contact | Subham Behera";
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate an API network request call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            
            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        }, 1200);
    };

    return (
        <div className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto min-h-[80vh] bg-[#fafafa]">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Get In Touch</h1>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    Have an opportunity, a project proposal, or just want to connect? Drop a message below!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Column: Direct Info Cards */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-800 mb-6">Connect Directly</h2>
                        
                        <div className="space-y-6 text-sm text-slate-600">
                            {/* Email Card */}
                            <div className="flex gap-x-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope size={16} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-700">Email Address</h4>
                                    <a href="mailto:subham.behera.dev@gmail.com" className="text-slate-500 hover:text-blue-600 transition-colors">
                                        subham.behera.dev@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="flex gap-x-4">
                                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt size={16} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-700">Location</h4>
                                    <span className="text-slate-500">Odisha, India</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Panel */}
                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Follow My Profiles</h4>
                            <div className="flex gap-3">
                                <a 
                                    href="https://www.linkedin.com/in/subham-behera-515310270/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-50 border border-slate-100 hover:border-blue-200 text-slate-500 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={18} />
                                </a>
                                <a 
                                    href="https://github.com/subham-behera" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-50 border border-slate-100 hover:border-slate-300 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition duration-300"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={18} />
                                </a>
                                <a 
                                    href="https://x.com/subhambehera_" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-50 border border-slate-100 hover:border-sky-200 text-slate-500 hover:text-sky-500 hover:bg-sky-50/50 rounded-xl transition duration-300"
                                    aria-label="Twitter X"
                                >
                                    <FaTwitter size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:col-span-7">
                    <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-800 mb-6">Send Me a Message</h2>
                        
                        {submitted && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm font-medium rounded-xl animate-fade-in-up">
                                Thank you for your message! I will get back to you as soon as possible.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-slate-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="mt-1.5 block w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl shadow-none text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition duration-200"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="yourname@domain.com"
                                    className="mt-1.5 block w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl shadow-none text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition duration-200"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-700">Message Description</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Write details of your proposal or query here..."
                                    className="mt-1.5 block w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl shadow-none text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition duration-200 resize-none"
                                />
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center gap-x-2 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg rounded-xl transition duration-300 disabled:opacity-50"
                            >
                                <FaPaperPlane size={14} className={isSubmitting ? "animate-bounce" : ""} />
                                <span>{isSubmitting ? "Sending Query..." : "Send Message"}</span>
                            </button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Form;
