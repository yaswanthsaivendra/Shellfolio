
const Background = () => {
    return (
        <>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -top-48 -left-24 animate-pulse"></div>
                <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-secondary/20 to-tertiary/20 blur-3xl bottom-0 right-0 animate-pulse delay-1000"></div>
                <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>
        </>
    )
}

export default Background 