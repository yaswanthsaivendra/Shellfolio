import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
    const location = useLocation();
    const [hoveredItem, setHoveredItem] = useState(null);

    const navItems = [
        { 
            path: '/', 
            label: 'Home', 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        { 
            path: '/about', 
            label: 'About', 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        { 
            path: '/projects', 
            label: 'Projects', 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        { 
            path: '/contact', 
            label: 'Contact', 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <>
            {/* Desktop Navigation - Top Bar */}
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-black-100/80 backdrop-blur-md border-b border-primary/10"
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
                    <motion.div 
                        className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                    >
                        Yaswanth
                    </motion.div>
                    
                    <div className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="relative"
                                onMouseEnter={() => setHoveredItem(item.path)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <motion.div
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                        location.pathname === item.path
                                            ? 'text-primary bg-primary/10'
                                            : 'text-white-600 hover:text-primary'
                                    }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                </motion.div>
                                {(hoveredItem === item.path || location.pathname === item.path) && (
                                    <motion.div
                                        layoutId="desktop-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navigation - Bottom Tab Bar */}
            <motion.nav 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black-100/90 backdrop-blur-xl border-t border-primary/10"
            >
                <div className="flex items-center justify-around px-4 py-3 safe-area-bottom">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="relative flex flex-col items-center gap-1 p-2 min-w-[60px]"
                        >
                            <motion.div
                                className={`flex items-center justify-center w-8 h-8 transition-all duration-300 ${
                                    location.pathname === item.path
                                        ? 'text-primary scale-110'
                                        : 'text-white-500'
                                }`}
                                whileTap={{ scale: 0.85 }}
                                animate={{
                                    scale: location.pathname === item.path ? 1.1 : 1,
                                    y: location.pathname === item.path ? -2 : 0
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                {item.icon}
                            </motion.div>
                            
                            <motion.span
                                className={`text-xs font-medium transition-all duration-300 ${
                                    location.pathname === item.path
                                        ? 'text-primary scale-105'
                                        : 'text-white-500'
                                }`}
                                animate={{
                                    scale: location.pathname === item.path ? 1.05 : 1,
                                    fontWeight: location.pathname === item.path ? 600 : 500
                                }}
                            >
                                {item.label}
                            </motion.span>
                            
                            {/* Active indicator */}
                            {location.pathname === item.path && (
                                <motion.div
                                    layoutId="mobile-indicator"
                                    className="absolute -top-1 left-1/2 w-1 h-1 bg-primary rounded-full"
                                    style={{ x: '-50%' }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            )}
                        </Link>
                    ))}
                </div>
            </motion.nav>
        </>
    );
};

export default Navigation; 