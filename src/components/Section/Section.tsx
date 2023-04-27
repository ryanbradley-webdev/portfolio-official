import { ReactNode } from 'react'
import styles from './Section.module.css'

type SectionProps = {
    id: string,
    children: ReactNode
}

export default function Section({ id, children }: SectionProps) {
    return (
        <section className={styles.section} id={id}>
            {children}
        </section>
    )
}