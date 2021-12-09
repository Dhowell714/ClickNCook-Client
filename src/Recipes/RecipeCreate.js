import React, {useState, useEffect} from "react";
import {Button, Form, FormGroup, Label, Input} from "reactstrap";
import Header from "../components/site/Header";

const RecipeCreate = (props) => {
    const [name, setName] = useState('');
    const [directions, setDirections] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [servingSize, setServingSize] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [substitutions, setSubstitutions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/newrecipes', {
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
                  <Label htmlFor="name"/>
                  <Input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
              </FormGroup>
          </Form>
        </>
    )
}