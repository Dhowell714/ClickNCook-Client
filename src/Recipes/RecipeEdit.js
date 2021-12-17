import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from "../helpers/environment";
import fetchRecipes from "..components/NewRecipes";
const RecipeEdit = (props) => {
    const [editName, setEditName] = useState(props.recipesToUpdate.name);
    const [editDirections, setEditDirections] = useState(props.recipesToUpdate.directions);
    const [editCookTime, setEditCookTime] = useState(props.recipesToUpdate.cookTime);
    const [editServingSize, setEditServingSize] = useState(props.recipesToUpdate.servingSize);
    const [editCategory, setEditCategory] = useState(props.recipesToUpdate.category);
    const [editIngredients, setEditIngredients] = useState(props.recipesToUpdate.ingredients);
    const [editSubstitutions, setEditSubstitutions] = useState(props.recipesToUpdate.substitutions);
    const recipeUpdate = (event, recipe) => {


    event.preventDefault();
    fetch(`${APIURL}/recipe/${props.recipesToUpdate.id}` , {
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

export default RecipeEdit;