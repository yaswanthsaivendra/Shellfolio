import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import HeroCamera from '../components/HeroCamera.jsx';

const Hero = () => {
    // const isSmall = useMediaQuery({ maxWidth: 440});
    const isMobile = useMediaQuery({ maxWidth: 768 });
    // const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024});


    return (
        <section id="home" className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col mt-36 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Yaswanth <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense className="w-full h-full" fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        {/* <OrbitControls enableDamping enablePan /> */}

                        <HeroCamera>
                            <HackerRoom
                                position={[0.8, isMobile ? -5 : -7, -9]}
                                rotation={[3.4, 0, 3.16]}
                                scale={isMobile ? 0.07 : 0.1}
                            />
                        </HeroCamera>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>

                </Canvas>
            </div>
        </section>
    )
}

export default Hero