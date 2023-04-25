import { ReactNode } from 'react'
import styles from './NavLink.module.css'

type NavLinkProps = {
    href: string,
    external?: boolean,
    children: string | ReactNode
}

export default function NavLink({ href, external, children }: NavLinkProps) {
    const target = external ? '_blank' : ''

    const rel = external ? 'noreferrer noopener' : ''

    return (
        <a href={href} className={styles.navLink} target={target} rel={rel}>
            {children}
        </a>
    )
}