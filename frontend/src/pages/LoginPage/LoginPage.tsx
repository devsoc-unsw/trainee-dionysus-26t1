import styles from './LoginPage.module.css'
import handleSignup from '../../api/handleSignup'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    // 3. Create a submit handler
    const onSubmit = async () => {
        if (email.length == 0 ||
            username.length == 0 ||
            password.length == 0 ||
            confirmPassword.length == 0) {
            return;
        }

        if (password !== confirmPassword) {
            // put a little indicator somewhere
        }

        // Now you can pass these variables to your API function
        const success = await handleSignup(email, username, password);
        if (success) {
            // go to dashboard
            navigate("/dashboard");
        }
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

                        {(password !== confirmPassword) &&
                            <div className={styles.passwordError}>
                                Please make sure the passwords match.
                            </div>}
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
