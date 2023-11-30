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
