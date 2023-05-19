import styles from './Hero.module.css'
import HeroBtn from './HeroBtn'

export default function Hero() {
    return (
        <section className={styles.section}>

            <div>

                <h1 className={styles.h1}>
                    Ryan Bradley
                </h1>

                <h3 className={styles.h3}>
                    Full-stack React developer with a focus on <span>functional</span> and <span>interactive</span> web applications
                </h3>

                <HeroBtn href='#projects'>
                    See my work
                </HeroBtn>

            </div>

        </section>
    )
}