import Html from '/html5.png'
import Css from '/css.png'
import Js from '/js.png'
import Ts from '/ts.png'
import Java from '/java.png'
import Python from '/python.png'
import styles from './About.module.css'

export default function Languages() {
    return (
        <div className={styles.threeByThreeGrid}>
            <img src={Html} alt='HTML' />
            <img src={Css} alt='CSS' />
            <img src={Js} alt='Javascript' />
            <img src={Ts} alt='Typescript' />
            <img src={Java} alt='Java' />
            <img src={Python} alt='Python' />
        </div>
    )
}