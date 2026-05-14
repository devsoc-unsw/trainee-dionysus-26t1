const handleSignup = async (email: string, username: string, password: string) => {
    const res = await fetch('/api/login/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password })
    });
}

export default handleSignup;
