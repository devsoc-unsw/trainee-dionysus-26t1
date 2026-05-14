import styles from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <>
            <div className={styles.cardWrapper}>
                <div className={styles.card}>

                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            className={styles.input}
                            type="email"
                            autoComplete="email"
                        />
                    </div>

                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Username</label>
                        <input
                            className={styles.input}
                            type="text"
                            autoComplete="username"
                        />
                    </div>

                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            className={styles.input}
                            type="password"
                            autoComplete="new-password"
                        />
                    </div>

                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Confirm password</label>
                        <input
                            className={styles.input}
                            type="password"
                            autoComplete="new-password"
                        />
                    </div>

                    <button className={styles.submitButton}>
                        Sign up
                    </button>

                    <p className={styles.footer}>
                        Already have an account?{' '}
                        <a href="/login" className={styles.signInLink}>Sign in.</a>
                    </p>

                </div>
            </div>
        </>
    )
}

export default LoginPage
