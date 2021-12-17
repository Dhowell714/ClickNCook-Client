import React, { useState } from "react";
import APIURL from "../../helpers/environment";

function fetchResults() {

    // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjM5NjAwMzYyLCJleHAiOjE2Mzk2ODY3NjJ9.ucJMAPECMQzjlRjG-38Hhhzd_wPrRrSGQ7n9-rFv90U'
    
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

    var RemovedisplayName = document.getElementById("displayName");
            if(typeof(RemovedisplayName) != 'undefined' && RemovedisplayName != null){
                console.log("line 34")
            
            for (let i = 0; i < data.length; i++) {
                    console.log('Element exists!');
                    // RemovedisplayName.parentNode.removeChild(RemovedisplayName);
                    
                    var RemovedisplayName = document.getElementById("displayName");
                    var RemovedisplayDirections = document.getElementById("displayDirections");
                    var RemovedisplaycookTime = document.getElementById("displaycookTime");
                    var Removedisplaycategory = document.getElementById("displaycategory");
                    var Removedisplayingredients = document.getElementById("displayingredients");
                    var Removedisplaysubstitutions = document.getElementById("displaysubstitutions");
                    var displaysubstitutionsBreak = document.getElementById("displaysubstitutionsBreak");

                    if(typeof(RemovedisplayName) != 'undefined' && RemovedisplayName != null){
                    RemovedisplayName.parentNode.removeChild(RemovedisplayName);
                    RemovedisplayDirections.parentNode.removeChild(RemovedisplayDirections);
                    RemovedisplaycookTime.parentNode.removeChild(RemovedisplaycookTime);
                    Removedisplaycategory.parentNode.removeChild(Removedisplaycategory);
                    Removedisplayingredients.parentNode.removeChild(Removedisplayingredients);
                    Removedisplaysubstitutions.parentNode.removeChild(Removedisplaysubstitutions);
                    }
                    if(typeof(displaysubstitutionsBreak) != 'undefined' && displaysubstitutionsBreak != null){
                    displaysubstitutionsBreak.parentNode.removeChild(displaysubstitutionsBreak);
                    }
                }
            } else (
                console.log("No elements to delete")
            )
            
            for (let i = 0; i < data.length; i++) {
            
                
            const dataName = `[${i}] Recipe Name: ${data[i].name}`;
            const dataDirections = `[${i}] Instructions: ${data[i].directions}`;
            const datacookTime = `[${i}] Cook Time: ${data[i].cookTime}`;
            const datacategory = `[${i}] Category: ${data[i].category}`;
            const dataingredients = `[${i}] Ingredients: ${data[i].ingredients}`;
            const datasubstitutions = `[${i}] Substitutions: ${data[i].substitutions}`;
            
            console.log(dataName);
            console.log(dataDirections);
            console.log(datacookTime);
            console.log(datacategory);
            console.log(dataingredients);
            console.log(datasubstitutions);

                //display information:
                var currentDiv = document.getElementById("currentDiv");
                var div = document.createElement("div");

                var displayName = document.createElement("h6");
                // var displayNameBreak = document.createElement("br");
                displayName.innerHTML = `${dataName}`;
                displayName.id = "displayName";
                div.appendChild(displayName);
                // div.appendChild(displayNameBreak);

                var displayDirections = document.createElement("h6");
                // var displayDirectionsBreak = document.createElement("br");
                displayDirections.innerHTML = `${dataDirections}`;
                displayDirections.id = "displayDirections";
                div.appendChild(displayDirections);
                // div.appendChild(displayDirectionsBreak);

                var displaycookTime = document.createElement("h6");
                // var displaycookTimeBreak = document.createElement("br");
                displaycookTime.innerHTML = `${datacookTime}`;
                displaycookTime.id = "displaycookTime";
                div.appendChild(displaycookTime);
                // div.appendChild(displaycookTimeBreak);

                var displaycategory = document.createElement("h6");
                displaycategory.innerHTML = `${datacategory}`;
                displaycategory.id = "displaycategory";
                div.appendChild(displaycategory);

                var displayingredients = document.createElement("h6");
                displayingredients.innerHTML = `${dataingredients}`;
                displayingredients.id = "displayingredients";
                div.appendChild(displayingredients);

                var displaysubstitutions = document.createElement("h6");
                var displaysubstitutionsBreak = document.createElement("br");
                displaysubstitutionsBreak.id = "displaysubstitutionsBreak";
                displaysubstitutions.innerHTML = `${datasubstitutions}`;
                displaysubstitutions.id = "displaysubstitutions";
                div.appendChild(displaysubstitutions);
                div.appendChild(displaysubstitutionsBreak);

                div.appendChild(currentDiv);
                document.body.appendChild(div);
            }

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
        <div id="currentDiv"></div>

        </div>
    );
};

export default YourRecipes;