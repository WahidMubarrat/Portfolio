import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaWhatsapp, FaGithub, FaFacebook } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    // ⬇️ UPDATE YOUR LINKS HERE ⬇️
    const socialLinks = [
        { name: 'Email', icon: MdEmail, url: 'mailto:wahidazhar@iut-dhaka.edu', color: '#EA4335' },
        { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/your-profile', color: '#0A66C2' },
        { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/your-number', color: '#25D366' },
        { name: 'GitHub', icon: FaGithub, url: 'https://github.com/WahidMubarrat', color: '#181717' },
        { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com/your-profile', color: '#1877F2' },
    ];
    // ⬆️ UPDATE YOUR LINKS ABOVE ⬆️

    return (
        <>
            {/* Mobile Contact Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed bottom-6 right-4 z-[60] p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
                <HiMail className="w-6 h-6" />
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Right sidebar with social icons */}
            <div className={`fixed right-0 top-0 h-screen flex items-center z-50 contact-sidebar transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
            }`}>
                <div className="flex flex-col gap-6 pr-8">
                    {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full p-3 hover:shadow-lg transition-all duration-300 hover:scale-110 group bg-white/50 backdrop-blur-sm"
                                title={social.name}
                            >
                                <IconComponent 
                                    className="w-6 h-6 transition-all duration-300" 
                                    style={{ color: social.color }}
                                />
                            </a>
                        );
                    })}
                </div>
            </div>
            
            {/* Footer */}
            <footer id="contact" className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    {/* Thank You Message */}
                    <div className="glass rounded-2xl p-8 mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                            Thank You for <span className="gradient-text">Visiting!</span>
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                            I appreciate you taking the time to explore my portfolio. If you'd like to discuss potential opportunities, 
                            collaborate on a project, or just have a chat about technology and innovation, I'd love to hear from you.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 italic">
                            Feel free to reach out through any of the social links <span className="hidden md:inline">on the right sidebar</span><span className="md:hidden">via the contact button</span>. Let's connect! 🚀
                        </p>
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-600 dark:text-gray-400">
                        © 2026 Wahid Mubarrat. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Contact;
