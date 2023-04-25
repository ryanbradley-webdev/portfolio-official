import styles from './Header.module.css'

type BurgerProps = {
    onClick: () => void
}

export default function Burger({ onClick }: BurgerProps) {
    return (
        <button className={styles.burgerBtn} onClick={onClick}>
            <div className={styles.burgerDiv}></div>
        </button>
    )
}