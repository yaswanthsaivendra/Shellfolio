import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Background from '../components/Background';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    // EmailJS configuration
    const EMAIL_SERVICE_ID = 'service_ydxchqa'; // You need to create this
    const EMAIL_TEMPLATE_ID = 'template_tivr5zm'; // Basic template
    const EMAIL_PUBLIC_KEY = 'AIbseSQ1FCCoptda1'; // Your provided public key

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            // Check if service ID is configured
            if (EMAIL_SERVICE_ID === 'YOUR_SERVICE_ID') {
                throw new Error('Please configure your EmailJS Service ID first. Check console for setup instructions.');
            }

            // Send email using EmailJS with a simple template structure
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email, 
                message: formData.message,
                reply_to: formData.email,
                // Adding more fields that work with basic templates
                user_name: formData.name,
                user_email: formData.email,
                user_message: formData.message,
            };

            console.log('Attempting to send email with params:', templateParams);

            await emailjs.send(
                EMAIL_SERVICE_ID,
                EMAIL_TEMPLATE_ID,
                templateParams,
                EMAIL_PUBLIC_KEY
            );
            
            console.log('Email sent successfully!');
            
            // Show success message
            setSubmitStatus('success');
            
            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            
            // Auto-hide success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
            
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
            
            // Log setup instructions if service not configured
            if (EMAIL_SERVICE_ID === 'YOUR_SERVICE_ID') {
                console.log(`
🔧 EMAILJS SETUP REQUIRED:

1. Go to https://www.emailjs.com/
2. Sign up/Login with your account
3. Go to "Email Services" and click "Add New Service"
4. Choose your email provider (Gmail, Outlook, etc.) and connect it
5. Note down your SERVICE ID (something like 'service_xxxxxxx')
6. Create a .env.local file in your project root with:
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
7. Restart your dev server

Your Public Key is already set: ${EMAIL_PUBLIC_KEY}
                `);
            }
            
            // Auto-hide error message after 8 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 8000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/yaswanthsaivendra',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
            )
        },
        {
            name: 'X (Twitter)',
            url: 'https://x.com/Yash0x01',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/yaswanthvendra/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <div className="min-h-screen w-full relative overflow-hidden pt-20 md:pt-24 pb-20 md:pb-12">
            <Background variant="contact" />
            
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-generalsans mb-4 tracking-tight">
                        Let&apos;s Connect
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Ready to bring your ideas to life? Let&apos;s discuss how we can work together to create something amazing.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
                    {/* Contact Form */}
                    <motion.div variants={itemVariants} className="lg:col-span-3">
                        <div className="ring-1 ring-white/10 hover:ring-white/20 bg-gradient-to-br from-black-200/90 to-black-300/90 backdrop-blur-2xl rounded-3xl p-8 md:p-10 transition-all duration-700 hover:shadow-2xl">
                            <div className="mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                                    Send a Message
                                </h2>
                                <p className="text-white/60 text-sm font-light">
                                    Fill out the form below and I&apos;ll get back to you within 24 hours
                                </p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Success/Error Messages */}
                                {submitStatus && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-4 rounded-xl border ${
                                            submitStatus === 'success'
                                                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                                                : 'bg-red-500/10 border-red-500/30 text-red-400'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {submitStatus === 'success' ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            )}
                                            <span className="font-medium">
                                                {submitStatus === 'success'
                                                    ? 'Message sent successfully! I\'ll get back to you soon.'
                                                    : 'Failed to send message. Please check your EmailJS configuration or contact me directly.'}
                                            </span>
                                        </div>
                                    </motion.div>
                                )}

                                <div>
                                    <label className="block text-white/80 text-sm font-medium mb-3">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-4 bg-black-300/60 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-white/80 text-sm font-medium mb-3">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-4 bg-black-300/60 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-white/80 text-sm font-medium mb-3">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        disabled={isSubmitting}
                                        rows={6}
                                        className="w-full px-4 py-4 bg-black-300/60 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Tell me about your project, timeline, and budget..."
                                        required
                                    />
                                </div>
                                
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                                        isSubmitting
                                            ? 'bg-gray-600 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-primary via-accent to-secondary hover:from-secondary hover:via-primary hover:to-tertiary hover:shadow-xl hover:shadow-primary/25'
                                    } text-white`}
                                    whileHover={isSubmitting ? {} : { scale: 1.02, y: -2 }}
                                    whileTap={isSubmitting ? {} : { scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info & Social Links */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                        {/* Quick Contact Info */}
                        <div className="ring-1 ring-white/10 hover:ring-white/20 bg-gradient-to-br from-black-200/90 to-black-300/90 backdrop-blur-2xl rounded-2xl p-6 md:p-8 transition-all duration-700 hover:shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-6 tracking-wide">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <motion.a
                                    href="mailto:yaswanthsaivendra@gmail.com"
                                    className="flex items-center gap-4 group cursor-pointer"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center transition-all duration-300">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm font-light">Email me</p>
                                        <p className="text-white font-medium group-hover:text-primary transition-colors">
                                            yaswanthsaivendra@gmail.com
                                        </p>
                                    </div>
                                </motion.a>
                                
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm font-light">Location</p>
                                        <p className="text-white font-medium">Bangalore, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="ring-1 ring-white/10 hover:ring-white/20 bg-gradient-to-br from-black-200/90 to-black-300/90 backdrop-blur-2xl rounded-2xl p-6 md:p-8 transition-all duration-700 hover:shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-6 tracking-wide">
                                Follow Me
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-black-300/40 border border-white/5 hover:border-white/20 hover:bg-primary/5 transition-all duration-300"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.4 }}
                                    >
                                        <div className="text-white/60 group-hover:text-primary transition-colors duration-300">
                                            {link.icon}
                                        </div>
                                        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                                            {link.name}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Status */}
                        <motion.div 
                            className="ring-1 ring-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-2xl rounded-2xl p-6 md:p-8"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <motion.div 
                                    className="w-3 h-3 bg-green-400 rounded-full"
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [1, 0.7, 1]
                                    }}
                                    transition={{ 
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <h3 className="text-lg font-bold text-white tracking-wide">
                                    Available for Projects
                                </h3>
                            </div>
                            <p className="text-white/80 text-sm font-light leading-relaxed">
                                I&apos;m currently accepting new freelance projects and collaboration opportunities. 
                                Let&apos;s create something extraordinary together!
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact; 