
const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-white/10 flex justify-between items-center flex-wrap gap-5 bg-[#071013]/80">
            <div className="text-slate-300 flex gap-2 flex-wrap">
                <p>Available for remote work</p>
                <p>|</p>
                <p>Senior Full-Stack Engineer</p>
            </div>
            <div className="social-links">
                <a className="social-icon" href="https://github.com/Cham-X" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <img src="assets/github.svg" alt="" />
                </a>
                <a className="social-icon" href="https://www.linkedin.com/in/shamsudeen-zakariyyah/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <img src="assets/twitter.svg" alt="" />
                </a>
                <a className="social-icon" href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <img src="assets/instagram.svg" alt="" />
                </a>
            </div>

            <p className="text-slate-400">&copy; {new Date().getFullYear()} Shamsudeen Zakariyyah. All rights reserved.</p>
        </section>
    )
}

export default Footer
