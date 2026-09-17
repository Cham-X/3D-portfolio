import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"

const About = () => {

    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("zakariyyahshamsudeen@gmail.com")
            setHasCopied(true)

            setTimeout(() => setHasCopied(false), 2200)
        } catch (error) {
            console.error('Unable to copy email', error)
        }
    }

    const currentYear = new Date().getFullYear() - 2020

    return (
        <section className="c-space my-20" id="about">
            <div className="section-heading-wrap">
                <p className="eyebrow">About</p>
                <h2 className="head-text">Engineering range, product judgment, and a bias for shipping.</h2>
                <p className="section-lede">I work across the stack so ideas do not get lost between design, frontend, backend, and release.</p>
            </div>

            <div className="about-grid mt-10">
                <div className="about-card profile-card">
                    <div className="w-full rounded-md overflow-hidden">
                        <img src="assets/profile-image.png" alt="Shamsudeen Zakariyyah" className="w-full h-full object-cover" />
                    </div>

                    <div>
                        <p className="grid-label">01 / profile</p>
                        <p className="grid-headtext">Product-minded engineer</p>
                        <p className="grid-subtext">
                            I bring {currentYear}+ years of experience building responsive, secure, and scalable products across fintech, SaaS, healthcare, education, and commerce.
                        </p>
                    </div>
                </div>

                <div className="about-card stack-card">
                    <div>
                        <p className="grid-label">02 / toolkit</p>
                        <p className="grid-headtext">Full-stack by default</p>
                        <p className="grid-subtext">I move comfortably from product discovery to frontend systems, backend services, integrations, testing, and deployment.</p>
                    </div>
                        <div>
                            <p className="grid-label">Core stack</p>
                            <p className="stack-line">React / Next.js <span>Frontend</span></p>
                            <p className="stack-line">Node / NestJS / Express <span>Backend</span></p>
                            <p className="stack-line">React Native <span>Mobile</span></p>
                            <p className="stack-line">TypeScript <span>Systems</span></p>
                        </div>
                </div>

                <div className="about-card globe-card">
                    <div className="globe-wrap">
                            <Globe
                                height={280}
                                width={280}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                    </div>
                    <div>
                        <p className="grid-label">03 / availability</p>
                        <div>
                            <p className="grid-headtext">Available for remote delivery worldwide</p>
                            <p className="grid-subtext">Based in Lagos, Nigeria, I work with teams across time zones to design, build, and scale digital products from concept to deployment.</p>
                            <div>
                                <a href="#contact" className="w-fit">
                                    <Button
                                        name={"Start a project"}
                                        isBean
                                        containerClass={"w-full mt-10"}
                                    />
                                </a>
                            </div>
                        </div>
                            </div>
                </div>

                <div className="about-card skills-card">
                    <div>
                        <p className="grid-label">04 / capabilities</p>
                        <p className="grid-headtext">A broad toolkit for dependable product work</p>
                    </div>
                    <div className="skills-groups">
                        <div className="skill-group"><span>Languages</span><p>ES6+ · TypeScript · HTML5 · CSS3 · Sass</p></div>
                        <div className="skill-group"><span>Frameworks</span><p>React.js · Next.js · React Native · Vue.js · Angular.js · Flutter · Redux Toolkit · Node.js · NestJS · Express.js · Golang</p></div>
                        <div className="skill-group"><span>UI and architecture</span><p>Tailwind CSS · Chakra UI · Material UI · shadcn/ui · Ant Design · styled-components · Design Systems · State Management</p></div>
                        <div className="skill-group"><span>Product engineering</span><p>API Integration · Form Development · Dashboard Development · Data Visualization · Accessibility · SEO · Performance Optimization</p></div>
                        <div className="skill-group"><span>Security and quality</span><p>OWASP Principles · Authorization · Input Validation · Secure API Integration · Secure Data Handling · ISO 27001 Awareness · Jest · Cypress · Playwright · React Testing Library · Mocha</p></div>
                        <div className="skill-group"><span>Delivery and collaboration</span><p>Git · GitHub Actions · Jenkins · Docker · Kubernetes · Webpack · Vite · ESLint · Prettier · Agile/Scrum · CI/CD · TDD · Design Patterns · Jira · Trello · Slack · Notion · Microsoft Teams · Asana</p></div>
                        <div className="skill-group"><span>Backend, CMS, and payments</span><p>Node.js · NestJS · Express.js · Golang · REST APIs · GraphQL · Firebase · Sanity.io · Appwrite · Supabase · WordPress Headless CMS · Flutterwave · Stripe</p></div>
                    </div>
                    <p className="grid-subtext">Authentication, API design, performance, automated testing, responsive systems, and thoughtful release workflows are part of the build, not an afterthought.</p>
                </div>

                <div className="about-card email-card">
                    <p className="grid-label">05 / contact</p>
                    <p className="grid-headtext">Start with a useful conversation</p>
                    <p className="grid-subtext">Copy my email and send over the product, problem, or opportunity you are exploring.</p>
                    <button type="button" className="copy-container copy-action" onClick={handleCopy} aria-label="Copy email address">
                        <span>{hasCopied ? 'Email copied' : 'zakariyyahshamsudeen@gmail.com'}</span>
                        <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="" />
                    </button>
                    </div>
            </div>
        </section>
    )
}

export default About
