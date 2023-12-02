const baseUrl = 'http://localhost:3030/data/comments';

export const create = async (roomId, username, token, text) => {
    const responce = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ roomId, username, text })
    });
    const newComment = await responce.json();
    console.log(newComment);
    return newComment;
}

export const getRoomComments = async (roomId) => {
    const query = new URLSearchParams({
        where: `roomId="${roomId}"`
    })
    const response = await fetch(`${baseUrl}?${query}`, {
        method: 'GET',
    });

    const allComments = await response.json();
    //console.log(allComments[0].owner.username);
    return allComments;
}