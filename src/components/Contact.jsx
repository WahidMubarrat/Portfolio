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
        <>
            {/* Right sidebar with social icons */}
            <div className="fixed right-0 top-0 h-screen flex items-center z-50">
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
            <footer id="contact" className="py-12 px-4 border-t border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <p className="text-gray-600 text-center">
                        © 2026 Wahid Mubarrat. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Contact;
