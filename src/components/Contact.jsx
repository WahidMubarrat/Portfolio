import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaWhatsapp, FaGithub, FaFacebook } from 'react-icons/fa';

const Contact = () => {
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
        <footer id="contact" className="py-12 px-4 border-t border-gray-200">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                
                <div className="flex justify-center gap-6 mb-8 flex-wrap">
                    {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass rounded-full p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                                title={social.name}
                            >
                                <IconComponent 
                                    className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" 
                                    style={{ color: social.color }}
                                />
                            </a>
                        );
                    })}
                </div>

                <p className="text-gray-600 text-center">
                    © 2026 Wahid Mubarrat. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Contact;
