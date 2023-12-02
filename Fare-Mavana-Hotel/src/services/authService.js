const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    return await response.json();
}

export const register = async (email, username, password) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password, username })
    });

    return await response.json();

}

export const logout = async (token) => {

    console.log('token from servise '+ token);
    const response = await fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': `${token}`
        }
    });

    if (response.status == 204) {
        return {}
    }

    if (!response.ok) {
        throw response.json();
    }

    return response.json();
}