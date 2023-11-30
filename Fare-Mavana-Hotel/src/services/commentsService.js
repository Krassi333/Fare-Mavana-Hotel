const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create = async (gameId, username, text) => {
    const responce = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ gameId, username, text })
    });
 const newComment=await responce.json();
    return newComment;
}

