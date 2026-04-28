/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { personalInfo } from "../../data/personal_info"

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    {/* Image Section */}
                    <div className="md:w-2/5">
                        <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-white shadow-xl">
                            <Image
                                src="/Images/profile.webp"
                                alt="A professional headshot of Dimas Arya Nurhakim"
                                fill
                                sizes="(max-width: 768px) 16rem, 20rem"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* About Text Section */}
                    <div className="md:w-3/5">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Software Engineer | Machine Learning & Data Infrastructure</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                        I am an AI Software Engineer driven by the thrill of discovering actionable insights hidden within complex data. 
                        With a foundation in full-stack web development and specialized expertise in machine learning, 
                        I focus on building intelligent systems that are not just cutting-edge, but fundamentally stable and practical.
                        My engineering philosophy centers on creating highly usable, resilient infrastructure. 
                        Whether it is engineering microservices to isolate LLM workloads and protect core servers from crashing under heavy traffic, 
                        or systematically dismantling technical debt through rigorous architectural planning, I build AI solutions designed for the real world. 
                        I am currently exploring local LLM deployments and integrated data pipelines, always seeking the next challenge at the intersection of AI and scalable software engineering.
                        </p>

                        {/* Info Grid using Definition List */}
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                            {personalInfo.map((item) => (
                                <div key={item.term}>
                                    <dt className="font-bold text-gray-800">{item.term}:</dt>
                                    <dd className="text-gray-600">
                                        {item.href ? (
                                            <a href={item.href} className="hover:underline text-blue-600 transition-colors">
                                                {item.description}
                                            </a>
                                        ) : (
                                            item.description
                                        )}
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        <a
                            href="https://drive.usercontent.google.com/u/0/uc?id=1Bfc2wqi6HALBN8yfTLeurNTQMGSnOnk5&export=download"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md inline-block"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}