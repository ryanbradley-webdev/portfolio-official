import Photoshop from '/photoshop.png'
import Xd from '/xd.png'
import Sketch from '/sketch.png'
import Figma from '/figma.png'

export default function Design() {
    return (
        <div>
            <img src={Photoshop} alt='Photoshop' />
            <img src={Xd} alt='Xd' />
            <img src={Sketch} alt='Sketch' />
            <img src={Figma} alt='Figma' />
        </div>
    )
}