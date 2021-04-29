import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { PostContext } from "./PostProvider"
import "./Posts.css"

export const PostForm = (props) => {
    const { posts, getPosts, addPost, updatePost } = useContext(PostContext)

    const [ post, setPost ] = useState({})

    const editMode = props.match.params.hasOwnProperty("postId")

    const handleControlledInputChange = (event) => {
        const newPost = Object.assign({}, post)
        newPost[event.target.id] = event.target.value
        setPost(newPost)
    }

    const postInEditMode = () => {
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
            }
        }
    } 


}