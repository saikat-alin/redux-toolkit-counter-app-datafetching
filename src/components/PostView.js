import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../reducer/PostSlice';

const PostView = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div style={{marginTop:"50px"}}>
            <h1>Redux-Toolkit Data Fetching</h1>
            {isLoading && <h5>Loading.....</h5>}
            {error && <h5>{error}</h5>}
            <section>
                {posts && posts.map((post) => {
                    return <article>
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                    </article>
                })}
            </section>

        </div>
    )
}

export default PostView