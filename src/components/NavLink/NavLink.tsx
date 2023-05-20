import { ReactNode, useEffect, useState } from 'react'
import styles from './NavLink.module.css'

type NavLinkProps = {
    href: string,
    external?: boolean,
    onClick: () => void,
    children: string | ReactNode
}

export default function NavLink({ href, external, onClick, children }: NavLinkProps) {
    const [isActive, setIsActive] = useState(() => {
        return window.location.hash === href
    })

    const target = external ? '_blank' : ''
    const rel = external ? 'noreferrer noopener' : ''

    useEffect(() => {
        const listener = () => {
            if (window.location.hash === href) {
                setIsActive(true)
            } else {
                setIsActive(false)
            }
        }

        window.addEventListener('hashchange', listener)

        return () => window.removeEventListener('hashchange', listener)
    })

    return (
        <a 
            href={href} 
            className={styles.navLink} 
            target={target} 
            rel={rel} 
            onClick={onClick}
            style={{ color: isActive ? 'var(--color-purple-pri)' : '' }}
        >
            {children}
        </a>
    )
}