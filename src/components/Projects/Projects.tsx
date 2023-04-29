import { useState } from 'react'
import Section from '../Section/Section'
import SectionHeader from '../Section/SectionHeader'
import Selector from './Selector'
import React from '/react.png'
import Ts from '/ts.png'
import Next from '/next.png'
import Firebase from '/firebase.png'
import Vite from '/vite.png'
import styles from './Projects.module.css'

export default function Projects() {
    const [activeSelector, setActiveSelector] = useState('')

    const GitHub = () => (
        <a href="https://github.com/ryanbradley-webdev" target='_blank' rel='noopener noreferrer' className={styles.link}>
            GitHub
        </a>
    )

    return (
        <Section id='projects'>

            <SectionHeader>
                Projects
            </SectionHeader>

            <div className={styles.selectorDiv}>
                
                <h5 className={styles.h5}>
                    Select a project to see a description and links to the source code and live demo.
                </h5>

                <Selector 
                    name='Makeup Yer Mind Blog' 
                    activeSelector={activeSelector} 
                    setActiveSelector={setActiveSelector}
                    code=''
                    website=''
                >
                    <p>A full-stack application built to showcase a client’s various forms of content. This website was designed with functionality and SEO in mind, using Next.js to accomplish both.</p>
                    <div className={styles.iconDiv}>
                        <img src={React} alt="React" />
                        <img src={Ts} alt="Ts" />
                        <img src={Next} alt="Next" />
                        <img src={Firebase} alt="Firebase" />
                    </div>
                </Selector>

                <hr />

                <Selector 
                    name='Content Management System' 
                    activeSelector={activeSelector} 
                    setActiveSelector={setActiveSelector}
                    code='https://github.com/ryanbradley-webdev/makeup-yer-mind-cms'
                    website='https://mym-dev-53d22.web.app/'
                >
                    <p>Makeup Yer Mind's associated content management system. This application allows the client to write, edit, and delete all site content. A markdown editor is incorporated into the system to ensure flexibility and simplicity of use.</p>
                    <div className={styles.iconDiv}>
                        <img src={React} alt="React" />
                        <img src={Ts} alt="Ts" />
                        <img src={Vite} alt="Vite" />
                        <img src={Firebase} alt="Firebase" />
                    </div>
                </Selector>

                <hr />

                <Selector 
                    name='eCommerce Site' 
                    activeSelector={activeSelector} 
                    setActiveSelector={setActiveSelector}
                    code=''
                    website=''
                >
                    
                </Selector>

                <hr />

                <Selector 
                    name='Invoice Tracker' 
                    activeSelector={activeSelector} 
                    setActiveSelector={setActiveSelector}
                    code=''
                    website=''
                >
                    
                </Selector>
            </div>

            <h5 className={styles.h5} style={{ textAlign: 'center', marginBottom: '0' }}>
                To see more of my work, visit me on <GitHub />.
            </h5>

        </Section>
    )
}