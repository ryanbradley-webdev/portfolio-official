import { ReactNode, useState, useEffect, useRef } from 'react'
import styles from './Projects.module.css'
import Caret from '../../assets/Caret'

type SelectorProps = {
    name: string,
    activeSelector: string,
    setActiveSelector: (selector: string) => void,
    children: ReactNode
}

export default function Selector({ name, activeSelector, setActiveSelector, children }: SelectorProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [height, setHeight] = useState('')

    const contentRef = useRef<HTMLDivElement>(null)

    const localStyles = {
        name: {
            color: isExpanded ? '#FFFFFF' : ''
        },
        content: {
            height: isExpanded ? height : '0'
        }
    }

    const handleChange = () => {
        setActiveSelector(name)
    }

    useEffect(() => {
        if (contentRef.current) {
            const height = `${contentRef.current.getBoundingClientRect().height}px`
            setHeight(height)
        }
    }, [])

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
                <Caret isActive={isExpanded} />
                <input type='radio' name='selector' id={name} onChange={handleChange} />
                <span style={localStyles.name}>{name}</span>
            </label>
            <div style={localStyles.content} className={styles.selectorContent}>
                <div ref={contentRef}>
                    {children}
                    <div className={styles.btnDiv}>
                        <button>Source Code</button>
                        <button>Visit Website</button>
                    </div>
                </div>
            </div>
        </div>
    )
}