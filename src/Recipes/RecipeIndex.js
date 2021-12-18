import React, { useState, useEffect  } from "react";
import {Container, Row, Col} from 'reactstrap';
import NewRecipes from "./NewRecipes";
import RecipeTable from "./RecipeTable";
import APIURL from "../helpers/environment";
import RecipeEdit from "./RecipeEdit";

const RecipeIndex = (props) => {
    const [recipe, setRecipe] = useState([]);
    const fetchRecipes = () => {
        fetch(`${APIURL}/recipe`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( (res) => res.json())
        .then((logData) => {
            setRecipe(logData)
            console.log(logData)
        })
    }
    const NewRecipes = (props) => {
        console.log(props)
        const [name, setName] = useState('');
        const [directions, setDirections] = useState('');
        const [cookTime, setCookTime] = useState('');
        const [servingSize, setServingSize] = useState('');
        const [category, setCategory] = useState('');
        const [ingredients, setIngredients] = useState('');
        const [substitutions, setSubstitutions] = useState('');
        const token = localStorage.getItem('token')
        const [recipe, setRecipe] = useState([]);
        
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(props)
            fetch(`${APIURL}/recipe/create`, {
                method: 'POST',
                body: JSON.stringify({recipe: {name, directions, cookTime, servingSize, category, ingredients, substitutions}}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization':  "Bearer " + token
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
                fetchRecipes();
            })
        }
    useEffect(() => {
        fetchRecipes();
    }, [])
console.log(fetchRecipes)

    return(
        <Container>
    <Row>
        <Col md="3">
            <NewRecipes fetchRecipes={fetchRecipes} token={props.token}/>
            {/*Create component here*/ }
        </Col>
        <col md="9">
            {/* <RecipeTable recipe={recipe} fetchRecipes={fetchRecipes} token={props.token}/> */}
        </col>
    </Row> 
        </Container>
    )
}
}
export default RecipeIndex;