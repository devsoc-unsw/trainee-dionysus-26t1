const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const handleSignup = async (email: string, username: string, password: string) => {
    const res = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password })
    });
    return res.ok;
}

export default handleSignup;
