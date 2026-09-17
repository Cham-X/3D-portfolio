import { useState } from "react"
import { navLinks } from "../constants"


const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map((item) => {
                return (
                    <li key={item.id} className="nav-li">
                        <a href={item.href} className="nav-li_a">
                            {item.name}
                        </a>
                    </li>
                )
            })}
        </ul>

    )
}

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-panel">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="#home" className="brand-mark text-neutral-200 font-bold text-xl hover:text-white transition-colors tracking-[0.25em] uppercase">
                        SZ
                    </a>

                    <button onClick={toggleMenu}
                        className="menu-toggle text-neutral-400 focus:outline-none sm:hidden flex hover:text-white transition-colors"

                        aria-label={isOpen ? "Close menu" : "Open menu"}>
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="menu" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar
