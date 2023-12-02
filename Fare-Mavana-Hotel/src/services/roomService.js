const baseUrl = 'http://localhost:3030/data'


export const create = async (roomData, token) => {
    const response = await fetch(`${baseUrl}/rooms`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
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

export const getOne = async (roomId) => {
    const responce = await fetch(`${baseUrl}/rooms/${roomId}`, { method: 'GET' });

    const result = await responce.json();

    return result;
export const deleteRoom = async (roomId, token) => {
    const responce = await fetch(`${baseUrl}/rooms/${roomId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        }
    });

    const result = await responce.json();
    return result;

}