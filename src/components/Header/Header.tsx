import { useEffect, useState } from 'react'
import NavLink from './NavLink'
import Burger from './Burger'
import Logo from '../../assets/Logo'
import styles from './Header.module.css'

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(window.innerWidth >= 1024)

    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            setMenuVisible(!menuVisible)
        }
    }

    useEffect(() => {
        const listener = () => {
            if (window.innerWidth >= 1024) {
                setMenuVisible(true)
            } else {
                setMenuVisible(false)
            }
        }

        window.addEventListener('resize', listener)

        return () => window.removeEventListener('resize', listener)
    }, [])

    return (
        <header className={styles.header}>
            <Logo />
            <Burger onClick={toggleMenu} />
            <nav className={styles.menu} aria-expanded={menuVisible} id='menu'>
                <NavLink href='#about' onClick={toggleMenu}>
                    About
                </NavLink>
                <NavLink href='#projects' onClick={toggleMenu}>
                    Projects
                </NavLink>
                <NavLink href='https://github.com/ryanbradley-webdev' external onClick={toggleMenu}>
                    GitHub
                </NavLink>
                <NavLink href='https://www.linkedin.com/in/ryanbradley-webdev/' external onClick={toggleMenu}>
                    LinkedIn
                </NavLink>
                <NavLink href='#connect' onClick={toggleMenu}>
                    <button>Get In Touch</button>
                </NavLink>
            </nav>
        </header>
    )
}