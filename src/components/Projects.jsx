import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
    const [showWebModal, setShowWebModal] = useState(false);
    const [showDesktopModal, setShowDesktopModal] = useState(false);

    const webProjects = [
        {
            title: 'EmerCare',
            description: 'EmerCare is an emergency healthcare coordination web application that helps users quickly find nearby hospitals, blood donors, and ambulance services during critical situations. It combines GPS-based proximity search, real-time service availability, and smart address registration to reduce response time in emergencies. Built as a full-stack system, EmerCare uses geospatial queries to surface the closest help and enables direct contact without requiring user accounts—prioritizing speed, accessibility, and reliability when it matters most.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Geospatial Queries', 'GPS API'],
            githubLink: 'https://github.com/WahidMubarrat/EmerCare', 
            deployedLink: 'https://emer-carefrontend.vercel.app', 
        },
        
    ];

    const desktopProjects = [
        {
            title: 'Token-Table',
            description: 'Token-Table is a Java-based desktop (console) application developed to digitize and streamline the university meal token system, based on a problem statement suggested by our project supervisor. It provides students with a smart-wallet experience to request recharges, purchase meal tokens, and track dining transactions, while enabling admins to verify payments, manage meal menus, and analyze token sales. The system simulates real-world transaction flows using file-based persistence and emphasizes data integrity, role-based operations, and practical software design.It was made as my SPL-1 course project',
            technologies: ['Java', 'Console Application', 'File-Based Persistence', 'OOP', 'Data Structures'],
            githubLink: 'https://github.com/WahidMubarrat/SPL--1',
        },
        {
            title: 'Health Notes Calculator',
            description: 'Health Notes Calculator is a lightweight desktop application designed to help users record daily health notes and compute basic health metrics in one place. It allows tracking essentials such as water intake, blood pressure, pulse, and steps, while also calculating values like BMI and meal calories. The project focuses on simplicity, usability, and practical health data management, serving as a small but functional example of applying software logic to everyday wellness tracking.It was made for my OOP-2 course',
            technologies: ['Java', 'Desktop Application', 'Health Tracking', 'BMI Calculator'],
            githubLink: 'https://github.com/WahidMubarrat/Health-Notes-Calculator', 
        },
        {
            title: 'Gym Management System',
            description: 'Gym Management System is a desktop-based management application built with Java Swing and Oracle Database, designed with a backend-centric architecture. Core business logic—including member validation, billing automation, trainer assignment, and reporting—is implemented directly at the database level using SQL and PL/SQL (procedures, triggers, sequences, and views). The system enables administrators to efficiently manage members, workout plans, payments, and analytics through an intuitive GUI while ensuring data integrity, automation, and scalability.It was made for my DBMS-2 course',
            technologies: ['Java Swing', 'Oracle Database', 'PL/SQL', 'SQL', 'Database Triggers'],
            githubLink: 'https://github.com/WahidMubarrat/GYM-MANAGEMENT-SYSTEM', 
        },
    ];

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                {/* Two Sections Side by Side */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Web Applications */}
                    <div 
                        className="glass rounded-2xl p-12 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                        onClick={() => setShowWebModal(true)}
                    >
                        {/* Animated gradient background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative flex flex-col items-center justify-center h-full min-h-[300px] space-y-6">
                            <span className="text-8xl group-hover:scale-110 transition-transform duration-500">🌐</span>
                            <h3 className="text-4xl font-bold text-center">
                                <span className="gradient-text">Web Applications</span>
                            </h3>
                            <div className="flex items-center gap-2 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <span className="text-lg">Explore Projects</span>
                                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Applications */}
                    <div 
                        className="glass rounded-2xl p-12 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                        onClick={() => setShowDesktopModal(true)}
                    >
                        {/* Animated gradient background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative flex flex-col items-center justify-center h-full min-h-[300px] space-y-6">
                            <span className="text-8xl group-hover:scale-110 transition-transform duration-500">💻</span>
                            <h3 className="text-4xl font-bold text-center">
                                <span className="gradient-text">Desktop Applications</span>
                            </h3>
                            <div className="flex items-center gap-2 text-purple-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <span className="text-lg">Explore Projects</span>
                                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Web Projects Modal */}
            {showWebModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
                    {/* Blur Background */}
                    <div 
                        className="absolute inset-0 bg-black/30 backdrop-blur-md"
                        onClick={() => setShowWebModal(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8 animate-scaleIn border border-blue-200">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowWebModal(false)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            <FaTimes className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* Header */}
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                <span className="text-4xl">🌐</span>
                                Web <span className="gradient-text">Applications</span>
                            </h2>
                        </div>

                        {/* Projects List */}
                        <div className="space-y-8">
                            {webProjects.map((project, index) => (
                                <div key={index} className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 gradient-text">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    {project.technologies && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-600 mb-2">Technologies:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Links */}
                                    <div className="flex gap-4 mt-4">
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                                            >
                                                <FaGithub className="w-5 h-5" />
                                                <span>GitHub</span>
                                            </a>
                                        )}
                                        {project.deployedLink && (
                                            <a
                                                href={project.deployedLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                                            >
                                                <FaExternalLinkAlt className="w-4 h-4" />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Projects Modal */}
            {showDesktopModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
                    {/* Blur Background */}
                    <div 
                        className="absolute inset-0 bg-black/30 backdrop-blur-md"
                        onClick={() => setShowDesktopModal(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8 animate-scaleIn border border-purple-200">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowDesktopModal(false)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            <FaTimes className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* Header */}
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                <span className="text-4xl">💻</span>
                                Desktop <span className="gradient-text">Applications</span>
                            </h2>
                        </div>

                        {/* Projects List */}
                        <div className="space-y-8">
                            {desktopProjects.length === 0 ? (
                                <p className="text-gray-600 text-center py-8">
                                    Coming soon...
                                </p>
                            ) : (
                                desktopProjects.map((project, index) => (
                                    <div key={index} className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4 gradient-text">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        {project.technologies && (
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-gray-600 mb-2">Technologies:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, i) => (
                                                        <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Links */}
                                        <div className="flex gap-4 mt-4">
                                            {project.githubLink && (
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                                                >
                                                    <FaGithub className="w-5 h-5" />
                                                    <span>GitHub</span>
                                                </a>
                                            )}
                                            {project.deployedLink && (
                                                <a
                                                    href={project.deployedLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
                                                >
                                                    <FaExternalLinkAlt className="w-4 h-4" />
                                                    <span>Download</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
