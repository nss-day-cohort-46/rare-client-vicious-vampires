import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./posts/PostProvider"
import { PostList } from "./posts/PostList"
import { CommentProvider } from "./comments/CommentProvider"
import { CommentList } from "./comments/CommentList"
import { CommentForm} from "./comments/CommentForm"

export const ApplicationViews = () => {
    return (
        <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main>

     {/* Category Area    */}
     
     {/* Comment Area    */}
        <CommentProvider>
            <Route exact path="/comments">
                <CommentList />
            </Route>
            <Route exact path="/posts/:postId(\d+)/createcomment">
                <CommentForm />
            </Route>
            <Route path="/comments/edit/:commentId(\d+)">
                <CommentForm />
            </Route>
        </CommentProvider>

     {/* Tag Area    */}

    {/* Post Area    */}
        <PostProvider>
            <Route exact path="/posts">
                <PostList />
            </Route>

            {/* <Route path="/posts/create">
                <PostForm />
            </Route> */}
        </PostProvider>

    </>
    )
}
