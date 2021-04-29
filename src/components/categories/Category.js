import React, { useContext, onCancel, onConfirm } from "react"
import { CategoryContext, CategoryProvider } from "../categories/CategoryProvider"
import { Link, useHistory } from "react-router-dom"
import "./Category.css"



export const CategoryCard = ({ category }) => {

    const { deleteCategory } = useContext(CategoryContext)
    const history = useHistory()

    const handleDelete = () => {
        if (window.confirm('Are you sure you wish to delete this category?')) {
            deleteCategory(category.id)
                .then(() => {
                    history.push("/categories")
                })

        }
    }


    return (

        <section className="category">
            <h3 className="category__name">Categories</h3>
            <h3 className="category__name">{category.label}</h3>
            <div><button onClick={handleDelete}>Delete</button>
                <button onClick={() => {
                    history.push(`/categories/edit/${category.id}`)
                }}>Edit</button></div>

        </section>
    )
}

