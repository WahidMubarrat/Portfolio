import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navLinks = [
        { name: 'About', href: '#hero' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleContactClick = (e) => {
        e.preventDefault();
        setIsOpen(false);
        // Add pulse animation class to contact sidebar
        const contactSidebar = document.querySelector('.contact-sidebar');
        if (contactSidebar) {
            contactSidebar.classList.add('contact-highlight');
            setTimeout(() => {
                contactSidebar.classList.remove('contact-highlight');
            }, 3000);
        }
    };

    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-6 left-4 z-[60] p-3 glass rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
                {isOpen ? <HiX className="w-6 h-6 text-gray-700" /> : <HiMenu className="w-6 h-6 text-gray-700" />}
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Sidebar Navigation */}
            <nav className={`fixed left-0 top-0 h-screen flex items-center z-50 transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            }`}>
            <div className="flex flex-col gap-8 pl-8">
                {navLinks.map((link) => {
                    // Special handling for Contact link
                    if (link.name === 'Contact') {
                        return (
                            <button
                                key={link.name}
                                onClick={handleContactClick}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-lg hover:scale-110 origin-left group relative text-left"
                            >
                                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3 transition-all duration-300"></span>
                                {link.name}
                            </button>
                        );
                    }
                    
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleNavClick}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-lg hover:scale-110 origin-left group relative"
                        >
                            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3 transition-all duration-300"></span>
                            {link.name}
                        </a>
                    );
                })}
            </div>
        </nav>
        </>
    );
};

export default Navbar;
