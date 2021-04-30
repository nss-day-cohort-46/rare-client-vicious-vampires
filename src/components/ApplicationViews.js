import React from "react"
import { Route } from "react-router-dom"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CategoryList } from "./categories/CategoryList"
import { CategoryForm } from "./categories/CategoryForm"
import { PostProvider } from "./posts/PostProvider"
import { TagProvider } from "./tags/TagsProvider"
import { TagList } from "./tags/TagList" 
import { TagForm } from "./tags/TagForm" 
import { PostList } from "./posts/PostList"
import { PostForm } from "./posts/PostForm"
import { CommentProvider } from "./comments/CommentProvider"
import { CommentList } from "./comments/CommentList"
import { CommentForm} from "./comments/CommentForm"
import { CommentDetail } from "./comments/CommentDetail"


export const ApplicationViews = () => {

    return (
        <>
            <main style={{
                margin: "5rem 2rem",
                lineHeight: "1.75rem"
            }}>
            </main>

  
     
     {/* Comment Area   <Route exact path="/posts/:postId(\d+)/createcomment"> */}
        <CommentProvider>
            <PostProvider>
                <Route exact path="/comments">
                    <CommentList />
                </Route>
                <Route exact path="/comments/create">
                    <CommentForm />
                </Route>
                <Route path="/comments/edit/:commentId(\d+)">
                    <CommentForm />
                </Route>
                <Route path="/comments/details/${comment.id}">
                    <CommentDetail />
                </Route>
            </ PostProvider>
        </CommentProvider>

            {/* Category Area    */}
            <CategoryProvider>
                <Route exact path="/categories">
                    <CategoryList />
                </Route>

                <Route exact path="/categories/create">
                    <CategoryForm />
                </Route>

                <Route exact path="/categories/edit/:categoryId(\d+)">
                    <CategoryForm />
                </Route>
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

            {/* Tag Area    */}
            { <TagProvider>
                <Route exact path="/tags">
                    <TagList />
                </Route>
            </TagProvider>
            {/* Post Area    */}
            <PostProvider>
                <Route exact path="/posts">
                    <PostList />
                </Route>
            </PostProvider>

                <Route path="/posts/create">
                <PostForm />
            </Route>
                 <PostProvider>
                    {/* <Route exact path="/categories/detail/:categoryId(\d+)">
                            <CategoryDetail />
                </Route> 
                {</PostProvider>


                {/* Tag Area    */}
                <TagProvider>
                    <Route exact path="/tags">
                        <TagList />
                    </Route>
                    <Route exact path="/tags/edit/:tagId(\d+)">
                        <TagForm />
                    </Route>
                    <Route exact path="/tags/create">
                        <TagForm />
                    </Route>
                </TagProvider>
        </CategoryProvider>


                {/* Post Area    */}
                <CategoryProvider>
                    <PostProvider>

                        <Route exact path="/posts">
                            <PostList />
                        </Route>

                        <Route exact path="/posts/create">
                            <PostForm />
                        </Route>

                    </PostProvider>
                </CategoryProvider> 


        </>
    )

}
