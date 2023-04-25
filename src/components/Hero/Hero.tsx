import styles from './Hero.module.css'
import HeroBtn from './HeroBtn'

export default function Hero() {
    return (
        <section className={styles.section}>
            <h1>Ryan<br />Bradley</h1>
            <h2>Web Designer</h2>
            <h2 style={{ fontWeight: '400' }}>Full Stack Developer</h2>
            <h2>UI/UX Designer</h2>
            <div className={styles.heroBtnDiv}>
                <HeroBtn href='#projects'>
                    See My Work
                </HeroBtn>
                <HeroBtn href='#connect' variant>
                    Contact Me
                </HeroBtn>
            </div>
        </section>
    )
}