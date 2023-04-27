import IconDiv from '../IconDiv/IconDiv'
import Section from '../Section/Section'
import SectionHeader from '../Section/SectionHeader'
import styles from './About.module.css'
import Design from './Design'
import Frameworks from './Frameworks'
import Languages from './Languages'
import Services from './Services'

export default function About() {
    return (
        <Section id='about'>

            <SectionHeader>
                About
            </SectionHeader>

            <div className={styles.leadingText}>
                Former <span>Navy Submariner</span> turned <span>Full Stack Developer</span>.
            </div>

            <div className={styles.mainText}>
                <p>
                    With almost 10 years of experience as a Nuclear-trained Electronics Technician in the Navy, my focus has always been attention to detail and results-oriented production. As a developer I take the same approach, building websites that serve a purpose and meet every need.
                </p>

                <p>
                    I learned full stack development and web design through a series of professional certification courses, such as the Full Stack Engineer course with Codecademy and UX Design course with Google. I’m solidifying my skills by working towards a degree in Software Engineering through Arizona State University.
                </p>
            </div>

            <div className={styles.iconGrid}>
                <IconDiv>
                    <h4>Languages:</h4>
                    <Languages />
                </IconDiv>
                <IconDiv>
                    <h4>Frameworks:</h4>
                    <Frameworks />
                </IconDiv>
                <IconDiv>
                    <h4>Services:</h4>
                    <Services />
                </IconDiv>
                <IconDiv>
                    <h4>Design:</h4>
                    <Design />
                </IconDiv>
            </div>

        </Section>
    )
}