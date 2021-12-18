import React, {useState} from "react";
import APIURL from "../../helpers/environment";

const Categories = (props) => {

    fetch(`${APIURL}/recipe/category/dessert`, {
    method: 'GET',
    header: new Headers({
        'Content-Type': 'application/json',
        //'Authorization': props.token
    })
}) .then((response) => response.json())
    .then((dessert) => {
        console.log(dessert)
    })

    return(
        <h1>Category stuff goes here</h1>
    );
};

export default Categories;