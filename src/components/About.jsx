const About = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image placeholder */}
                    <div className="relative group">
                        <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden glass p-2">
                            <div className="w-full h-full bg-gradient-to-br from-emerald-400/40 to-teal-400/40 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">👨‍💻</span>
                            </div>
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity -z-10"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Who am I?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                I am a passionate Software Engineering student with a strong interest in building
                                innovative web and desktop applications. I love turning complex problems into
                                simple, beautiful, and intuitive solutions.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">What I do?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                I specialize in developing modern web applications and desktop software.
                                With experience in various programming languages and frameworks, I can bring
                                ideas to life from concept to deployment.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <div className="glass rounded-xl px-4 py-2 hover:shadow-md transition-all">
                                <span className="text-2xl font-bold gradient-text">2+</span>
                                <p className="text-gray-600 text-sm">Years Experience</p>
                            </div>
                            <div className="glass rounded-xl px-4 py-2 hover:shadow-md transition-all">
                                <span className="text-2xl font-bold gradient-text">10+</span>
                                <p className="text-gray-600 text-sm">Projects Completed</p>
                            </div>
                            <div className="glass rounded-xl px-4 py-2 hover:shadow-md transition-all">
                                <span className="text-2xl font-bold gradient-text">5+</span>
                                <p className="text-gray-600 text-sm">Technologies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
