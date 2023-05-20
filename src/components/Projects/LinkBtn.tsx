import styles from './Projects.module.css'

type LinkBtnProps = {
    url: string,
    children: string
}

export default function LinkBtn({ url, children }: LinkBtnProps) {
    return (
        <a href={url} target='_blank' rel='noopener noreferrer' className={styles.linkBtn}>
            <button>
                {children}
            </button>
        </a>
    )
}