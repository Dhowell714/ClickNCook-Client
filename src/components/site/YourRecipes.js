import React, { useState } from "react";
import APIURL from "../../helpers/environment";

function fetchResults() {

    
    
    const token = localStorage.getItem('token')
    console.log("fetchResults() called")
    // event.preventDefault();
fetch(`${APIURL}/recipe/mine`, {
// fetch(`http://localhost:3000/recipe/mine`, {
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token
        // "Authorization": "Bearer " + token
    })
})
.then(res => {
  return res.json()
})
// .then(data => console.log(data))
.then(data => {
    console.log("DATA");
    console.log(data)


})
}

const YourRecipes = () => {
    return(
        <div>
        
        <h1>YourRecipes stuff goes here</h1>
        
        <form>
            {/* <input type="text" id="searchName" name="searchName"></input> */}
            <input type="button" value="Submit" onClick={fetchResults}></input>
        </form>


        </div>
    );
};

export default YourRecipes;