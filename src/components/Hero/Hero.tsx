import React from '../../assets/React'
import Node from '../../assets/Node'
import styles from './Hero.module.css'
import Google from '../../assets/Google'

export default function Hero() {
    return (
        <section className={styles.section}>

            <div className={styles.hero}>

                <h1 className={styles.h1}>
                    Ryan Bradley
                </h1>

                <h3 className={styles.h3}>
                    Full-stack React developer with a focus on <span>functional</span> and <span>interactive</span> web applications
                </h3>

                <a href='#projects'>
                    <button className={styles.heroBtn}>
                        <div></div>
                        See My Work
                    </button>
                </a>

            </div>

            <div>

                <div className={styles.subhero}>
                    <React />
                    <h4>Front End Design</h4>
                    <p>
                        Design wireframes and prototypes using Figma, Adobe Xd, and Sketch, and create full front-end applications using React and other supporting libraries.
                    </p>
                </div>

                <div className={styles.subhero}>
                    <Node />
                    <h4>Back End Development</h4>
                    <p>
                        I use Node.js, Java, and Python to create back-end architectures using REST-ful API practices, as well as integrating back-end into application design through frameworks such as Next.js and Astro.
                    </p>
                </div>

                <div className={styles.subhero}>
                    <Google />
                    <h4>Hosting And Databasing</h4>
                    <p>
                        Proficient in hosting platforms such as AWS, Google, Supabase, Vercel, and others. Skilled with both SQL and No-SQL databases as well as server-side integration.
                    </p>
                </div>

            </div>

        </section>
    )
}