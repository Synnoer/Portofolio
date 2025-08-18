import { skills } from "../../data/personal_info";
import Image from 'next/image';

export default function Skills() {
    return (
        <section id="skills" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
                        From data processing and model development to deployment, here are
                        the key technologies I use to build and maintain machine learning
                        systems.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto space-y-10">
                    {skills.map((skillCategory) => (
                        <div key={skillCategory.category}>
                            <h3 className="text-xl font-bold text-gray-700 mb-5 text-center md:text-left">
                                {skillCategory.category}
                            </h3>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                {skillCategory.items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors"
                                    >
                                        <Image
                                            src={skill.icon}
                                            alt={`${skill.name} icon`}
                                            width={24} // Set a consistent width
                                            height={24} // Set a consistent height
                                        />
                                        <span className="text-gray-800 font-medium">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
