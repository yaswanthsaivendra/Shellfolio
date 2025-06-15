const Background = ({ variant = 'hero' }) => {
    if (variant === 'projects') {
        return (
            <>
                {/* Projects background - Modern dark theme with blue accents */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Main dark gradients */}
                    <div className="absolute w-[1000px] h-[1000px] bg-gradient-to-r from-black-200/40 via-black-300/40 to-black-200/40 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    
                    {/* Animated blue accent elements */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-[20%] left-[30%] w-[200px] h-[200px] bg-primary/10 rounded-full blur-[80px] animate-pulse"></div>
                        <div className="absolute bottom-[30%] right-[20%] w-[250px] h-[250px] bg-primary/8 rounded-full blur-[80px] animate-pulse delay-700"></div>
                    </div>

                    {/* Subtle grid overlay */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{
                        backgroundImage: `linear-gradient(to right, rgba(74,144,226,0.1) 1px, transparent 1px),
                                        linear-gradient(to bottom, rgba(74,144,226,0.1) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}></div>
                </div>
            </>
        )
    }

    if (variant === 'about') {
        return (
            <>
                {/* About background - Dark theme with blue gradients */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Main gradient that blends with hero section */}
                    <div className="absolute inset-0">
                        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/8 to-primary/5 blur-3xl top-0 left-0 animate-pulse"></div>
                        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-primary/6 to-primary/4 blur-3xl bottom-0 right-0 animate-pulse delay-1000"></div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute w-full h-full">
                        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-gradient-to-r from-primary/5 to-primary/3 rounded-full blur-[90px] animate-float"></div>
                        <div className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] bg-gradient-to-r from-primary/6 to-primary/4 rounded-full blur-[90px] animate-float-delay"></div>
                    </div>

                    {/* Subtle dot pattern */}
                    <div className="absolute inset-0 opacity-[0.04]" style={{
                        backgroundImage: `radial-gradient(circle at center, rgba(74,144,226,0.2) 1.5px, transparent 1.5px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
            </>
        )
    }

    // Default hero background - Dark theme with blue accents
    return (
        <>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/8 to-primary/6 blur-3xl -top-48 -left-24 animate-pulse"></div>
                <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-primary/6 to-primary/5 blur-3xl bottom-0 right-0 animate-pulse delay-1000"></div>
                <div className="absolute w-96 h-96 bg-primary/6 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
            </div>

            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(rgba(74, 144, 226, 0.15) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>
        </>
    )
}

export default Background 