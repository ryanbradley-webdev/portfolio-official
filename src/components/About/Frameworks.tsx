import React from '/react.png'
import Next from '/next.png'
import Node from '/node.png'
import Vite from '/vite.png'
import styles from './About.module.css'

export default function Frameworks() {
    return (
        <div className={styles.twoByTwoGrid}>
            <img src={React} alt='React' />
            <img src={Next} alt='Next' />
            <img src={Node} alt='Node' />
            <img src={Vite} alt='Vite' />
        </div>
    )
}