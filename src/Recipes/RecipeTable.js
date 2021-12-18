import React from "react";
import {Table, Button} from 'reactstrap';

const RecipeTable = (props) => {
    console.log(props)
    const deleteRecipes = (recipes) => {
        fetch(`http://localhost:3000/recipe/${recipes.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchRecipes())
    }

    const recipeMapper = () => {
        return props.recipes.map((recipe, index) => {
            <tr key={index}>
                <th scope="row">{recipe.id}</th>
                <td>{recipe.name}</td>
                <td>{recipe.directions}</td>
                <td>{recipe.cookTime}</td>
                <td>{recipe.servingSize}</td>
                <td>{recipe.category}</td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.substitutions}</td>
                <td>
                    <Button color="warning" onClick={() => {props.editUpdateRecipe(recipe); props.updateOn()}}>Update</Button>
                    <Button color="danger" onclick={() => {deleteRecipes(recipe)}}>Delete</Button>
                </td>
            </tr>
        })
    }

    return(
        <>
        <h3>Recipe History</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Directions</th>
                    <th>Cook Time</th>
                    <th>Serving Size</th>
                    <th>Category</th>
                    <th>Ingredients</th>
                    <th>Substitutions</th>
                </tr>
            
        </thead>
        <tbody>
            {recipeMapper()}
        </tbody>
    </Table>
        </>
    )
}

export default RecipeTable;