import { useState, useMemo } from 'react';
import projectData from '../../data/project_list';
import ProjectCard from './projectsCard';

const filters = [
    { value: 'all', label: 'All' },
    { value: 'ml', label: 'Machine Learning' },
    { value: 'web', label: 'Web Development' },
    { value: 'other', label: 'Other' },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    // Memoize the filtering logic for performance
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'all') return projectData;
        return projectData.filter((project) => project.category === activeFilter);
    }, [activeFilter]);

    return (
        <section id="projects" className="py-20 md:py-28 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="flex flex-wrap justify-center mb-10 gap-2">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`px-5 py-2 rounded-full font-medium transition-colors ${
                                activeFilter === filter.value
                                    ? 'bg-blue-600 text-white shadow'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}