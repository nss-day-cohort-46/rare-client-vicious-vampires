import React, { useContext, useEffect } from "react"
import { CommentContext } from "./CommentProvider"
import { CommentCard } from "./Comment"
import { CommentForm } from "./CommentForm"

export const CommentList = () => {
    const { comments, getComments } = useContext(CommentContext)

    useEffect(() => {
        getComments()
    }, [])

    return (
        <>
            <h2>Comment List</h2>
            <div className="comments">

            </div>
            <div>
                <CommentForm />
            </div>
        </>
    )
}