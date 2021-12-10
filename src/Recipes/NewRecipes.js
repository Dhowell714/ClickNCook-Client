import React, {useState, useEffect} from "react";
import {Button, Form, FormGroup, Label, Input} from "reactstrap";
import Header from "../components/site/Header";

const NewRecipes = (props) => {
    const [name, setName] = useState('');
    const [directions, setDirections] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [servingSize, setServingSize] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [substitutions, setSubstitutions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/recipe/create', {
            method: 'POST',
            body: JSON.stringify({recipe: {name, directions, cookTime, servingSize, category, ingredients, substitutions}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((recipeData) => {
            console.log(recipeData)
            setDirections('');
            setCookTime('');
            setServingSize('');
            setCategory('');
            setIngredients('');
            setSubstitutions('');
            props.fetchRecipes();
        })
    }

    return(
        <>
          <h3>Create a Recipe</h3>
          <Form>
              <FormGroup>
                  <h4>Recipe Name</h4>
                  <Label htmlFor="name"/>
                  <Input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                  <h4>Enter Recipe directions</h4>
                  <Label htmlFor="directions"/>
                  <Input name="directions" value={directions} onChange={(e) => setDirections(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                  <h4>Cook Time</h4>
                  <Label htmlFor="cookTime"/>
                  <Input name="cookTime" value={cookTime} onChange={(e) => setCookTime(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                  <h4>Serving Size</h4>
                  <Label htmlFor="servingSize"/>
                  <Input name="servingSize" value={servingSize} onChange={(e) => setServingSize(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                  <h4>Category</h4>
                  <Label htmlFor="category"/>
                  <Input name="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                    {/* <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option> */}
              </FormGroup>
              <FormGroup>
                  <h4>Ingredients</h4>
                  <Label htmlFor="ingredients"/>
                  <Input name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                  <h4>Ingredient sunstitutions</h4>
                  <Label htmlFor="substitutions"/>
                  <Input name="sunstitutions" value={substitutions} onChange={(e) => setSubstitutions(e.target.value)}/>
              </FormGroup>
              <Button type="submit">Click to Submit</Button>
          </Form>
        </>
    )
}

export default NewRecipes;