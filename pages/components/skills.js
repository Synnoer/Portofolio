export default function Skills() {
    const skills = [
        { name: 'Python', percentage: 85 },
        { name: 'PHP', percentage: 90 },
        { name: 'Java', percentage: 85 },
        { name: 'JavaScript', percentage: 70 },
        { name: 'React', percentage: 70 },
        { name: 'Next.js', percentage: 70 },
        { name: 'Tailwind CSS', percentage: 85 },
        { name: 'MySQL', percentage: 90 },
        { name: 'PostgreSQL', percentage: 85 },
        { name: 'Git', percentage: 80 }
    ];

    return (
        <section id="skills" className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Ive worked with a variety of technologies in the web development world.
                        Here are my top skills and proficiency levels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-gray-800 font-medium">{skill.name}</span>
                                <span className="text-gray-600">{skill.percentage}%</span>
                            </div>
                            <div
                                className="w-full bg-gray-200 rounded-full h-2.5"
                                role="progressbar"
                                aria-valuenow={skill.percentage}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                aria-label={`${skill.name} proficiency: ${skill.percentage}%`}
                            >
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
