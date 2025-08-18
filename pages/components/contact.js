/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { contactInfo } from '../../data/personal_info';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: ''
    });
    const [status, setStatus] = useState('idle');
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setResponseMessage('');

        try {
            const response = await fetch('https://formspree.io/f/xgvzbegp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setResponseMessage('Message sent successfully! I will get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            setStatus('error');
            setResponseMessage('Something went wrong. Please try again later.');
            console.error('Form submission error:', error);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-28 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 max-w-xl mx-auto mt-4">
                        Feel free to contact me for any work or suggestions. I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {contactInfo.map((info) => (
                            <div key={info.name} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <info.icon className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.name}</h3>
                                <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    {info.value}
                                </a>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                        {/* Form fields remain the same */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                           {/* Name Input */}
                           <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                           {/* Email Input */}
                           <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-6">
                           {/* Subject Input */}
                           <input name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-6">
                           {/* Message Textarea */}
                           <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="5" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            {/* Display Response Message */}
                            {status === 'success' && <p className="text-green-600">{responseMessage}</p>}
                            {status === 'error' && <p className="text-red-600">{responseMessage}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}