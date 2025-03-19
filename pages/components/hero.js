import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Hero() {
    const [typewriterText, setTypewriterText] = useState('');
    const fullText = "I'm a Full Stack Developer and Machine Learning Engineer";
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTypewriterText((prevText) => prevText + fullText[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Text Section */}
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h2 className="text-xl text-blue-600 font-semibold mb-2">Hello, I'm</h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">Synnoer</h1>
                        <div className="h-8 mb-6">
                            <span className="text-xl md:text-2xl font-medium text-gray-600">{typewriterText}</span>
                            <span className="ml-1 animate-blink">|</span>
                        </div>
                        <p className="text-gray-600 text-lg mb-8 max-w-lg">
                            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                            <Image
                                src="/Images/profile.png"
                                alt="Profile Picture"
                                layout="fill"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
