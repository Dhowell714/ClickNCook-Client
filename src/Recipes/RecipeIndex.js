import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import APIURL from "../helpers/environment";
import NewRecipes from "./NewRecipes";
import RecipeEdit from "./RecipeEdit";
import RecipeTable from "./RecipeTable";

const RecipeIndex = (props) => {
    const [recipe, setRecipe] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [recipeToUpdate, setRecipeToUpdate] = useState([]);

    const fetchRecipes = () => {
        fetch(`${APIURL}/recipe`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => res.json())
        .then((recipeData) => {
            setRecipe(recipeData)
        })
    }
    useEffect(() => {
        fetchRecipes();
    }, [])

    const editUpdateRecipe = (recipe) => {
        setRecipeToUpdate(recipe);
        console.log(recipe);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    return(
        <Container>
            <Row>
                <Col md="3">
                    <NewRecipes fetchRecipes={fetchRecipes} token={props.token}/> 
                </Col>
                <Col md="9">
                    <RecipeTable recipe={recipe} editUpdateRecipe={editUpdateRecipe} updateOn={updateOn} fetchRecipes={fetchRecipes} token={props.token}/>
                    </Col>
                    {updateActive ? <RecipeEdit recipeToUpdate={recipeToUpdate} updateOff={updateOff} token={props.token} fetchRecipes={fetchRecipes}/> : <></>} 
            </Row>
        </Container>
    )
}

export default RecipeIndex;