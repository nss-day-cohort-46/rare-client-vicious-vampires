import React from "react"
import { Route } from "react-router-dom"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CategoryList } from "./categories/CategoryList"
import {CategoryForm} from "./categories/CategoryForm"
import {CategoryDetail} from "./categories/CategoryDetail"
import { PostProvider } from "./posts/PostProvider"
import { TagProvider } from "./tags/TagsProvider"
import { TagList } from "./tags/TagList" 
import { PostList } from "./posts/PostList"
import { PostForm } from "./posts/PostForm"
import { PostDetail } from "./posts/PostDetail"
import { TagForm } from "./tags/TagForm"

 
export const ApplicationViews = () => {
    return (
        <>
            <main style={{
                margin: "5rem 2rem",
                lineHeight: "1.75rem"
            }}>
            </main>

            {/* Category Area    */}
            <CategoryProvider>
                <Route exact path="/categories">
                    <CategoryList />
                </Route>
                <Route path="/categories/create">
                    <CategoryForm />
                </Route>

                {/* <Route exact path="/categories/detail/:categoryId(\d+)">
                            <CategoryDetail />
                </Route> */}
            </CategoryProvider>

            
     {/* Tag Area    */}
        <TagProvider>
            <Route exact path="/tags">
                <TagList />
            </Route>
            <Route exact path="/tags/edit/:tagId(\d+)">
                <TagForm/>
            </Route>
            <Route exact path="/tags/create">
                <TagForm/>
            </Route>
        </TagProvider>
    {/* Post Area    */}
        <CategoryProvider>
            <PostProvider>

                <Route exact path="/posts">
                    <PostList />
                </Route>

                <Route exact path="/posts/create">
                    <PostForm />
                </Route>
                
                <Route exact path="/posts/edit/:postId(\d+)">
                    <PostForm />
                </Route>

                <Route exact path="/posts/detail/:postId(\d+)">
                    <PostDetail />
                </Route>

            </PostProvider>
        </CategoryProvider>

            {/* Comment Area    */}

            {/* Tag Area    */}

            {/* Post Area    */}


        </>
    )
}
