import styles from './LoginPage.module.css'
import handleSignup from '../../api/handleSignup'
import { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // 3. Create a submit handler
    const onSubmit = async () => {
        if (password !== confirmPassword) {
            // put a little indicator somewhere
        }

        // Now you can pass these variables to your API function
        await handleSignup(email, username, password);
    };

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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Username</label>
                        <input
                            className={styles.input}
                            type="text"
                            autoComplete="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            className={styles.input}
                            type="password"
                            autoComplete="new-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Confirm password</label>
                        <input
                            className={styles.input}
                            type="password"
                            autoComplete="new-password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button className={styles.submitButton} onClick={() => onSubmit()}>
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
