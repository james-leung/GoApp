type Props = {
    promise: Promise<Post[]>
}

export default async function UserPosts({ promise }: Props) {
    const posts = await promise

    return (
        <>
            {posts.map(post => {
                return (
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </article>
                )
            })}
        </>
    )
}