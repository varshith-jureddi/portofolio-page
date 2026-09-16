import { navLinks } from "../constants";

export default function Navbar(){
    return(
        <header className="navbar">
            <div className="inner">
                <a className="logo" href="#hero">VARSHITH</a>
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link, name})=>(
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>
                                        {name}
                                    </span>
                                    <span className="underline"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="contact-btn">
                    <div className="inner">
                        Contact
                    </div>
                    </a>

            </div>
        </header>
    )
}