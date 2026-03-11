import { useState } from 'react';
import { 
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, 
    SiMongodb, SiPostgresql, SiMysql, SiOracle, SiTailwindcss, 
    SiGit, SiGithub, SiDocker, SiFastapi, SiFigma,
    SiPython, SiC, SiCplusplus, SiVite, SiNeo4J, SiCreatereactapp, SiAutocad
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';

const Skills = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const technicalSkills = [
        { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS', icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Vite', icon: SiVite, color: '#646CFF' },
        { name: 'Create React App', icon: SiCreatereactapp, color: '#09D3AC' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Oracle', icon: SiOracle, color: '#F80000' },
        { name: 'Neo4j', icon: SiNeo4J, color: '#008CC1' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'AutoCAD', icon: SiAutocad, color: '#E51937' },
    ];

    const programmingLanguages = [
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'C', icon: SiC, color: '#A8B9CC' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ];

    const spokenLanguages = [
        { name: 'Bengali', flag: '🇧🇩', level: 'Native' },
        { name: 'English', flag: '🇬🇧', level: 'Fluent' },
    ];

    const softSkills = [
        { name: 'Communication', icon: '💬', description: 'Clear and effective verbal and written communication' },
        { name: 'Speaking & Presentation', icon: '🎤', description: 'Confident public speaking and engaging presentations' },
        { name: 'Teamwork', icon: '🤝', description: 'Collaborative work with diverse teams' },
        { name: 'Problem Solving', icon: '🧩', description: 'Analytical thinking and creative solutions' },
        { name: 'Time Management', icon: '⏰', description: 'Efficient prioritization and deadline management' },
        { name: 'Adaptability', icon: '🔄', description: 'Quick learning and flexibility in new situations' },
        { name: 'Leadership', icon: '👑', description: 'Guiding and motivating team members' },
    ];

    const whatICanDo = [
        { title: 'Full Stack Development', icon: '🌐', description: 'Building responsive and modern web applications' },
        { title: 'Desktop Applications', icon: '💻', description: 'Creating cross-platform desktop software' },
        { title: 'UI/UX Design', icon: '✨', description: 'Designing intuitive user interfaces' },
        { title: 'API Development', icon: '🔗', description: 'Building RESTful APIs and backend services' },
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-left">
                    My <span className="gradient-text">Skills</span>
                </h2>

                {/* Single White Box for All Skills */}
                <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    {/* What I Can Do - Always Visible */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">What I Can Do</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {whatICanDo.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 text-center group hover:bg-white/80 dark:hover:bg-gray-600/80 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h4 className="text-base font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Skills, Programming Languages, Soft Skills & Spoken Languages - Expandable */}
                    <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        {/* Technical Skills & Tools */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Technical Skills & Tools</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                                {technicalSkills.map((skill, index) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <div key={index} className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 hover:shadow-md hover:bg-white/80 dark:hover:bg-gray-600/80 transition-all duration-300 flex flex-col items-center justify-center group">
                                            <IconComponent 
                                                className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300"
                                                style={{ color: skill.color }}
                                            />
                                            <span className="text-xs text-gray-700 dark:text-gray-300 font-medium text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Programming Languages */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Programming Languages</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                                {programmingLanguages.map((lang, index) => {
                                    const IconComponent = lang.icon;
                                    return (
                                        <div key={index} className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 hover:shadow-md hover:bg-white/80 dark:hover:bg-gray-600/80 transition-all duration-300 flex flex-col items-center justify-center group">
                                            <IconComponent 
                                                className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300"
                                                style={{ color: lang.color }}
                                            />
                                            <span className="text-xs text-gray-700 dark:text-gray-300 font-medium text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {lang.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Soft Skills</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {softSkills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 group hover:bg-white/80 dark:hover:bg-gray-600/80 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">{skill.icon}</span>
                                            <h4 className="text-base font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {skill.name}
                                            </h4>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 text-xs">{skill.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Spoken Languages */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Spoken Languages</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {spokenLanguages.map((lang, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center justify-between group hover:bg-white/80 dark:hover:bg-gray-600/80 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-3xl">{lang.flag}</span>
                                            <span className="text-base font-medium text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {lang.name}
                                            </span>
                                        </div>
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 dark:bg-purple-500/30 text-purple-700 dark:text-purple-300">
                                            {lang.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <div className="flex justify-start mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-2 px-6 py-2 bg-white/50 dark:bg-gray-700/50 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-600/80 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all duration-300"
                        >
                            <span className="font-medium text-sm">
                                {isExpanded ? 'Show Less' : 'View More Skills'}
                            </span>
                            <HiChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
