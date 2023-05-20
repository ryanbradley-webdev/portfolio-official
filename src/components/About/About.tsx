import IconDiv from './IconDiv'
import styles from './About.module.css'

export default function About() {
    return (
        <section id='about' className={styles.section}>

            <h2 className={styles.h2}>
               <span> A little about me...</span>
            </h2>

            <div className={styles.leadingText}>
                Former <span>Navy Submariner</span> turned <span>Full Stack Developer</span>.
            </div>

            <div className={styles.container}>

                <div className={styles.mainText}>
                    <p>
                        With almost 10 years of experience as a Nuclear-trained Electronics Technician in the Navy, my focus has always been attention to detail and results-oriented production. As a developer I take the same approach, building websites that serve a purpose and meet every need.
                    </p>

                    <p>
                        I learned full stack development and web design through a series of professional certification courses, such as the Full Stack Engineer course with Codecademy and UX Design course with Google. I’m solidifying my skills by working towards a degree in Software Engineering through Arizona State University.
                    </p>
                </div>

                <div className={styles.technologies}>
                    <p>
                        Technologies I use:
                    </p>
                    <IconDiv />
                </div>

            </div>

        </section>
    )
}