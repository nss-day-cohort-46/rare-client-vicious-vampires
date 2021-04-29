import React, { useContext, useState } from "react";
import { CommentContext } from "./CommentProvider";
import { useHistory, useParams } from "react-router-dom"

export const CommentForm = () => {
    const {addComment, editComment} = useContext(CommentContext)
    
    const [comment, setComment] = useSate({
        subject: "",
        content: "",
        created_on: ""
    })

    const { commentId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newComment = { ...comment }
        newComment[event.target.id] = event.target.value
        newComment.created_on = Date.now()
        setComment(newComment)
    }

    const handleSaveComment = () => {
        if (comment.subject === "") {
            window.alert("Cannot post blank comment")
        } else {
            if (commentId) {
                editComment({
                    id: comment.id,
                    subject: comment.subject,
                    content: comment.content,
                    created_on: comment.created_on
                })
                    .then(() => history.push("/comments"))
            } else {
                addComment(comment)
                    .then(() => history.push("/comments"))
            }
        }
    }

    return (
        <form className="commentForm">
            <fieldset>
                <div className="form-group">
                    <textarea type="text" id="subject" required autoFocus className="form-control" onChange={handleControlledInputChange} value={comment.subject} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <textarea type="text" id="content" required autoFocus className="form-control" onChange={handleControlledInputChange} value={comment.content} />
                </div>
            </fieldset>

            <button className="btn btn-primary"
                onClick={event => {
                    handleSaveComment()
                }}>Save Comment</button>
        </form>
    )
}