import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from './components/navbar';
import Hero from './components/hero';

const About = dynamic(() => import('./components/about'));
const Skills = dynamic(() => import('./components/skills'));
const Projects = dynamic(() => import('./components/projects'));
const Contact = dynamic(() => import('./components/contact'));
const Footer = dynamic(() => import('./components/footer'));

export default function Home() {
    
    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Synnoer | Machine Learning Engineer</title>
                <meta 
                    name="description" 
                    content="The portfolio of Dimas Nurhakim, a software developer based in Bandung, specializing in React, Next.js, and modern web technologies." 
                />
                <link rel="icon" href="Images/logo.ico" />
                <meta property="og:title" content="Synnoer| Machine Learning Engineer" />
                <meta property="og:description" content="Check out my projects and skills." />
                <meta property="og:image" content="Images/portofolio.png" />
                <meta property="og:url" content="https://portofolio-gold-pi.vercel.app/" />
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