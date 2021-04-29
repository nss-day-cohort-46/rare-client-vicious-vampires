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

                <Route exact path="/categories/detail/:categoryId(\d+)">
                            <CategoryDetail />
                        </Route>
            </CategoryProvider>

            
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

            <Route path="/posts/create">
                <PostForm />
            </Route>
        </PostProvider>

            {/* Comment Area    */}

            {/* Tag Area    */}

            {/* Post Area    */}


        </>
    )
}
