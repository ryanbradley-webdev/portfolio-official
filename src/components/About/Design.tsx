import Photoshop from '/photoshop.png'
import Xd from '/xd.png'
import Sketch from '/sketch.png'
import Figma from '/figma.png'
import styles from './About.module.css'

export default function Design() {
    return (
        <div className={styles.twoByTwoGrid}>
            <img src={Photoshop} alt='Photoshop' />
            <img src={Xd} alt='Xd' />
            <img src={Sketch} alt='Sketch' />
            <img src={Figma} alt='Figma' />
        </div>
    )
}