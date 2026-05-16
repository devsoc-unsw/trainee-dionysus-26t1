import styles from './LandingPage.module.css'
import sandcastleIcon from '../../assets/sandcastle.png'
import beachvolleyballIcon from '../../assets/beachvolleyball.png'
import lifeguardIcon from '../../assets/lifeguard.png'
import sandsurferIcon from '../../assets/sandsurfer.png'
import bonfireIcon from '../../assets/bonfire.png'
import whistleIcon from '../../assets/whistle.png'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <div className={styles.waveUp} />
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <clipPath id="dune1" clipPathUnits="objectBoundingBox">
                        <path d="M0,0.15 C0.1,0.02 0.25,0.18 0.4,0.08 C0.55,-0.02 0.7,0.2 0.85,0.1 C0.92,0.05 0.97,0.12 1,0.1 L1,0.88 C0.85,0.98 0.7,0.82 0.55,0.92 C0.4,1.02 0.25,0.85 0.1,0.95 C0.05,0.98 0.02,0.96 0,0.95 Z" />
                    </clipPath>
                    <clipPath id="dune2" clipPathUnits="objectBoundingBox">
                        <path d="M0,0.12 C0.15,0.25 0.3,0.05 0.5,0.15 C0.65,0.22 0.75,0.02 0.9,0.12 C0.95,0.16 0.98,0.1 1,0.08 L1,0.9 C0.82,0.98 0.65,0.85 0.5,0.95 C0.35,1.05 0.18,0.88 0.05,0.96 C0.02,0.97 0.01,0.96 0,0.95 Z" />
                    </clipPath>
                    <clipPath id="dune3" clipPathUnits="objectBoundingBox">
                        <path d="M0,0.1 C0.2,0.22 0.35,0.03 0.55,0.18 C0.7,0.28 0.82,0.05 0.95,0.14 C0.97,0.15 0.99,0.13 1,0.12 L1,0.86 C0.8,0.96 0.6,0.82 0.45,0.93 C0.3,1.03 0.15,0.88 0,0.97 Z" />
                    </clipPath>
                </defs>
            </svg>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>SANDMAN</h1>
                    <button className={styles.btnPrimary} onClick={() => navigate("/signup")}>Get Started</button>
                </div>
                <div className={styles.heroIcon}>
                    placeholder for hero image/icon thingy
                </div>
            </section>

            <div className={styles.waveDown} />

            <section className={styles.features}>
                <div className={styles.featuresHeader}>
                    <div className={styles.featuresTitleBlock}>
                        <h2 className={styles.featuresTitle}>Features FAH</h2>
                        <div className={styles.featuresTitleUnderline} />
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
                    <div className={styles.featureCard}>
                        <div className={styles.featureCardIcon}><img src={sandcastleIcon} alt="Sandcastle Icon" /></div>
                        <h3 className={styles.featureCardTitle}>Goal Setting</h3>

                        <div className={styles.featureCardDesc}>Set personal training goals and track your progress over time.</div>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureCardIcon}><img src={beachvolleyballIcon} alt="Beach Volleyball Icon" /></div>
                        <h3 className={styles.featureCardTitle}>Activity Board</h3>
                        <div className={styles.featureCardDesc}>Log your daily activities and see what everyone else is up to.</div>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureCardIcon}><img src={lifeguardIcon} alt="Lifeguard Icon" /></div>
                        <h3 className={styles.featureCardTitle}>Leaderboard</h3>
                        <div className={styles.featureCardDesc}>Compete with friends and climb the ranks every week.</div>
                    </div>
                </div>
            </section>

            <div className={styles.waveUp} />

            <section className={styles.incentives}>
                <h2 className={styles.incentivesTitle}>Incentives reasoning thingy</h2>
                <div className={styles.cardRow}>
                    <div className={styles.incentiveCard}>
                        <div className={styles.featureCardIcon}><img src={whistleIcon} alt="Whistle Icon" /></div>
                        <h3 className={styles.featureCardTitle}>Wake-Up Accountability</h3>
                        <p className={styles.featureCardDesc}>Commit to a wake-up time and have your friends hold you to it.</p>
                    </div>
                    <div className={styles.incentiveCard}>
                        <div className={styles.featureCardIcon}><img src={bonfireIcon} alt="Bonfire Icon" /></div>
                        <h3 className={styles.featureCardTitle}>Better With Friends</h3>
                        <p className={styles.featureCardDesc}>Everything hits different when your friends are watching. Stay consistent together.</p>
                    </div>
                    <div className={styles.incentiveCard}>
                        <div className={styles.featureCardIcon}><img src={sandsurferIcon} alt="Sandsurfer Icon" /></div>
                        <h3 className={styles.featureCardTitle}>Stay Motivated</h3>
                        <p className={styles.featureCardDesc}>Friendly competition keeps the energy high and the excuses low.</p>
                    </div>

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
                <button className={styles.btnPrimary} onClick={() => navigate("/signup")}>Get Started</button>
            </section>

            <div className={styles.waveDown} />
            <footer className={styles.footer}>
                <p>© 2026 TP Dionysus</p>
            </footer>

        </div>
    )
}

export default LandingPage
