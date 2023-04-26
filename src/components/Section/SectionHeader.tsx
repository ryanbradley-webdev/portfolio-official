import styles from './Section.module.css'

export default function SectionHeader({ children }: { children: string }) {
    return (
        <div className={styles.headerDiv}>
            <div></div>
            <h3>{children}</h3>
        </div>
    )
}