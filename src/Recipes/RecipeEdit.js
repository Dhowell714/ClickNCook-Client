import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from "../helpers/environment";
// import NewRecipes from "./NewRecipes";
import RecipeIndex from "./RecipeIndex";
import NewRecipes from "./NewRecipes";

const RecipeEdit = (props) => {
    // const [recipe, setRecipe] = useState('')
    const [recipe, setRecipe] = useState([]);
    const [editName, setEditName] = useState(props.recipeId.name);
    const [editDirections, setEditDirections] = useState(props.recipeId.directions);
    const [editCookTime, setEditCookTime] = useState(props.recipeId.cookTime);
    const [editServingSize, setEditServingSize] = useState(props.recipeId.servingSize);
    const [editCategory, setEditCategory] = useState(props.recipeId.category);
    const [editIngredients, setEditIngredients] = useState(props.recipeId.ingredients);
    const [editSubstitutions, setEditSubstitutions] = useState(props.recipeId.substitutions);
    const token = localStorage.getItem('token')
    const recipeUpdate = (event) => {


    event.preventDefault();
    
    fetch(`${APIURL}/recipe/update/${props.recipesToUpdate.id}` , {
        method: 'PUT',
        body: JSON.stringify({recipe: {name: editName, directions: editDirections, cookTime: editCookTime, servingSize: editServingSize, category: editCategory, ingredients: editIngredients, substitutions: editSubstitutions} }), 
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then((res) => {
        props.fetchRecipes();
        props.updateOff();
    })
    const fetchRecipes = () => {
        fetch(`${APIURL}/recipe/all`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            })
        }) .then( (res) => res.json())
        .then((logData) => {
            setRecipe(logData)
            console.log(logData)
        })
    }


    return(
        <Modal isOpen={true}>
          <ModalHeader>Edit a Recipe</ModalHeader>
          <ModalBody>
              <Form onSubmit={recipeUpdate}>
              <FormGroup>
                  <Label htmlFor="substitutions">Edit Substitution</Label>
                  <Input name="substitutions" value={editSubstitutions} onChange={(e) => setEditSubstitutions(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="ingredients">Edit Ingredients</Label>
                  <Input name="ingredients" value={editIngredients} onChange={(e) => setEditIngredients(e.target.value)}/>
              </FormGroup>
              <FormGroup>
              <Label htmlFor="category">Edit Category</Label>
                  <Input type="select" name="category" value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                </Input> 
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="servingSize">Edit Serving Size</Label>
                  <Input name="servingSize" value={editServingSize} onChange={(e) => setEditServingSize(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="cookTime">Edit Cook Time</Label>
                  <Input name="cookTime" value={editCookTime} onChange={(e) => setEditCookTime(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="directions">Edit Directions</Label>
                  <Input name="directions" value={editDirections} onChange={(e) => setEditDirections(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="name">Edit Name</Label>
                  <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)}/>
              </FormGroup>
              <Button type="submit">Update Recipe</Button>
              </Form>
          </ModalBody>
        </Modal>
    )
    }
}
export default RecipeEdit;