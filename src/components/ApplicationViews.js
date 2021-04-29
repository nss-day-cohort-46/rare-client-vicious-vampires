import React from "react"
import { Route } from "react-router-dom"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CategoryList } from "./categories/CategoryList"

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
            </CategoryProvider>

            {/* Comment Area    */}

            {/* Tag Area    */}

            {/* Post Area    */}


        </>
    )
}
