const Languages = () => {
    const programmingLanguages = [
        { name: 'JavaScript', level: 'Advanced', color: 'from-yellow-400 to-yellow-600' },
        { name: 'Python', level: 'Intermediate', color: 'from-blue-400 to-blue-600' },
        { name: 'Java', level: 'Intermediate', color: 'from-red-400 to-red-600' },
        { name: 'C++', level: 'Basic', color: 'from-purple-400 to-purple-600' },
        { name: 'TypeScript', level: 'Intermediate', color: 'from-blue-500 to-blue-700' },
        { name: 'SQL', level: 'Intermediate', color: 'from-cyan-400 to-cyan-600' },
    ];

    const spokenLanguages = [
        { name: 'Bengali', level: 'Native', flag: '🇧🇩' },
        { name: 'English', level: 'Fluent', flag: '🇬🇧' },
        { name: 'Hindi', level: 'Conversational', flag: '🇮🇳' },
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case 'Advanced':
            case 'Native':
            case 'Fluent':
                return 'text-green-400 bg-green-400/10';
            case 'Intermediate':
            case 'Conversational':
                return 'text-yellow-400 bg-yellow-400/10';
            case 'Basic':
                return 'text-orange-400 bg-orange-400/10';
            default:
                return 'text-gray-400 bg-gray-400/10';
        }
    };

    return (
        <section id="languages" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">Languages</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Programming Languages */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                            <span>💻</span> Programming Languages
                        </h3>
                        <div className="grid gap-4">
                            {programmingLanguages.map((lang, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-xl p-4 flex justify-between items-center group hover:bg-white/90 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${lang.color}`}></div>
                                        <span className="text-gray-800 font-medium group-hover:text-emerald-600 transition-colors">
                                            {lang.name}
                                        </span>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(lang.level)}`}>
                                        {lang.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Spoken Languages */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                            <span>🗣️</span> Spoken Languages
                        </h3>
                        <div className="grid gap-4">
                            {spokenLanguages.map((lang, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-xl p-6 flex justify-between items-center group hover:bg-white/90 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-3xl">{lang.flag}</span>
                                        <span className="text-gray-800 font-medium text-lg group-hover:text-emerald-600 transition-colors">
                                            {lang.name}
                                        </span>
                                    </div>
                                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${getLevelColor(lang.level)}`}>
                                        {lang.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Languages;
