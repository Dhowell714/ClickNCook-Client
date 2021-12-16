

const TrendingRecipes = () => {
    // e.preventDefault();
    // baseURL = 'http://localhost:3000/recipe/'

    
    
    // console.log(searchNameValue);
    
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjM5NjAwMzYyLCJleHAiOjE2Mzk2ODY3NjJ9.ucJMAPECMQzjlRjG-38Hhhzd_wPrRrSGQ7n9-rFv90U'
    const token = localStorage.getItem('token')

    function displayAllRecipes() {
        
        // const accessToken = (props.updateToken)
        console.log("displayAllRecipes() called")
            // event.preventDefault();
        fetch('http://localhost:3000/recipe/all', {
            method: 'GET',
            headers: new Headers({
                'Content-type': 'application/json',
                // "Authorization": `Bearer ${accessToken}`
                "Authorization": "Bearer " + token
            })
        })
        .then(res => {
          return res.json()
        })
        // .then(data => console.log(data))
        .then(data => {
            
            console.log(data)
            console.log("line 32")
            
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

            // displayAllRecipes();

    function fetchResults() {
        // const accessToken = props.updateToken
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
                // "Authorization": `Bearer ${accessToken}`
                // "Authorization": props.updateToken
                "Authorization": "Bearer " + token
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
                        // if(typeof(RemovedisplayName) != 'undefined' && RemovedisplayName != null){
                        //     console.log("line 34")
                        
                        // for (let i = 0; i < data.length; i++) {
                        //         console.log('Element exists!');
                        //         // RemovedisplayName.parentNode.removeChild(RemovedisplayName);
                                
                        //         var RemovedisplayName = document.getElementById("displayName");
                        //         var RemovedisplayDirections = document.getElementById("displayDirections");
                        //         var RemovedisplaycookTime = document.getElementById("displaycookTime");
                        //         var Removedisplaycategory = document.getElementById("displaycategory");
                        //         var Removedisplayingredients = document.getElementById("displayingredients");
                        //         var Removedisplaysubstitutions = document.getElementById("displaysubstitutions");
                        //         var displaysubstitutionsBreak = document.getElementById("displaysubstitutionsBreak");
            
                        //         RemovedisplayName.parentNode.removeChild(RemovedisplayName);
                        //         RemovedisplayDirections.parentNode.removeChild(RemovedisplayDirections);
                        //         RemovedisplaycookTime.parentNode.removeChild(RemovedisplaycookTime);
                        //         Removedisplaycategory.parentNode.removeChild(Removedisplaycategory);
                        //         Removedisplayingredients.parentNode.removeChild(Removedisplayingredients);
                        //         Removedisplaysubstitutions.parentNode.removeChild(Removedisplaysubstitutions);
                        //         displaysubstitutionsBreak.parentNode.removeChild(displaysubstitutionsBreak);
                        //     }
                        // } else (
                        //     console.log("No elements to delete")
                        // )

                        // var RemovedisplayName = document.getElementById("displayName");
                        if(typeof(RemovedisplayName) != 'undefined' && RemovedisplayName != null){
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

            <form>
                <input type="button" value="All Recipes" onClick={displayAllRecipes}></input>
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