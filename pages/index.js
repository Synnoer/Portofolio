import Head from 'next/head';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
    
    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Synnoer | Portfolio</title>
                <meta name="description" content="Professional portfolio" />
                <link rel="icon" href="/logo.ico" />
            </Head>

            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}