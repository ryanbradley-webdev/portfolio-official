import { ReactNode } from 'react'
import styles from './IconDiv.module.css'

export default function IconDiv({ children }: { children: ReactNode }) {
    return (
        <div className={styles.iconDiv}>
            {children}
        </div>
    )
}