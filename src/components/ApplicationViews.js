import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./posts/PostProvider"
import { TagProvider } from "./tags/TagsProvider"
import { TagList } from "./tags/TagList" 
import { PostList } from "./posts/PostList"

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

     {/* Tag Area    */}
        <TagProvider>
            <Route exact path="/tags">
                <TagList />
            </Route>
        </TagProvider>
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
