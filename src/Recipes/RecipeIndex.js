import React, { useEffect, useState } from "react";
import {Container, Row, Col} from 'reactstrap';
import NewRecipes from "./NewRecipes";
import RecipeTable from "./RecipeTable";

const RecipeIndex = (props) => {
    const [recipe, setRecipe] = useState([]);
    const fetchRecipes = () => {
        fetch('http://localhost:3000/recipe', {
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

    useEffect(() => {
        fetchRecipes();
    }, [])

    return(
        <Container>
    <Row>
        <Col md="3">
            <NewRecipes fetchRecipes={fetchRecipes} token={props.token}/>
            {/*Create component here*/ }
        </Col>
        <col md="9">
            <RecipeTable recipe={recipe} fetchRecipes={fetchRecipes} token={props.token}/>
        </col>
    </Row> 
        </Container>
    )
}

export default RecipeIndex;