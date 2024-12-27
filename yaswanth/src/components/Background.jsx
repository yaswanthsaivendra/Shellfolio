const Background = ({ variant = 'hero' }) => {
    if (variant === 'projects') {
        return (
            <>
                {/* Projects background - Modern, dynamic tech-inspired design */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Main gradients */}
                    <div className="absolute w-[1000px] h-[1000px] bg-gradient-to-r from-blue-900/20 via-purple-800/20 to-blue-900/20 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    
                    {/* Animated accent elements */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-[20%] left-[30%] w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-[80px] animate-pulse"></div>
                        <div className="absolute bottom-[30%] right-[20%] w-[250px] h-[250px] bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-700"></div>
                    </div>

                    {/* Subtle grid overlay */}
                    <div className="absolute inset-0 opacity-[0.15]" style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}></div>
                </div>
            </>
        )
    }

    if (variant === 'about') {
        return (
            <>
                {/* About background - Blending with hero and projects sections */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Main gradient that blends with hero section */}
                    <div className="absolute inset-0">
                        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl top-0 left-0 animate-pulse"></div>
                        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl bottom-0 right-0 animate-pulse delay-1000"></div>
                    </div>
                    
                    {/* Floating elements that match projects style */}
                    <div className="absolute w-full h-full">
                        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-gradient-to-r from-secondary/10 to-tertiary/10 rounded-full blur-[90px] animate-float"></div>
                        <div className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[90px] animate-float-delay"></div>
                    </div>

                    {/* Unified dot pattern that matches both sections */}
                    <div className="absolute inset-0 opacity-[0.1]" style={{
                        backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 1.5px, transparent 1.5px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
            </>
        )
    }

    // Default hero background
    return (
        <>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -top-48 -left-24 animate-pulse"></div>
                <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-secondary/20 to-tertiary/20 blur-3xl bottom-0 right-0 animate-pulse delay-1000"></div>
                <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
            </div>

            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>
        </>
    )
}

export default Background 