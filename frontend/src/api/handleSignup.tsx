const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const handleSignup = async (email: string, username: string, password: string) => {
    const res = await fetch(`${BASE_URL}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),
        credentials: 'include',
    });
    return res.ok;
}

export default handleSignup;
