import { ReactNode, useState, useEffect, useRef } from 'react'
import styles from './Projects.module.css'
import Caret from '../../assets/Caret'
import LinkBtn from './LinkBtn'

type SelectorProps = {
    name: string,
    activeSelector: string,
    setActiveSelector: (selector: string) => void,
    code: string,
    website: string,
    children: ReactNode
}

export default function Selector({ name, activeSelector, setActiveSelector, code, website, children }: SelectorProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [height, setHeight] = useState('')

    const contentRef = useRef<HTMLDivElement>(null)

    const localStyles = {
        name: {
            fontSize: '20px',
            color: isExpanded ? '#FFFFFF' : ''
        },
        content: {
            height: isExpanded ? height : '0',
            paddingBlock: isExpanded ? '16px' : '0'
        }
    }

    const handleChange = () => {
        if (contentRef.current) {
            const height = `${contentRef.current.getBoundingClientRect().height + 32}px`
            setHeight(height)
        }
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
                <Caret isActive={isExpanded} />
                <input type='radio' name='selector' id={name} onChange={handleChange} />
                <span style={localStyles.name}>{name}</span>
            </label>
            <div style={localStyles.content} className={styles.selectorContent}>
                <div ref={contentRef}>
                    {children}
                    <div className={styles.btnDiv}>
                        <LinkBtn url={code}>
                            Source Code
                        </LinkBtn>
                        <LinkBtn url={website}>
                            Visit Website
                        </LinkBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}