const Navbar = () => {
    const navLinks = [
        { name: 'About', href: '#hero' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

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
        <nav className="fixed left-0 top-0 h-screen flex items-center z-50">
            <div className="flex flex-col gap-8 pl-8">
                {navLinks.map((link) => {
                    // Special handling for Contact link
                    if (link.name === 'Contact') {
                        return (
                            <button
                                key={link.name}
                                onClick={handleContactClick}
                                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-lg hover:scale-110 origin-left group relative text-left"
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
                            className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-lg hover:scale-110 origin-left group relative"
                        >
                            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3 transition-all duration-300"></span>
                            {link.name}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
