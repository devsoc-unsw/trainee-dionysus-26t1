import styles from './LandingPage.module.css'
import { useNavigate } from 'react-router-dom'
import cat_logo from '../../assets/cat_logo.png'
import cat_logo2 from '../../assets/cat_logo2.png'
import bg_gradient from '../../assets/bg_gradient_img.png'
const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.page}>

            <nav className={styles.nav}>
                <div className={styles.navLogo}>
                    <img src={cat_logo2} alt="Cat Logo" className={styles.navLogoIcon} />
                    <div className={styles.navLinks}>
                        <span className={styles.navLogoText}>Sandman</span>
                        <a href="#" className={styles.navLink}>Features</a>
                        <a href="#" className={styles.navLink}>Why us</a>
                    </div>
                </div>
                <div className={styles.navActions}>
                    <a href="#" className={styles.navSignIn} onClick={(e) => {
                        e.preventDefault()
                        navigate('/signin')
                    }}>
                        Sign in
                    </a>
                    <button className={styles.navCta} onClick={() => navigate('/signup')}>
                        Get started
                    </button>
                </div>
            </nav>

            <section className={styles.hero}>
                <div className={styles.heroGradient} />
                <div className={styles.heroContent}>
                    <img src={cat_logo} alt="Cat Logo" className={styles.heroMascot} />
                    <h1 className={styles.heroTitle}>Enhance your sleep.</h1>
                    <p className={styles.heroSubtitle}>
                        The social accountability web app that sharpens<br />
                        your workflow, starting from the root.
                    </p>
                    <div className={styles.heroActions}>
                        <button className={styles.btnRed} onClick={() => navigate('/signup')}>
                            Get started
                        </button>
                        <a href="#" className={styles.heroSignIn} onClick={(e) => {
                            e.preventDefault()
                            navigate('/signin')
                        }}>
                            Sign in
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.features}>
                <h2 className={styles.sectionTitle}>Monitor your habits.</h2>
                <div className={styles.cardGrid2}>
                    <div className={styles.featureCard}>
                        <h3 className={styles.cardTitle}>Goal setting</h3>
                        <p className={styles.cardDesc}>Log your daily activities, set personal training goals, and track your progress over time.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3 className={styles.cardTitle}>Automated check-in time</h3>
                        <p className={styles.cardDesc}>Automate your daily check-in times. Less admin. More productivity.</p>
                    </div>
                </div>
            </section>

            <section className={styles.features}>
                <h2 className={styles.sectionTitle}>Compete and win.</h2>
                <div className={styles.cardGrid2}>
                    <div className={styles.featureCard}>
                        <h3 className={styles.cardTitle}>Better with friends</h3>
                        <p className={styles.cardDesc}>Everything hits different when your friends are watching. Stay consistent together.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3 className={styles.cardTitle}>Wake up accountability</h3>
                        <p className={styles.cardDesc}>Commit to a wake up time and have your friends hold you to it.</p>
                    </div>
                </div>
            </section>

            {/* ── TRACK ── */}
            <section className={styles.features}>
                <h2 className={styles.sectionTitle}>Track long-term improvement.</h2>
                <div className={styles.cardGrid1}>
                    <div className={styles.featureCard}>
                        <h3 className={styles.cardTitle}>Stay motivated</h3>
                        <p className={styles.cardDesc}>Climb the ranks every week and watch your points accumulate. Friendly competition keeps the energy high and the excuses low.</p>
                    </div>
                </div>
            </section>

            <div className={styles.ctaWrapper}>
            <img src={bg_gradient} alt="" className={styles.ctaBg} />
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>More productivity.<br />Better sleep.</h2>
                    <p className={styles.ctaDesc}>
                        <strong>Sandman</strong> will always be free and fully browser-integrated.<br />
                        Try all features today and supercharge your mind.
                    </p>
                    <p className={styles.ctaTagline}>A new you is waiting.</p>
                    <button className={styles.btnRed} onClick={() => navigate('/signup')}>
                        Get started
                    </button>
                </div>
                <p className={styles.ctaTrusted}>Trusted by LeBron and 98% of TP Dionysus.</p>
            </section>
        </div>

            <footer className={styles.footer}>
                <div className={styles.footerLogo}>
                    <img src={cat_logo2} alt="Cat Logo" className={styles.footerLogoIcon} />
                    <span className={styles.navLogoText}>Sandman</span>
                </div>
                <p className={styles.footerCopy}>© 2026 TP Dionysus</p>
            </footer>

        </div>
    )
}

export default LandingPage