import { useState } from 'react'
import Section from '../Section/Section'
import SectionHeader from '../Section/SectionHeader'
import Selector from './Selector'
import React from '/react.png'
import Ts from '/ts.png'
import Next from '/next.png'
import Firebase from '/firebase.png'
import styles from './Projects.module.css'

export default function Projects() {
    const [activeSelector, setActiveSelector] = useState('')

    return (
        <Section>

            <SectionHeader>
                Projects
            </SectionHeader>

            <div className={styles.selectorDiv}>
                <Selector 
                    name='Makeup Yer Mind Blog' 
                    activeSelector={activeSelector} 
                    setActiveSelector={setActiveSelector}
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
                >
                    
                </Selector>

                <hr />

                <Selector 
                    name='eCommerce Site' 
                    activeSelector={activeSelector} 
                    setActiveSelector={setActiveSelector}
                >
                    
                </Selector>

                <hr />

                <Selector 
                    name='Invoice Tracker' 
                    activeSelector={activeSelector} 
                    setActiveSelector={setActiveSelector}
                >
                    
                </Selector>
            </div>

        </Section>
    )
}