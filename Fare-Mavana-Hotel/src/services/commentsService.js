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

export const getGameComments = async (gameId) => {
    const query= new URLSearchParams({
        where:`gameId="${gameId}"`
    })
    const response = await fetch(`${baseUrl}`, {
        method: 'GET',
    });

    const allComments=await response.json();
    return Object.values(allComments).filter(comment => comment.gameId === gameId);
}