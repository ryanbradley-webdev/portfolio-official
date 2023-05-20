import styles from './Connect.module.css'

export default function Connect() {
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
    }

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
                        <input type="text" id="name" name="name" placeholder="John Doe" required />
                        <div className={styles.inputUnderline}></div>
                    </label>
                    <label htmlFor="email">
                        Email
                        <input type="email" id="email" name="email" placeholder="johndoe@example.com" required />
                        <div className={styles.inputUnderline}></div>
                    </label>
                    <label htmlFor="subject">
                        Subject
                        <input type="text" id="subject" name="subject" placeholder="Enter your subject here" required />
                        <div className={styles.inputUnderline}></div>
                    </label>
                    <label htmlFor="message">
                        Message
                        <textarea name="message" id="message" cols={30} rows={10} placeholder="Enter your message here" required></textarea>
                    </label>
                    <button type="submit">
                        Submit
                    </button>
                </form>

            </div>

        </section>
    )
}