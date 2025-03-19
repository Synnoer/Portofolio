import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-white shadow-xl">
                            <Image
                                src="/Images/profile.png"
                                alt="Profile Picture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Frontend Developer</h3>
                        <p className="text-gray-600 mb-6">
                            Im a passionate frontend developer with a focus on creating intuitive and responsive web applications.
                            With experience in modern frameworks like React and Next.js, I enjoy bringing designs to life and solving
                            complex UI challenges.
                        </p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <p className="font-medium text-gray-800">Name:</p>
                                <p className="text-gray-600">Dimas Arya Nurhakim</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Email:</p>
                                <p className="text-gray-600">dimas.yans338@gmail.com</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Location:</p>
                                <p className="text-gray-600">Bandung, Indonesia</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Available:</p>
                                <p className="text-gray-600">Freelance / Part-time</p>
                            </div>
                        </div>

                        {/* Download Resume Button */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md inline-block"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
