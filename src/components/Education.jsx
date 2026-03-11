import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const Education = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const educationData = [
        {
            degree: 'Bachelor of Science in Software Engineering',
            institution: 'Islamic University of Technology (IUT)',
            period: '2023 - Present',
            description: 'Currently pursuing BScin Software Engineering, focusing on software development, algorithms, and system design.',
            status: 'ongoing',
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Dhaka City College',
            period: '2020 - 2022',
            description: 'Completed higher secondary education with a focus on Science.',
            status: 'completed',
        },
        {
            degree: 'Secondary School Certificate (SSC)',
            institution: 'Your School Name',
            period: '2010 - 2020',
            description: 'Completed secondary education with with a focus on Science.',
            status: 'completed',
        },
    ];

    // Filter ongoing and completed education
    const ongoingEducation = educationData.filter(edu => edu.status === 'ongoing');
    const completedEducation = educationData.filter(edu => edu.status === 'completed');

    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-left">
                    My <span className="gradient-text">Education</span>
                </h2>

                {/* Single White Box for All Education */}
                <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    {/* Current Education - Always Visible */}
                    <div className="mb-6">
                        {ongoingEducation.map((item, index) => (
                            <div key={index} className="pb-6 border-b border-gray-200 dark:border-gray-600">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 dark:bg-blue-500/30 text-blue-700 dark:text-blue-300">
                                        🎓 Ongoing
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">{item.period}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {item.degree}
                                </h3>
                                <p className="text-purple-600 dark:text-purple-400 mb-3 font-medium">{item.institution}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Completed Education - Expandable */}
                    <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="space-y-6 pt-2">
                            {completedEducation.map((item, index) => (
                                <div key={index} className={`${index < completedEducation.length - 1 ? 'pb-6 border-b border-gray-200 dark:border-gray-600' : ''}`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 dark:bg-purple-500/30 text-purple-700 dark:text-purple-300">
                                            ✓ Completed
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">{item.period}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {item.degree}
                                    </h3>
                                    <p className="text-purple-600 dark:text-purple-400 mb-3 font-medium">{item.institution}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <div className="flex justify-start mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-2 px-6 py-2 bg-white/50 dark:bg-gray-700/50 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-600/80 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all duration-300"
                        >
                            <span className="font-medium text-sm">
                                {isExpanded ? 'Show Less' : 'View More Education'}
                            </span>
                            <HiChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
