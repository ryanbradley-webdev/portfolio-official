import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import styles from './Connect.module.css'

export default function Connect() {
    const [messageSending, setMessageSending] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [buttonMessage, setButtonMessage] = useState('Submit')
    const [background, setBackground] = useState('var(--gradient-btn)')

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const subjectRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const LinkedIn = () => (
        <a href='https://www.linkedin.com/in/ryanbradley-webdev/' target='_blank' rel='noopener noreferrer' className={styles.link}>
            LinkedIn
        </a>
    )

    const GitHub = () => (
        <a href='https://github.com/ryanbradley-webdev' target='_blank' rel='noopener noreferrer' className={styles.link}>
            GitHub
        </a>
    )

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setMessageSending(true)

        const data = {
            name: nameRef?.current?.value,
            email: emailRef?.current?.value,
            subject: subjectRef?.current?.value,
            message: messageRef?.current?.value
        }

        axios.post(import.meta.env.VITE_SENDGRID_API_URL, data)
            .then(() => {
                const form = e.target as HTMLFormElement
                form.reset()
                setMessageSending(false)
                setMessageSent(true)
                setTimeout(() => {
                    setMessageSent(false)
                }, 3000)
            })
            .catch(() => {
                setMessageSending(false)
                setMessageError(true)
                setTimeout(() => {
                    setMessageError(false)
                }, 3000)
            })
    }

    useEffect(() => {

        if (messageSending) {
            setButtonMessage('Sending message...')
        } else if (messageSent) {
            setButtonMessage('Message Sent!')
            setBackground('var(--gradient-btn-success)')
        } else if (messageError) {
            setButtonMessage('Something went wrong')
            setBackground('var(--gradient-btn-error)')
        } else {
            setButtonMessage('Submit')
            setBackground('var(--gradient-btn)')
        }

    }, [messageSending, messageSent, messageError])

    return (
        <section id="connect">
            
            <h2>
                Let's get in touch
            </h2>

            <div className={styles.container}>

                <div>

                    <h3 className={styles.h3}>
                        Thanks for viewing my portfolio!
                    </h3>

                    <p className={styles.paragraph}>
                        You can also connect with me on <LinkedIn /> or see the rest of my projects on <GitHub />.
                    </p>

                    <p className={styles.paragraph}>
                        To reach me directly you can send me a message using the form.
                    </p>

                </div>

                <form action="" onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="name">
                        Name
                        <input type="text" id="name" name="name" placeholder="John Doe" ref={nameRef} required />
                        <div className={styles.inputUnderline}></div>
                    </label>
                    <label htmlFor="email">
                        Email
                        <input type="email" id="email" name="email" placeholder="johndoe@example.com" ref={emailRef} required />
                        <div className={styles.inputUnderline}></div>
                    </label>
                    <label htmlFor="subject">
                        Subject
                        <input type="text" id="subject" name="subject" placeholder="Enter your subject here" ref={subjectRef} required />
                        <div className={styles.inputUnderline}></div>
                    </label>
                    <label htmlFor="message">
                        Message
                        <textarea name="message" id="message" cols={30} rows={10} placeholder="Enter your message here" ref={messageRef} required></textarea>
                    </label>
                    <button 
                        type="submit" 
                        className={styles.formBtn} 
                        style={{ background }} 
                        disabled={messageSending}
                    >
                        {messageSending && <div></div>}
                        <span>{buttonMessage}</span>
                    </button>
                </form>

            </div>

        </section>
    )
}