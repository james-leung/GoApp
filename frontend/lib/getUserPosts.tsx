export default async function getUser(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 } });

    if (!res.ok) {
        throw new Error('Cannot get user');
    }

    return res.json(); 
} 