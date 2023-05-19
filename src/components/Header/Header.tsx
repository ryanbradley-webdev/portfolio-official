import { useState } from 'react'
import { getWindowWidth } from '../../util/functions'
import Github from '../../assets/Github'
import Linkedin from '../../assets/Linkedin'
import NavLink from '../NavLink/NavLink'
import Burger from './Burger'
import Logo from '../../assets/Logo'
import styles from './Header.module.css'

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false)

    const menuTransform = () => {
        const width = getWindowWidth()
        if (width > 480) return '0'
        return menuVisible ? '0' : '-230px'
    }

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header className={styles.header}>
            <Logo />
            <Burger onClick={toggleMenu} />
            <nav className={styles.menu} style={{ right: menuTransform() }}>
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