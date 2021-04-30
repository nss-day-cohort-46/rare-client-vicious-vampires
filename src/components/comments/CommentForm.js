import React, { useContext, useEffect, useState } from "react";
import { CommentContext } from "./CommentProvider";
import { useHistory, useParams } from "react-router-dom"

export const CommentForm = () => {
    const {addComment, editComment, getCommentByPostId } = useContext(CommentContext)
    const { commentId, postId } = useParams()
    
    const [comment, setComment] = useState({
        subject: "",
        content: "",
        created_on: "",
        post_id: +postId,
        author_id: +localStorage.getItem("rare_user_id")
    })

    const [isloading, setIsLoading] = useState(true)

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
            setIsLoading(true);

            if (commentId) {
                editComment({
                    subject: comment.subject,
                    content: comment.content,
                    created_on: comment.created_on,
                    post_id: comment.post_id,
                    author_id: localStorage.getItem("rare_user_id")
                })
                    .then(() => history.push("/comments"))
            } else {
                  addComment(comment)
                    .then(() => history.push("/comments"))
            }
        }
    }

    useEffect(() => {
        if(commentId) {
            getCommentByPostId(postId)
                .then(post => {
                    setComment(post)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
    }, [])

    return (
        <form className="commentForm">
            <h2 className="comment_form">{commentId ? "Edit Comment" : "Add Comment"}</h2>
            <fieldset>
                <div className="form-group">
                    <label>Subject</label>
                    <textarea type="text" id="subject" required autoFocus className="form-control" onChange={handleControlledInputChange} value={comment.subject} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Content</label>  
                    <textarea type="text" id="content" required autoFocus className="form-control" onChange={handleControlledInputChange} value={comment.content} />
                </div>
            </fieldset>

            <button className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    handleSaveComment()
                }}>
                    {commentId ? "Add Comment" : "Save Comment"}
            </button>
        </form>
    )
}