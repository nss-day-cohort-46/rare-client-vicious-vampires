import React, { useState, useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { PostContext } from "./PostProvider"
import "./Posts.css"

export const PostForm = () => {

    const { addPost, getPostById, updatePost } = useContext(PostContext)
    // const { categories, getCategories } = useContext(PostContext)

    const [ post, setPost ] = useState({
        user_id: 0,
        category_id: 0,
        title: "",
        publication_date: Date.now(),
        content: "",
        approved: true
    })

    console.log(post)

    const [ isLoading, setIsLoading ] = useState(true)

    const history = useHistory()
    const { postId } = useParams()
    
    // useEffect(() => {
    //     getCategories()
    // }, [])

    const handleControlledInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.id] = event.target.value
        setPost(newPost)
    }


    const  handleSavePost = () => {
        // if (parseInt(post.category_id) === 0) {
        //     window.alert("Please select a category")
        // } else {
        //     setIsLoading(true)
            if (postId) {
                updatePost({
                    id: post.id,
                    user_id: parseInt(localStorage.getItem("rare_user_id")),
                    category_id: post.category_id,
                    title: post.title,
                    publication_date: post.publication_date,
                    content: post.content,
                    approved: post.approved
                })
                    .then(() => history.push(`/posts/detail/${post.id}`))
            } else {
                addPost({
                    user_id: parseInt(localStorage.getItem("rare_user_id")),
                    category_id: post.category_id,
                    title: post.title,
                    publication_date: post.publication_date,
                    content: post.content,
                    approved: post.approved
                })
                    .then(() => history.push("/posts"))
            }
        }
    // } 

    useEffect(() => {
        if (postId) {
            // getCategories()
            getPostById(postId)
            .then(post => {
                setPost(post)
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <section className="postFormSection">
            <form className="postForm">
                <h2 className="postFormTitle">{postId ? "Update Post" : "Create a Post"}</h2>
                <fieldset>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" required autoFocus
                        placeholder="Post Title"
                        defaultValue={post.title}
                        onChange={handleControlledInputChange}
                        ></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="content"></label>
                    <textarea type="text" id="content" required autoFocus className="formControl postTextArea"
                        placeholder="Enter Text Here"
                        onChange={handleControlledInputChange}
                        defaultValue={post.content}></textarea>
                </fieldset>
                <button disabled={isLoading}
                        className="button savePostButton"
                        onClick={evt => {
                            evt.preventDefault()
                            handleSavePost()
                        }}>
                    {postId ? "Save Updates" : "Create Post"}
                </button>
            </form>
        </section>
    )

}