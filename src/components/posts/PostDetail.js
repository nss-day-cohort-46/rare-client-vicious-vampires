import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Posts.css"

export const PostDetail = () => {

    const { deletePost, getPostById } = useContext(PostContext)

    const [post, setPost] = useState({})

    const history = useHistory()

    const { postId } = useParams()

    const handleDelete = () => {
        deletePost(post.id)
        .then(() => {
            history.push("/posts")
        })
    }

    useEffect(() => {
        getPostById(postId)
            .then((res) => {
                setPost(res)
            })
    }, [])

    return (
        <section className="post">
                <h3 className="postTitle">{post.title}</h3>
                <div className="postPublication_date">Date Published: {post.publication_date}</div>
                <div className="postContent">{post.content}</div>
                <div className="postCategory">Category: {post.category}</div>
            <div className="postDetailButtonDiv">
                <button className="button" onClick={() => {
                    history.push(`/posts/edit/${post.id}`)
                }}>Edit</button>
                <button className="button" onClick={handleDelete} >Delete</button>
            </div>
        </section>
    )
}