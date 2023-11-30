const baseUrl = 'http://localhost:3030/jsonstore'

export const create = async (roomData) => {
    const response = await fetch(`${baseUrl}/rooms`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(roomData)
    });

    const result = await response.json();

    return result;
}

export const getAll = async () => {
    const responce = await fetch(`${baseUrl}/rooms`, { method: 'GET' });
    const result = await responce.json();

    return Object.values(result);
}

export const getOne = async (gameId) => {
    const responce =await fetch(`${baseUrl}/rooms/${gameId}`, { method: 'GET' });
console.log(responce);
    const result = await responce.json();

    return result;
}