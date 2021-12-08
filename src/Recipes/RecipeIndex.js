import React, { useEffect, useState } from "react";
import {Container, Row, Col} from 'reactstrap';

const RecipeIndex = (props) => {
    const [recipe, setRecipe] = useState([]);
    const createRecipe = () => {
        fetch('http://localhost:3001/newrecipes', {
            method: 'POST',
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
        createRecipe();
    }, [])

    return(
        <Container>
    <Row>
        <Col md="3">
            {/*Create component here*/ }
        </Col>
    </Row> 
        </Container>
    )
}

export default RecipeIndex;