import React, { useContext, useEffect } from "react"
import { CommentContext } from "./CommentProvider"
import { CommentCard } from "./Comment"
import { CommentForm } from "./CommentForm"

export const CommentList = () => {
    const { comments, getComments } = useContext(CommentContext)

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <>
            <h2>Comment List</h2>
            <div className="comments">
                {messages.map(comment => {                    
                    return <CommentCard key={comment.id} comment={comment} />
                })}
            </div>
            <div>
                <CommentForm />
            </div>
        </>
    )
}