import React from "react"
import "./Category.css"
import {Link} from "react-router-dom"


export const CategoryCard = ({ category}) => (
    <section className="category">
        <h3 className="category__name">
            {/* displays name as hyperlink */}
        <Link to={`/categories/detail/${category.id}`}>
          { category.name }
        </Link>
        </h3>  
    </section>
)
