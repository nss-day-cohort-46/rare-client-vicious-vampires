import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { PostContext } from "./PostProvider"
import "./Posts.css"

export const PostForm = (props) => {
    const { posts, getPosts, addPost, updatePost } = useContext(PostContext)

    const [ post, setPost ] = useState({
        user_id: 0,
        category_id: 0,
        title: "",
        publication_date: "",
        content: "",
        approved: ""
    })

    const history = useHistory()

    const editMode = props.match.params.hasOwnProperty("postId")

    const handleControlledInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.id] = event.target.value
        setPost(newPost)
    }

    const postInEditMode = (props) => {
        if (editMode) {
            const postId = parseInt(props.match.params.postId)
            const chosenPost = posts.find(post => post.id === postId) || {}
            setPost(chosenPost)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        postInEditMode()
    }, [posts])

    const  handleSavePost = () => {
        if(category_id === 0) {
            window.alert("Please select a category")
        } else {
            if (editMode) {
                updatePost ({
                    id: post.id,
                    user_id: parseInt(localStorage.getItem("rare_user_id")),
                    category_id: category_id,
                    title: title,
                    publication_date: publication_date,
                    content: content,
                    approved: approved
                })
                    .then(() => props.history.push("/posts"))
            } else {
                addPost({
                    user_id: parseInt(localStorage.getItem("rare_user_id")),
                    category_id: category_id,
                    title: title,
                    publication_date: publication_date,
                    content: content,
                    approved: approved
                })
                    .then(() => props.history.push("/posts"))
            }
        }
    } 

    return (

        <form className="postForm">
            <h2 className="postFormTitle">{editMode ? "Update Post" : "Create a Post"}</h2>
            <fieldset>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" required autoFocus
                    placeholder="Post Title"
                    defaultValue={post.title}
                    onChange={handleControlledInputChange}
                    ></input>
            </fieldset>
            <fieldset>
                <label htmlFor="date">Date of Publication: </label>
                <input type="date" id="date" required autoFocus className="formControl"
                    onChange={handleControlledInputChange}
                ></input>
            </fieldset>
            <fieldset>
                <label htmlFor="content"></label>
                <textarea type="text" id="content" required autoFocus className="formControl"
                    placeholder="Enter Text Here"
                    onChange={handleControlledInputChange}
                ></textarea>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    handleSavePost()
                }}
                className="button savePostButton">
                {editMode ? "Save Updates" : "Create Post"}
            </button>
        </form>
    )

}