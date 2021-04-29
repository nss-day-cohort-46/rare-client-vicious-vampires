import React, { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../categories/CategoryProvider"
import "../categories/Category.css"
import { useHistory } from 'react-router-dom';

export const CategoryForm = () => {
    const {addCategory} = useContext(CategoryContext)
    const {getCategories } = useContext(CategoryContext)
   
       /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
    Define the intial state of the form inputs with useState()
    */

    const [categories, setCategories] = useState({
      label: "",
      id: 0,
      
    });

    const history = useHistory();

    /*
    Reach out to the world and get categories state
    on initialization.
    */
    useEffect(() => {
      getCategories()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
     
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newCategory = { ...categories }
      let selectedVal = event.target.value
      // forms always provide values as strings. But we want to save the ids as numbers. 
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      /* Category is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newCategory[event.target.id] = selectedVal
      // update state
      setCategories(newCategory)
    }

    const handleClickSaveLocation = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

        //invoke addCategoey passing categories as an argument.
        //once complete, change the url and display the categories list
        addCategory(categories)
        .then(() => history.push("/categories"))
      }
    

    return (
      <form className="category__form">
          <h2 className="categoryForm__title">New Category</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="category__label">Category Name:</label>
                  <input className="category__label" type="text" id="label" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Category Name" value={categories.label}/>
              </div>
          </fieldset>
          
          
         <button className="button save_new_cat_button"
            onClick={handleClickSaveLocation}>
            Save 
          </button>
      </form>
    )
}