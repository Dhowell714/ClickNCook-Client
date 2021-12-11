

const TrendingRecipes = () => {
    // e.preventDefault();
    // baseURL = 'http://localhost:3000/recipe/'

    
    
    // console.log(searchNameValue);
    
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjM5MTk5NjA4LCJleHAiOjE2MzkyODYwMDh9.Ircx-Gb25XS0Aud7yoyFe-AUvSPpuxKlhN_Nn7-jww4'

    function fetchResults() {

        let searchName = document.getElementById("searchName");
    // console.log(searchName);
    if (searchName) {
        var searchNameValue = searchName.value;
    }

        // event.preventDefault();
        fetch('http://localhost:3000/recipe/all', {
            method: 'GET',
            headers: new Headers({
                'Content-type': 'application/json',
                "Authorization": `Bearer ${accessToken}`
            })
        })
        .then(res => {
          return res.json()
        })
        // .then(data => console.log(data))
        .then(data => {
        //   console.log('DATA', data);

            // set variables

            for (let i = 0; i < data.length; i++) {
            // console.log(searchNameValue);

            

            const dataName = `Recipe Name: ${data[i].name}`;
            const dataDirections = `Instructions: ${data[i].directions}`;
            const datacookTime = `Cook Time: ${data[i].cookTime}`;
            const datacategory = `Category: ${data[i].category}`;
            const dataingredients = `Ingredients: ${data[i].ingredients}`;
            const datasubstitutions = `Substitutions: ${data[i].substitutions}`;

            // console.log(searchNameValue);
                if (data[i].name === searchNameValue) {
                        // console.log("TEST")
                        var RemovedisplayName = document.getElementById("displayName");
                        if(typeof(RemovedisplayName) != 'undefined' && RemovedisplayName != null){
                            console.log('Element exists!');
                            RemovedisplayName.parentNode.removeChild(RemovedisplayName);

                            var RemovedisplayDirections = document.getElementById("displayDirections");
                            var RemovedisplaycookTime = document.getElementById("displaycookTime");
                            var Removedisplaycategory = document.getElementById("displaycategory");
                            var Removedisplayingredients = document.getElementById("displayingredients");
                            var Removedisplaysubstitutions = document.getElementById("displaysubstitutions");

                            RemovedisplayDirections.parentNode.removeChild(RemovedisplayDirections);
                            RemovedisplaycookTime.parentNode.removeChild(RemovedisplaycookTime);
                            Removedisplaycategory.parentNode.removeChild(Removedisplaycategory);
                            Removedisplayingredients.parentNode.removeChild(Removedisplayingredients);
                            Removedisplaysubstitutions.parentNode.removeChild(Removedisplaysubstitutions);

                            console.log(`${dataName}`);
                            console.log(`${dataDirections}`);
                            console.log(`${datacookTime}`);
                            console.log(`${datacategory}`);
                            console.log(`${dataingredients}`);
                            console.log(`${datasubstitutions}`);
                        
                            // display info
                            var currentDiv = document.getElementById("currentDiv");
                            var div = document.createElement("div");

                            var displayName = document.createElement("h6");
                            displayName.innerHTML = `${dataName}`;
                            displayName.id = "displayName";
                            div.appendChild(displayName);

                            var displayDirections = document.createElement("h6");
                            displayDirections.innerHTML = `${dataDirections}`;
                            displayDirections.id = "displayDirections";
                            div.appendChild(displayDirections);

                            var displaycookTime = document.createElement("h6");
                            displaycookTime.innerHTML = `${datacookTime}`;
                            displaycookTime.id = "displaycookTime";
                            div.appendChild(displaycookTime);

                            var displaycategory = document.createElement("h6");
                            displaycategory.innerHTML = `${datacategory}`;
                            displaycategory.id = "displaycategory";
                            div.appendChild(displaycategory);

                            var displayingredients = document.createElement("h6");
                            displayingredients.innerHTML = `${dataingredients}`;
                            displayingredients.id = "displayingredients";
                            div.appendChild(displayingredients);

                            var displaysubstitutions = document.createElement("h6");
                            displaysubstitutions.innerHTML = `${datasubstitutions}`;
                            displaysubstitutions.id = "displaysubstitutions";
                            div.appendChild(displaysubstitutions);

                            div.appendChild(currentDiv);
                            document.body.appendChild(div);
                        } else{
                            console.log(`${dataName}`);
                            console.log(`${dataDirections}`);
                            console.log(`${datacookTime}`);
                            console.log(`${datacategory}`);
                            console.log(`${dataingredients}`);
                            console.log(`${datasubstitutions}`);
                        
                            // display info
                            var currentDiv = document.getElementById("currentDiv");
                            var div = document.createElement("div");

                            var displayName = document.createElement("h6");
                            displayName.innerHTML = `${dataName}`;
                            displayName.id = "displayName";
                            div.appendChild(displayName);

                            var displayDirections = document.createElement("h6");
                            displayDirections.innerHTML = `${dataDirections}`;
                            displayDirections.id = "displayDirections";
                            div.appendChild(displayDirections);

                            var displaycookTime = document.createElement("h6");
                            displaycookTime.innerHTML = `${datacookTime}`;
                            displaycookTime.id = "displaycookTime";
                            div.appendChild(displaycookTime);

                            var displaycategory = document.createElement("h6");
                            displaycategory.innerHTML = `${datacategory}`;
                            displaycategory.id = "displaycategory";
                            div.appendChild(displaycategory);

                            var displayingredients = document.createElement("h6");
                            displayingredients.innerHTML = `${dataingredients}`;
                            displayingredients.id = "displayingredients";
                            div.appendChild(displayingredients);

                            var displaysubstitutions = document.createElement("h6");
                            displaysubstitutions.innerHTML = `${datasubstitutions}`;
                            displaysubstitutions.id = "displaysubstitutions";
                            div.appendChild(displaysubstitutions);

                            div.appendChild(currentDiv);
                            document.body.appendChild(div);
                            // div.insertBefore(currentDiv, div);


                            // console.log("SUCCESS!!")
                        // }
                        };
                        
                        

                } else {
                    console.log(searchNameValue);
                    // console.log('error!')
                }

          }
          
        })
        .catch(err => console.log(err))
    }

    // fetchResults();

    
    return(
        <div>
        
            <h1>TrendingRecipes stuff goes here</h1>
            <form>
            <input type="text" id="searchName" name="searchName"></input>
            <input type="button" value="Submit" onClick={fetchResults}></input>

            {/* display data below: */}
            </form>
            <div id="currentDiv"></div>

            {/* <h6 id="displaydataName"></h6>
            <h6 id="displaydataDirections"></h6>
            <h6 id="displaydatacookTime"></h6>
            <h6 id="displaydatacategory"></h6>
            <h6 id="displaydataingredients"></h6>
            <h6 id="displaydatasubstitutions"></h6> */}
            
        
        </div>
        
    
    );
};

export default TrendingRecipes;