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
        publication_date: "",
        content: "",
        approved: ""
    })

    console.log(post)

    const [ isLoading, setIsLoading ] = useState(true)

    const history = useHistory()
    const { postId } = useParams()
    

    const handleControlledInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.id] = event.target.value
        setPost(newPost)
    }

    useEffect(() => {
        // getCategories()
    }, [])

    // const  handleSavePost = () => {
    //     if (parseInt(post.category_id) === 0) {
    //         window.alert("Please select a category")
    //     } else {
    //         setIsLoading(true)
    //         if (postId) {
    //             updatePost ({
    //                 id: post.id,
    //                 user_id: parseInt(localStorage.getItem("rare_user_id")),
    //                 category_id: category_id,
    //                 title: title,
    //                 publication_date: publication_date,
    //                 content: content,
    //                 approved: approved
    //             })
    //                 .then(() => history.push(`/posts/detail/${post.id}`))
    //         } else {
    //             addPost({
    //                 user_id: parseInt(localStorage.getItem("rare_user_id")),
    //                 category_id: category_id,
    //                 title: title,
    //                 publication_date: publication_date,
    //                 content: content,
    //                 approved: approved
    //             })
    //                 .then(() => history.push("/posts"))
    //         }
    //     }
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
            <button disabled={isLoading}
                    className="button savePostButton"
                    onClick={evt => {
                    evt.preventDefault()
                    // handleSavePost()
                }}>
                {postId ? "Save Updates" : "Create Post"}
            </button>
        </form>
    )

}