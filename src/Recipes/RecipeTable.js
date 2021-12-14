// import React from "react";
// import {Table, Button} from 'reactstrap';

// const RecipeTable = (props) => {
//     console.log(props)
//     const deleteRecipes = (recipes) => {
//         fetch(`http://localhost:3000/recipe/${recipes.id}`, {
//             method: 'DELETE',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         })
//         .then(() => props.fetchRecipes())
//     }

//     const recipeMapper = () => {
//         return props.recipes.map((recipes, index) => {
//             <tr key={index}>
//                 <th scope="row">{recipes.id}</th>
//                 <td>{recipes.name}</td>
//                 <td>{recipes.directions}</td>
//                 <td>{recipes.cookTime}</td>
//                 <td>{recipes.servingSize}</td>
//                 <td>{recipes.category}</td>
//                 <td>{recipes.ingredients}</td>
//                 <td>{recipes.substitutions}</td>
//                 <td>
//                     <Button color="warning">Update</Button>
//                     <Button color="danger" onclick={() => {deleteRecipes(recipes)}}>Delete</Button>
//                 </td>
//             </tr>
//         })
//     }

//     return(
//         <>
//         <h3>Recipe History</h3>
//         <hr/>
//         <thead striped>
//             <Table>
//                 <tr>
//                     <th>#</th>
//                     <th>Name</th>
//                     <th>Directions</th>
//                     <th>Cook Time</th>
//                     <th>Serving Size</th>
//                     <th>Category</th>
//                     <th>Ingredients</th>
//                     <th>Substitutions</th>
//                 </tr>
//             </Table>
//         </thead>
//         </>
//     )
// }

// export default RecipeTable;