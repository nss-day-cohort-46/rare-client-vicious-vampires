import React from "react"
import "./Posts.css"
import { Link } from "react-router-dom"

export default ({ post }) => (
    <section className="singlePost">
        <h3 className="post__title">
            <Link to={`/posts/${post.id}`}>
                { post.title }
            </Link>
        </h3>
        <div className="post__content">{ post.publication_date }</div>
        <div className="post__content">{ post.content }</div>
    </section>
)