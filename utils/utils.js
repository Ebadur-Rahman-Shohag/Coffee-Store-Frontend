const baseUrl = 'https://coffee-store-backend-mh4p.onrender.com/';
const fetchBookmarks = async () => {
    const response = await fetch(`${baseUrl}/bookmarks`);
    const data = await response.json();
    return data;
}

const addBookmark = async (data) => {
    const response = await fetch(`${baseUrl}/bookmarks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

const deleteBookmark = async (_id) => {
    const response = await fetch(`${baseUrl}/bookmarks/${_id}`, {
        method: 'DELETE',
    })
    const result = await response.json();
    return result;

}

export { fetchBookmarks, addBookmark, deleteBookmark };