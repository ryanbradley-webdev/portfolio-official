import { ReactNode } from 'react'
import styles from './Header.module.css'

type NavLinkProps = {
    href: string,
    external?: boolean,
    onClick: () => void,
    children: string | ReactNode
}

export default function NavLink({ href, external, onClick, children }: NavLinkProps) {
    const target = external ? '_blank' : ''
    const rel = external ? 'noreferrer noopener' : ''

    return (
        <a 
            href={href} 
            className={styles.navLink} 
            target={target} 
            rel={rel} 
            onClick={onClick}
        >
            {children}
        </a>
    )
}