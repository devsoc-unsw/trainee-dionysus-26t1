import styles from './LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.waveUp}>
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,60 C200,0 450,100 720,45 C990,-10 1200,80 1440,50 L1440,0 L0,0 Z" fill="#F3BE65"/>
                </svg>
            </div>

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>SANDMAN</h1>
                    <button className={styles.btnPrimary}>Get Started</button>
                </div>
                <div className={styles.heroIcon}>
                    placeholder for hero image/icon thingy
                </div>
            </section>

            <div className={styles.waveDown}>
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,40 C180,100 400,0 640,55 C880,110 1100,10 1300,50 C1360,65 1410,55 1440,45 L1440,100 L0,100 Z" fill="#F3BE65"/>
                </svg>
            </div>

            <section className={styles.features}>
                <div className={styles.featuresHeader}>
                    <div className={styles.featuresTitleBlock}>
                        <h2 className={styles.featuresTitle}>Features FAH</h2>
                        <div className={styles.featuresTitleUnderline}/>
                    </div>
                    <div className={styles.featuresListBlock}>
                        <p className={styles.featuresListLabel}>Planned features:</p>
                        <ul className={styles.featuresList}>
                            <li>goal setting</li>
                            <li>leaderboard</li>
                            <li>check-in notifications (prob not cause mobile)</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.cardRow}>
                    <div className={styles.card}/>
                    <div className={styles.card}/>
                    <div className={styles.card}/>
                </div>
            </section>

            <div className={styles.waveUp}>
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,60 C200,0 450,100 720,45 C990,-10 1200,80 1440,50 L1440,0 L0,0 Z" fill="#F3BE65"/>
                </svg>
            </div>

            <section className={styles.incentives}>
                <h2 className={styles.incentivesTitle}>Incentives reasoning thingy</h2>
                <div className={styles.cardRow}>
                    <div className={styles.card}/>
                    <div className={styles.card}/>
                    <div className={styles.card}/>
                </div>
            </section>

            <section className={styles.testimonial}>
                <div className={styles.testimonialInner}>
                    <span className={styles.quoteMarkOpen}>"</span>
                    <p className={styles.testimonialText}>
                        The BEST competitive social accountability website that WE need!
                    </p>
                    <span className={styles.quoteMarkClose}>"</span>
                    <p className={styles.testimonialAuthor}>LEBRON</p>
                </div>
            </section>

            <section className={styles.cta}>
                <button className={styles.btnPrimary}>Get Started</button>
            </section>

            <div className={styles.waveDown}>
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,40 C180,100 400,0 640,55 C880,110 1100,10 1300,50 C1360,65 1410,55 1440,45 L1440,100 L0,100 Z" fill="#F3BE65"/>
                </svg>
            </div>

            <footer className={styles.footer}>
                <p>© 2026 TP Dionysus</p>
            </footer>

        </div>
    )
}

export default LandingPage