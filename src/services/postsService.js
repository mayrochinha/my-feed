import errors from "../config/errors";

export async function getPostsList() {
    const response = await fetch('http://localhost:3001/posts');

    if (!response.ok) {
        return false;
    }

    const body = await response.json();

    return body.map((post) => ({
        ...post,
        publishedAt: new Date(post.publishedAt),
    }));
}

export async function getMostViewedPostsList() {
    const response = await fetch('http://localhost:3001/posts/most-viewed');

    if (!response.ok) {
        return false;
    }

    const body = await response.json();

    return body.map((post) => ({
        ...post,
        publishedAt: new Date(post.publishedAt),
    }));
}

export async function createPosts({ history, userName }) {
    const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        body: JSON.stringify({  //o html nao aceita objeto, é preciso converter em string
            content: history,
            userName,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const body = await response.json();

        return errors[body.code] || 'Ocorreu um erro ao cadastrar o post!'
    }

    return true;
}