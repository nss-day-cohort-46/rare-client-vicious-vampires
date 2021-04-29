import React, {useState, createContext} from "react"

export const CommentProvider = (props) => {

    const [comments, setComments] = useState()
    
    const getComments = () =>  {
        return fetch("http://localhost:8088/comments")
            .then(res => res.json())
            .then(setComments)
    }

    const addComment = commentObj => {
        return fetch ("http://localhost:8088/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentObj)
        })
            .then(getComments)
    }

    const deleteComment = commentId => {
        return fetch(`http://localhost:8088/comments/${commentId}`, {
            method: "DELETE"
        })
            .then(getComments)
    }

    const editComment = comment=> {
        return fetch (`http://localhost:8088/comments/${comment.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(getComments)
    }

    const getCommentByPostId = (post) => {
        return fetch(`http://localhost:8088/comments/${post.id}`)
            .then(res => res.json())        
    }


    return (
        <CommentContext.Provider value={{
            comments, getComments, addComment, deleteComment, editComment
        }}>
            {props.children}
        </CommentContext.Provider>
    )
}