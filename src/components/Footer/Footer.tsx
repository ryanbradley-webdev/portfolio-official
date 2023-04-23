import Github from '../../assets/Github'
import Linkedin from '../../assets/Linkedin'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            &copy; 2023 Ryan Bradley Web Development
            <span className={styles.icon_span}>
                <Github />
                <Linkedin />
            </span>
        </footer>
    )
}