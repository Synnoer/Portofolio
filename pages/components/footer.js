import { socialLinks } from '../../data/personal_info';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-gray-300 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
                    {/* Column 1: Brand Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Synnoer</h2>
                        <p className="text-gray-400">Machine Learning Engineer</p>
                    </div>

                    {/* Column 2: Social Links */}
                    <div className="flex justify-center space-x-4">
                        {socialLinks.map(({ name, href, Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit my ${name} profile`}
                                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                <Image
                                    src={Icon}
                                    alt={`${name} logo`}
                                    width={24}
                                    height={24}
                                />
                            </a>
                        ))}
                    </div>

                    {/* Column 3: Copyright*/}
                    <div className="text-center md:text-right text-gray-400">
                        <p>&copy; {currentYear} Synnoer. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}