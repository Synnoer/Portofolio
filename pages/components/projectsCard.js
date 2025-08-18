import Image from "next/image";

const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
    </svg>
);

export default function ProjectCard({ project }) {

    if (!project) {
        return null;
    }

    const image = project.image || '/images/default-placeholder.png';
    return (
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg transition-transform duration-300 hover:-translate-y-2 flex flex-col">
            {/* Image */}
            <div className="relative h-48 w-full">
                <Image
                    src={image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>

            {/* Project Details */}
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-100">
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline">
                            <span>Live Demo</span>
                            <ExternalLinkIcon />
                        </a>
                    )}
                    {project.codeLink && (
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:underline">
                            <span>Code</span>
                            <ExternalLinkIcon />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}