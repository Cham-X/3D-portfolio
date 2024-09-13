
const About = () => {
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assests/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi, I am Shamsudeen Zakariyyah</p>
                            <p className="grid-subtext">
                                With 6 years of Experience,I have honed my skills in frontend and backend development, with a focus on animate 3D website
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grids2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in Javascript/Typescript with a focus on React</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"></div>
                </div>
            </div>
        </section>
    )
}

export default About
