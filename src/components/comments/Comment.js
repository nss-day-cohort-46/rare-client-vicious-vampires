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
        <section className="comment_card_section">
        <h2 className="comment_subject"> {comment.subject} </h2>
        <div className="comment_content"> {comment.content}</div>
        <div className="comment_date_time"> {comment.created_on} </div>

        <div className="delete_comment">
            <button id={comment.id} onClick={handleDelete}></button>
        </div>
        </section>
    )

}
