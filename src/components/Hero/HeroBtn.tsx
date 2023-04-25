import styles from './Hero.module.css'

type HeroBtnProps = {
    href: string,
    variant?: boolean,
    children: string
}

export default function HeroBtn({ href, variant, children }: HeroBtnProps) {
    const className = variant ? styles.heroBtnVariant : styles.heroBtn

    const localStyles = {
        fontSize: '20px',
        fontStyle: 'italic',
        fontWeight: '600',
        width: '174px',
        height: '50px',
        borderRadius: '8px'
    }

    return (
        <a href={href}>
            <button className={className} style={localStyles}>
                {children}
            </button>
        </a>
    )
}