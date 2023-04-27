import { ReactNode, useState, useEffect } from 'react'
import styles from './Projects.module.css'

type SelectorProps = {
    name: string,
    activeSelector: string,
    setActiveSelector: (selector: string) => void,
    children: ReactNode
}

export default function Selector({ name, activeSelector, setActiveSelector, children }: SelectorProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleChange = () => {
        setActiveSelector(name)
    }

    useEffect(() => {
        if (activeSelector === name) {
            setIsExpanded(true)
        } else {
            setIsExpanded(false)
        }
    }, [activeSelector, name])

    return (
        <div className={styles.selector}>
            <label htmlFor={name}>
                <input type='radio' name='selector' id={name} onChange={handleChange} />
                {name}
            </label>
            <div style={{ height: isExpanded ? 'fit-content' : '0' }} className={styles.selectorContent}>
                {children}
                <div className={styles.btnDiv}>
                    <button>Source Code</button>
                    <button>Visit Website</button>
                </div>
            </div>
        </div>
    )
}