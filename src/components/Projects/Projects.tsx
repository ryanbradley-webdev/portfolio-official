import { useState } from 'react'
import Selector from './Selector'
import React from '/react.png'
import Ts from '/ts.png'
import Next from '/next.png'
import Firebase from '/firebase.png'
import Vite from '/vite.png'
import Node from '/node.png'
import Vercel from '/vercel.png'
import Postgres from '/sql.png'
import styles from './Projects.module.css'

export default function Projects() {
    const [activeSelector, setActiveSelector] = useState('')

    const GitHub = () => (
        <a href="https://github.com/ryanbradley-webdev" target='_blank' rel='noopener noreferrer' className={styles.link}>
            GitHub
        </a>
    )

    return (
        <section id='projects' className={styles.section}>

            <h2>
                Selected Projects
            </h2>

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
                        Technologies:
                        <img src={React} alt="React" />
                        <img src={Ts} alt="Ts" />
                        <img src={Next} alt="Next" />
                        <img src={Node} alt="Node" />
                        <img src={Vercel} alt="Vercel" />
                        <img src={Postgres} alt="Postgres" />
                    </div>
                </Selector>

                <Selector 
                    name='Content Management System' 
                    activeSelector={activeSelector} 
                    setActiveSelector={setActiveSelector}
                    code='https://github.com/ryanbradley-webdev/makeup-yer-mind-cms'
                    website='https://mym-dev-53d22.web.app/'
                >
                    <p>Makeup Yer Mind's associated content management system. This application allows the client to write, edit, and delete all site content. A markdown editor is incorporated into the system to ensure flexibility and simplicity of use.</p>
                    <div className={styles.iconDiv}>
                        Technologies:
                        <img src={React} alt="React" />
                        <img src={Ts} alt="Ts" />
                        <img src={Vite} alt="Vite" />
                        <img src={Firebase} alt="Firebase" />
                    </div>
                </Selector>

                <Selector
                    name='Kenmixesmusic'
                    activeSelector={activeSelector}
                    setActiveSelector={setActiveSelector}
                    code='https://github.com/ryanbradley-webdev/kenmixesmusic'
                    website='https://kenmixesmusic.com/'
                >
                    <p>A web-portfolio for an audio engineer, this deceptively simple webpage required several applications of React state management to acheive a seemless, fluid design.</p>
                    <div className={styles.iconDiv}>
                        Technologies:
                        <img src={React} alt="React" />
                        <img src={Ts} alt="Ts" />
                        <img src={Vite} alt='Vite' />
                        <img src={Firebase} alt="Firebase" />
                    </div>
                </Selector>

                <Selector 
                    name='eCommerce Site' 
                    activeSelector={activeSelector} 
                    setActiveSelector={setActiveSelector}
                    code=''
                    website=''
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus necessitatibus ipsam nam quia repudiandae labore hic nulla unde, beatae inventore enim assumenda. Cumque, deserunt. Blanditiis eum saepe obcaecati facere sequi delectus culpa explicabo provident ea vero corporis porro iusto voluptate officia, deleniti maiores ducimus minima at. Quisquam ad nostrum veritatis.</p>
                    <div className={styles.iconDiv}>
                        Technologies:
                        <img src={React} alt="React" />
                        <img src={Ts} alt="Ts" />
                        <img src={Vite} alt='Vite' />
                        <img src={Firebase} alt="Firebase" />
                    </div>
                </Selector>

                <Selector 
                    name='Invoice Tracker' 
                    activeSelector={activeSelector} 
                    setActiveSelector={setActiveSelector}
                    code=''
                    website=''
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iusto enim molestias pariatur hic est consequuntur nulla, distinctio dolorum rem atque minima, aspernatur quas dolore? Officia eveniet iure laudantium delectus odit, ipsum inventore voluptatibus nihil amet suscipit et, tempora quam?</p>
                    <div className={styles.iconDiv}>
                        Technologies:
                        <img src={React} alt="React" />
                        <img src={Ts} alt="Ts" />
                        <img src={Vite} alt='Vite' />
                        <img src={Firebase} alt="Firebase" />
                    </div>
                </Selector>
            </div>

            <h5 className={styles.h5} style={{ textAlign: 'center', marginBottom: '0' }}>
                To see more of my work, visit me on <GitHub />.
            </h5>

        </section>
    )
}