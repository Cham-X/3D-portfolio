import Button from "../components/Button"

function Hero() {

    return (
        <section className="min-h-screen w-full flex flex-col relative overflow-hidden" id="home">
            <div className="hero-glow" />
            <div className="hero-copy w-full mx-auto flex flex-col sm:mt-36 mt-24 c-space gap-5 relative z-10">
                <p className="eyebrow">Full-stack engineer / product builder</p>
                <h1 className="hero_tag text-gray_gradient">I build the digital products people rely on.</h1>
                <p className="hero-intro max-w-2xl text-slate-300 leading-relaxed">
                    Shamsudeen Zakariyyah is a full-stack engineer creating resilient web platforms, mobile apps, and the APIs behind them.
                </p>
                <div className="hero-meta">
                    <span><i /> Available for selected projects</span>
                    <span>Lagos, Nigeria / Remote worldwide</span>
                </div>
            </div>

            <div className="hero-system" aria-hidden="true">
                <div className="system-window">
                    <div className="system-window_topbar">
                        <span className="window-dots"><i /><i /><i /></span>
                        <span>product-runtime / live</span>
                        <span className="system-status">● online</span>
                    </div>
                    <div className="system-window_body">
                        <div className="system-line"><span>01</span><b>const</b> product = <em>ship</em>();</div>
                        <div className="system-line"><span>02</span><b>await</b> api.<em>connect</em>({'{'}</div>
                        <div className="system-line indent"><span>03</span>secure: <strong>true</strong>,</div>
                        <div className="system-line indent"><span>04</span>mobile: <strong>true</strong>,</div>
                        <div className="system-line"><span>05</span>{'}'});</div>
                        <div className="system-pulse"><i /> deployment stable <span>99.98%</span></div>
                    </div>
                </div>
                <div className="system-orbit orbit-one" />
                <div className="system-orbit orbit-two" />
            </div>

            <div className="hero-actions absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6">
                    <a href="#work" className="w-fit">
                        <Button name="View my work" isBean containerClass="sm:w-fit w-full sm:min-w-48" />
                    </a>
                    <a href="#contact" className="w-fit">
                        <Button name="Book a call" isBean containerClass="sm:w-fit w-full sm:min-w-48" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
