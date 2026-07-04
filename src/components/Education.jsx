import { useRef, useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight, HiOutlineArrowRight } from 'react-icons/hi';

const Education = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const educationData = [
        {
            degree: 'Bachelor of Science in Software Engineering',
            institution: 'Islamic University of Technology (IUT)',
            period: '2023 - Present',
            description:
                'Currently pursuing BSc in Software Engineering, focusing on software development, algorithms, and system design.',
            status: 'ongoing',
            icon: '🎓',
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Dhaka City College',
            period: '2020 - 2022',
            description:
                'Completed higher secondary education with a focus on Science.',
            status: 'completed',
            icon: '📘',
        },
        {
            degree: 'Secondary School Certificate (SSC)',
            institution: 'Government Laboratory High School,Dhaka',
            period: '2010 - 2020',
            description:
                'Completed secondary education with a focus on Science.',
            status: 'completed',
            icon: '📗',
        },
    ];

    const checkScrollability = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
    };

    useEffect(() => {
        checkScrollability();
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', checkScrollability);
            window.addEventListener('resize', checkScrollability);
        }
        return () => {
            if (el) el.removeEventListener('scroll', checkScrollability);
            window.removeEventListener('resize', checkScrollability);
        };
    }, []);

    const scroll = (direction) => {
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = el.querySelector('.edu-card')?.offsetWidth || 340;
        el.scrollBy({
            left: direction === 'left' ? -cardWidth - 40 : cardWidth + 40,
            behavior: 'smooth',
        });
    };

    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-left">
                    My <span className="gradient-text">Education</span>
                </h2>

                {/* Timeline wrapper */}
                <div className="edu-timeline-wrapper">
                    {/* Left fade + arrow */}
                    <div
                        className={`edu-fade edu-fade--left ${canScrollLeft ? 'visible' : ''}`}
                    >
                        <button
                            onClick={() => scroll('left')}
                            className="edu-arrow"
                            aria-label="Scroll left"
                        >
                            <HiChevronLeft className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Scrollable track */}
                    <div className="edu-scroll-track" ref={scrollRef}>
                        {/* Connecting line */}
                        <div className="edu-timeline-line" />

                        {[...educationData].reverse().map((item, index, arr) => {
                            const parts = item.period.split('-');
                            const startYear = parts[0]?.trim();
                            const endYear = parts[1]?.trim();

                            return (
                                <div
                                    key={index}
                                    className={`edu-card glass rounded-2xl ${item.status === 'ongoing' ? 'edu-card--current' : ''}`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    {/* Start and End Years on Timeline */}
                                    <div className="edu-year edu-year-start">{startYear}</div>
                                    <div className={`edu-dot ${item.status === 'ongoing' ? 'edu-dot--active' : ''}`} />
                                    <div className="edu-year edu-year-end">{endYear}</div>

                                    {/* Connector Arrow */}
                                    {index < arr.length - 1 && (
                                        <div className="edu-arrow-connector">
                                            <HiOutlineArrowRight className="w-5 h-5" />
                                        </div>
                                    )}

                                    {/* Card content */}
                                    <div className="edu-card-inner">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                                                    item.status === 'ongoing'
                                                        ? 'bg-blue-500/20 dark:bg-blue-500/30 text-blue-700 dark:text-blue-300'
                                                        : 'bg-purple-500/20 dark:bg-purple-500/30 text-purple-700 dark:text-purple-300'
                                                }`}
                                            >
                                                {item.status === 'ongoing'
                                                    ? '🎓 Ongoing'
                                                    : '✓ Completed'}
                                            </span>
                                        </div>

                                        <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 block">
                                            {item.period}
                                        </span>

                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 leading-snug">
                                            {item.degree}
                                        </h3>

                                        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
                                            {item.institution}
                                        </p>

                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right fade + arrow */}
                    <div
                        className={`edu-fade edu-fade--right ${canScrollRight ? 'visible' : ''}`}
                    >
                        <button
                            onClick={() => scroll('right')}
                            className="edu-arrow"
                            aria-label="Scroll right"
                        >
                            <HiChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
