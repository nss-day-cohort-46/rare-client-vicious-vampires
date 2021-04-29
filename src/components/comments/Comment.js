import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { CommentContext } from "./CommentProvider"

export const CommentCard = ({ comment }) => {
    const history = useHistory()
    const { deleteComment } = useContext(CommentContext)

    const handleDelete = () => {
        deleteComment(comment.id)
            .then(() => {
                history.push("/comments")
            })
    }

    return (
        <section className="comment">
            <button id={comment.id} onClick={handleDelete}></button>
        </section>
    )
}