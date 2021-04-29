import React from "react"
import "./Category.css"

export const CategoryCard = ({ category }) => (
    <section className="category">
        <h3 className="category__name">{category.name}</h3>
    </section>
)