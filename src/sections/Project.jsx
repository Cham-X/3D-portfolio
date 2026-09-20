import { Suspense, useState } from "react";
import { myProjects } from "../constants"
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

const projectCount = myProjects.length;

const Project = () => {

    const [selectedProjectIndex, setSlectedProjectIndex] = useState(0)
    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigate = (direction) => {
        setSlectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            }
        })
    }
    return (
        <section className="c-space my-20" id="work">
            <div className="section-heading-wrap">
                <p className="eyebrow">Selected work</p>
                <h2 className="head-text">Products, platforms, and mobile experiences.</h2>
                <p className="section-lede">From the interface to the API contract, I turn ambitious product ideas into dependable software.</p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="project-info flex flex-col gap-5 relative sm:p-10 py-10 px-5">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="project-kicker">0{selectedProjectIndex + 1} / 0{projectCount}</p>
                        <div className="project-title-row">
                            <p className="text-white text-3xl font-semibold animatedText">{currentProject.title}</p>
                            <span className="project-platform">{currentProject.platform}</span>
                        </div>
                        <p className="project-role">{currentProject.role}</p>
                        <p className="animatedText">
                            {currentProject.desc}
                        </p>
                        <p className="animatedText">
                            {currentProject.subdesc}
                        </p>
                    </div>
                    <div className="flex items-center justify-between gap-5 flex-wrap">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => {
                                return (
                                    <div key={index} className="tech-logo" title={tag.name}>
                                        {tag.path ? <img src={tag.path} alt={tag.name} /> : <span className="tech-mark">{tag.name.slice(0, 2)}</span>}
                                    </div>
                                )
                            })}
                        </div>

                        <div className="flex items-center gap-4 flex-wrap">
                            <a
                                href={currentProject.href}
                                target={currentProject.href.startsWith('#') ? undefined : '_blank'}
                                rel={currentProject.href.startsWith('#') ? undefined : 'noreferrer'}
                                className="flex items-center gap-2 cursor-pointer text-white-600"
                            >
                                <p>Open live product</p>
                                <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                            </a>

                            {currentProject.appStoreHref && (
                                <a
                                    href={currentProject.appStoreHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 cursor-pointer text-white-600"
                                >
                                    <p>Open Google Play</p>
                                    <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                                </a>
                            )}

                            {currentProject.iosAppHref && (
                                <a
                                    href={currentProject.iosAppHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 cursor-pointer text-white-600"
                                >
                                    <p>Open App Store</p>
                                    <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button
                            className="arrow-btn"
                            onClick={() => handleNavigate("previous")}
                        >
                            <img src="assets/left-arrow.png" alt="arrow" className="w-4 h-4" />
                        </button>
                        <button
                            className="arrow-btn"
                            onClick={() => handleNavigate("next")}
                        >
                            <img src="assets/right-arrow.png" alt="arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="project-canvas border border-black-300 h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Project
