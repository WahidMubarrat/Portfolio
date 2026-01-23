import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto w-full z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Picture */}
                    <div className="flex justify-center md:justify-end fade-in-up">
                        <div className="relative group">
                            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden glass p-2 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500">
                                <img 
                                    src="/Pp/PXL_20251020_100043024.jpg" 
                                    alt="Wahid Mubarrat" 
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity -z-10"></div>
                        </div>
                    </div>

                    {/* Right Side - About Box */}
                    <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="glass rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                About <span className="gradient-text">Me</span>
                            </h2>
                            
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        <span className="text-2xl">👋</span> Hi, I'm Wahid Mubarrat
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        I am a passionate Software Engineering student with a strong interest in building
                                        innovative web and desktop applications. I love turning complex problems into
                                        simple, beautiful, and intuitive solutions.
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        <span className="text-xl">💼</span> What I Do
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        I specialize in developing modern web applications and desktop software.
                                        With experience in various programming languages and frameworks, I bring
                                        ideas to life from concept to deployment.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-4">
                                    <a
                                        href="#projects"
                                        className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                                    >
                                        View My Work
                                    </a>
                                    <a
                                        href="#contact"
                                        className="px-6 py-3 glass text-gray-700 rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-emerald-200"
                                    >
                                        Get In Touch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <HiArrowDown className="w-6 h-6 text-emerald-600" />
            </div>
        </section>
    );
};

export default Hero;
