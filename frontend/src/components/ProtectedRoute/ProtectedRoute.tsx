import { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

// I basically copied this:
// https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c

const ProtectedRoute = () => {
    const [auth, setAuth] = useState<'loading' | 'ok' | 'fail'>('loading');

    useEffect(() => {
        fetch('http://localhost:8080/api/auth/me', { credentials: 'include' })
            .then(res => setAuth(res.ok ? 'ok' : 'fail'))
            .catch(() => setAuth('fail'));
    }, []);

    if (auth === 'loading') {
        return null;
    }

    return auth === 'ok' ? <Outlet /> : <Navigate to='/signup' />;
}

export default ProtectedRoute
