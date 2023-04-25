import { useState } from 'react'
import Github from '../../assets/Github'
import Linkedin from '../../assets/Linkedin'
import NavLink from '../NavLink/NavLink'
import Burger from './Burger'
import styles from './Header.module.css'

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false)

    const menuTransform = menuVisible ? '0' : '-200px'

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header className={styles.header}>
            <Burger onClick={toggleMenu} />
            <nav className={styles.menu} style={{ right: menuTransform }}>
                <NavLink href='#about'>
                    About
                </NavLink>
                <NavLink href='#projects'>
                    Projects
                </NavLink>
                <NavLink href='#connect'>
                    Connect
                </NavLink>
                <div className={styles.iconDiv}>
                    <NavLink href='https://github.com/ryanbradley-webdev' external>
                        <Github className={styles.icon} />
                    </NavLink>
                    <NavLink href='https://www.linkedin.com/in/ryanbradley-webdev/' external>
                        <Linkedin className={styles.icon} />
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}