import { HiArrowDown } from 'react-icons/hi';

const About = () => {
    const handleContactClick = (e) => {
        e.preventDefault();
        // Add pulse animation class to contact sidebar
        const contactSidebar = document.querySelector('.contact-sidebar');
        if (contactSidebar) {
            contactSidebar.classList.add('contact-highlight');
            setTimeout(() => {
                contactSidebar.classList.remove('contact-highlight');
            }, 3000);
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* Top Banner */}
            <div className="absolute top-0 left-0 right-0 py-6 px-4 z-10">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-2xl md:text-3xl font-bold gradient-text">
                        Wahid Mubarrat
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
                        Software Engineer • Problem Solver • Innovation Enthusiast
                    </p>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto w-full z-10 px-4 md:px-8 pt-24 md:pt-20 pb-8">
                <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-6 lg:gap-10 items-center max-w-6xl">
                    {/* Left Side - Round Picture (closer to navbar) */}
                    <div className="flex justify-center md:justify-start fade-in-up">
                        <div className="relative group">
                            <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glass p-2 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
                                <img 
                                    src="Pp/PXL_20251020_100043024.jpg" 
                                    alt="Wahid Mubarrat" 
                                    className="w-full h-full object-cover object-top rounded-full"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity -z-10"></div>
                        </div>
                    </div>

                    {/* Right Side - Comic Speech Bubble */}
                    <div className="fade-in-up relative w-full" style={{ animationDelay: '0.3s' }}>
                        {/* Speech bubble tail - arrow pointing to picture */}
                        <div className="absolute -left-8 top-1/3 hidden lg:block">
                            <svg width="40" height="60" viewBox="0 0 40 60" className="drop-shadow-lg">
                                <path d="M 40 10 Q 20 15, 5 25 Q 0 30, 5 35 Q 20 45, 40 50 Z" fill="rgba(255, 255, 255, 0.7)" />
                            </svg>
                        </div>
                        
                        <div className="glass rounded-3xl rounded-tl-sm p-5 md:p-7 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 animate-float">
                            <div className="space-y-5">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                                        <span className="text-3xl">👋</span> Hey there!
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                        Thanks for visiting my portfolio! I'm <span className="font-semibold gradient-text">Wahid Mubarrat</span>, 
                                        a passionate Software Engineering student who loves building innovative web and desktop applications.
                                    </p>
                                </div>

                                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 dark:bg-blue-900/20 rounded">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        I turn complex problems into simple, beautiful, and intuitive solutions. 
                                        From concept to deployment, I bring ideas to life!
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                                        <span className="text-xl">💼</span> What I specialize in:
                                    </h4>
                                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">▸</span>
                                            <span>Full stack web development</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-500 mt-1">▸</span>
                                            <span>Cross-platform desktop applications</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">▸</span>
                                            <span>RESTful API development</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                                        🚀 Ready to explore my work and skills? Let's dive in!
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    <a
                                        href="#projects"
                                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                                    >
                                        View My Work
                                    </a>
                                    <button
                                        onClick={handleContactClick}
                                        className="px-6 py-3 glass text-gray-700 dark:text-white rounded-full font-medium hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-blue-200 dark:border-gray-600"
                                    >
                                        Get In Touch
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <HiArrowDown className="w-6 h-6 text-blue-600" />
            </div>
        </section>
    );
};

export default About;
