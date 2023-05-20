import { useEffect, useState } from 'react'
import Github from '../../assets/Github'
import Linkedin from '../../assets/Linkedin'
import NavLink from '../NavLink/NavLink'
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
            }
        }

        window.addEventListener('change', listener)

        return () => window.removeEventListener('change', listener)
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
                <NavLink href='#connect' onClick={toggleMenu}>
                    Connect
                </NavLink>
                <div className={styles.iconDiv}>
                    <NavLink href='https://github.com/ryanbradley-webdev' external onClick={toggleMenu}>
                        <Github className={styles.icon} />
                    </NavLink>
                    <NavLink href='https://www.linkedin.com/in/ryanbradley-webdev/' external onClick={toggleMenu}>
                        <Linkedin className={styles.icon} />
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}